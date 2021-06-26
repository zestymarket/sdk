import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Modify to test a local server
// const API_BASE = 'http://localhost:2354';
const API_BASE = 'https://node-1.zesty.market'
const METRICS_ENDPOINT = API_BASE + '/api/v1/metrics'

const AD_ENDPOINT = 'https://api.thegraph.com/subgraphs/name/zestymarket/zesty-market-graph-rinkeby'

const sessionId = uuidv4();

const DEFAULT_AD_DATAS = {
  "uri": undefined,
}

const DEFAULT_AD_URI_CONTENT = {
  "name": "Default Ad",
  "description": "This is the default ad that would be displayed ipsum",
  "image": "https://assets.wonderleap.co/wonderleap-ad-2.png",
  "cta": "https://wonderleap.co/"
}

const fetchNFT = async (adSpace, creator) => {
  const currentTime = Math.floor(Date.now() / 1000);
  return axios.post(AD_ENDPOINT, {
    query: `
      query {
        tokenDatas (
          where: {
            id: "${adSpace}"
            creator: "${creator}"
          }
        )
        { 
          sellerNFTSetting {
            sellerAuctions (
              first: 1
              where: {
                contractTimeStart_lte: ${currentTime}
                contractTimeEnd_gte: ${currentTime}
              }
            ) {
              id
              buyerCampaigns {
                id
                uri
              }
            }
          }
          id
        }
      }
    `
  })
  .then((res) => {
    if (res.data.data.tokenDatas && res.data.data.tokenDatas.length > 0) {
      return res.status === 200 ? res.data.data.tokenDatas[0] : null
    }

    return DEFAULT_AD_DATAS;
  })
  .catch((err) => {
    console.log(err);
    return DEFAULT_AD_DATAS;
  })
};

const fetchActiveAd = async (uri) => {
  if (!uri) {
    return { uri: 'DEFAULT_URI', data: DEFAULT_AD_URI_CONTENT }
  }

  return axios.get(uri)
  .then((res) => {
    return res.status === 200 ? { uri: uri, data: res.data } : null
  })
}

const sendMetric = (
  creator,
  adSpace,
  uri,
  image,
  url,
  event,
  durationInMs,
  ) => {
  const currentMs = Math.floor(Date.now());
  const config = {
    headers: {
      'Content-Type': 'text/plain'
    }
  }
  return axios.post(METRICS_ENDPOINT, {
    _id: uuidv4(),
    creator: creator,
    adSpace: adSpace,
    uri: uri,
    image: image,
    url: url,
    event: event,
    durationInMs: durationInMs,
    sessionId: sessionId,
    timestampInMs: currentMs,
    sdkVersion: 1,
    sdkType: 'r3f',
  }, config)
};

export { fetchNFT, fetchActiveAd, sendMetric };