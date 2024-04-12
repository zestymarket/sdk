import axios from 'axios';
import { formats } from '../utils/formats.js';
import { checkUserPlatform } from '../utils/helpers.js';
//import { v4 as uuidv4 } from 'uuid'

const BEACON_API_BASE = 'https://beacon.zesty.market'
const BEACON_GRAPHQL_URI = 'https://beacon2.zesty.market/zgraphql'

const DB_ENDPOINT = 'https://api.zesty.market/api';
// TODO: Determine best way to enable switching to staging
// const STAGING_DB_ENDPOINT = 'https://api-staging.zesty.market/api';

//const sessionId = uuidv4();

let interval = null;
const retryCount = 4;
let currentTries = 0;
/** @type {HTMLIFrameElement} */
let iframe = null;
let ready = false;
let bids = null;

function getPrebidWinnerInfo() {
  const winner = bids;
  const regex = /(?:https:\/\/)[^\s"']+?(?=["']|\s)/g;
  const matches = winner.match(regex);

  return { asset_url: matches[1], cta_url: matches[0] };
}

const initPrebid = (adUnitId) => {
  // Load zesty prebid iframe
  iframe = document.createElement('iframe');
  iframe.src = 'https://www.zesty.xyz/prebid.html'
  document.body.appendChild(iframe);
  iframe.onload = () => {
    iframe.contentWindow.postMessage({ type: 'readycheck' }, '*');
  }
  window.addEventListener('message', ({ data }) => {
    switch (data.type) {
      case 'readystatus':
        ready = data.content;
        break;
      case 'bids':
        bids = data.content;
        break;
    }
  });
}

const getDefaultBanner = (format, style) => {
  return { Ads: [{ asset_url: formats[format].style[style], cta_url: 'https://www.zesty.xyz' }], CampaignId: 'TestCampaign' }
}

const fetchCampaignAd = async (adUnitId, format = 'tall', style = 'standard') => {
  initPrebid(adUnitId, format, style);

  return new Promise((res, rej) => {
    interval = setInterval(async () => {
      if (bids && bids.length > 0) {
        // Clear the interval and grab the image+url from the prebid ad
        clearInterval(interval);
        const { asset_url, cta_url } = getPrebidWinnerInfo();
        console.log(asset_url, cta_url);
        res({ Ads: [{ asset_url, cta_url }], CampaignId: 'TestCampaign' });
      } else {
        // Wait to see if we get any winning bids. If we hit max retry count, fallback to Zesty ad server
        currentTries++;
        if (currentTries == retryCount) {
          clearInterval(interval);
          try {
            const url = encodeURI(window.top.location.href).replace(/\/$/, ''); // If URL ends with a slash, remove it
            const res = await axios.get(`${DB_ENDPOINT}/ad?ad_unit_id=${adUnitId}&url=${url}`);
            if (res.data)
              res(res.data);
            else {
              // No active campaign, just display default banner
              res(getDefaultBanner(format, style));
            }
          } catch {
            console.warn('Could not retrieve an active campaign banner. Retrieving default banner.')
            res(getDefaultBanner(format, style));
          }
        }
      }
    }, 1000);
  });
}

/**
 * Increment the on-load event count for the space
 * @param {string} spaceId The space ID
 * @returns A Promise representing the POST request
 */
const sendOnLoadMetric = async (spaceId, campaignId = null) => {
  const { platform, confidence } = await checkUserPlatform();

  try {
    await axios.post(
      BEACON_GRAPHQL_URI,
      { query: `mutation { increment(eventType: visits, spaceId: \"${spaceId}\", campaignId: \"${campaignId}\", platform: { name: ${platform}, confidence: ${confidence} }) { message } }` },
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (e) {
    console.log("Failed to emit onload event", e.message)
  }
};

const sendOnClickMetric = async (spaceId, campaignId = null) => {
  const { platform, confidence } = await checkUserPlatform();

  try {
    await axios.post(
      BEACON_GRAPHQL_URI,
      { query: `mutation { increment(eventType: clicks, spaceId: \"${spaceId}\", campaignId: \"${campaignId}\", platform: { name: ${platform}, confidence: ${confidence} }) { message } }` },
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (e) {
    console.log("Failed to emit onclick event", e.message)
  }
}

const analyticsSession = async (spaceId, campaignId) => {
  const { platform, confidence } = await checkUserPlatform();
  try {
    await axios.post(
      BEACON_GRAPHQL_URI,
      { query: `mutation { increment(eventType: session, spaceId: \"${spaceId}\", campaignId: \"${campaignId}\", platform: { name: ${platform}, confidence: ${confidence} }) { message } }` },
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (e) {
    console.log(`Failed to emit session analytics`, e.message)
  }
}

export { fetchCampaignAd, sendOnLoadMetric, sendOnClickMetric, analyticsSession };
