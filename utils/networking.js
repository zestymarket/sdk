import axios from 'axios';
import { formats, defaultFormat, defaultStyle } from '../utils/formats';
import { parseProtocol } from '../utils/helpers';
//import { v4 as uuidv4 } from 'uuid'

const API_BASE = 'https://metrics.zesty.market'

const ENDPOINTS = {
    "matic": 'https://api.thegraph.com/subgraphs/name/zestymarket/zesty-market-graph-matic',
    "polygon": 'https://api.thegraph.com/subgraphs/name/zestymarket/zesty-market-graph-matic',
    "rinkeby": 'https://api.thegraph.com/subgraphs/name/zestymarket/zesty-market-graph-rinkeby'
}

//const sessionId = uuidv4();

const DEFAULT_DATAS = {
  "uri": undefined,
}

const DEFAULT_URI_CONTENT = {
  "name": "Default banner",
  "description": "This is the default banner that would be displayed ipsum",
  "image": "https://ipfs.zesty.market/ipfs/QmWBNfP8roDrwz3XQo4qpu9fMxvUSTn8LB7d4JK7ybrfZ2/assets/zesty-ad-square.png",
  "url": "https://www.zesty.market"
}

/**
 * Queries The Graph to retrieve NFT information for the space.
 * @param {string} space The space ID
 * @param {string} creator The wallet address of the creator
 * @param {string} network The network to post metrics to
 * @returns An object with the requested space information, or a default if it cannot be retrieved.
 */
const fetchNFT = async (space, creator, network = 'polygon') => {
  const currentTime = Math.floor(Date.now() / 1000);
  return axios.post(ENDPOINTS[network], {
    query: `
      query {
        tokenDatas (
          where: {
            id: "${space}"
            creator: "${creator}"
          }
        )
        { 
          sellerNFTSetting {
            sellerAuctions (
              first: 5
              where: {
                contractTimeStart_lte: ${currentTime}
                contractTimeEnd_gte: ${currentTime}
                cancelled: false
              }
            ) {
              id
              buyerCampaigns {
                id
                uri
              }
              buyerCampaignsApproved
            }
          }
          id
        }
      }
    `
  })
  .then((res) => {
    return parseGraphResponse(res);
  })
  .catch((err) => {
    console.log(err);
    return DEFAULT_DATAS;
  })
};

/**
 * Parses the response from The Graph to find the latest auction campaign.
 * @param {Object} res The response object from The Graph.
 * @returns An object containing either the latest auction campaign or default data.
 */
const parseGraphResponse = res => {
  if (res.status != 200) {
    return DEFAULT_DATAS 
  }
  let sellerAuctions = res.data.data.tokenDatas[0]?.sellerNFTSetting?.sellerAuctions;
  let latestAuction = sellerAuctions?.find((auction, i) => {
    if (auction.buyerCampaigns.length > 0 && auction.buyerCampaignsApproved[i]) return auction;
  })?.buyerCampaigns[0];
  
  if (latestAuction == null) {
    return DEFAULT_DATAS 
  }

  return latestAuction;
}

/**
 * Pulls data from IPFS for the banner content.
 * @param {string} uri The IPFS URI containing the banner content.
 * @param {string} format The default banner image format to use if there is no active banner.
 * @param {string} style The default banner image style to use if there is no active banner.
 * @returns An object with the requested banner content, or a default if it cannot be retrieved.
 */
const fetchActiveBanner = async (uri, format, style) => {
  if (!uri) {
    let bannerObject = { uri: 'DEFAULT_URI', data: DEFAULT_URI_CONTENT };
    let newFormat = format || defaultFormat;
    let newStyle = style || defaultStyle;
    bannerObject.data.image = formats[newFormat].style[newStyle];
    return bannerObject;
  }

  return axios.get(parseProtocol(uri))
  .then((res) => {
    return res.status == 200 ? { uri: uri, data: res.data } : null
  })
}

/**
 * Increment the on-load event count for the space
 * @param {string} spaceId The space ID
 * @returns A Promise representing the POST request
 */
const sendOnLoadMetric = async (spaceId) => {
  try {
    const spaceCounterEndpoint = API_BASE + `/api/v1/space/${spaceId}`
    await axios.put(spaceCounterEndpoint)
  } catch (e) {
    console.log("Failed to emit onload event", e.message)
  }
};

export { fetchNFT, parseGraphResponse, fetchActiveBanner, sendOnLoadMetric };
