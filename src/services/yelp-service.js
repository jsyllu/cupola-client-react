const URL = process.env["REACT_APP_CUPOLA_YELP_URL"]
const API_KEY = process.env["REACT_APP_CUPOLA_YELP_API_KEY"]

/**
 * construct the endpoint url
 * @param {string} endpoint 
 * @param {object} params 
 * @returns 
 */
 const getEndPointHelper = (endpoint, params) => {
    let endPoint = URL + `/${endpoint}?`

    for (const prop in params) {
        endPoint += `${prop}=${params[prop]}&`
    }
    endPoint = endPoint.slice(0, -1) // remove the last &
    return endPoint
}
/**
 * get businesses based on different parameters such as location, lon, lat, radius, etc.
 * required parameters - location or (latitude and longitude)
 * src: https://www.yelp.com/developers/documentation/v3/business_search
 * @param {object} params 
 * @returns 
 */
const getBusinesses = async (params) => {
    const endPoint = getEndPointHelper("businesses/search", params);

    let response = await fetch(endPoint, {
        method : "GET",
        headers : {
            "Authorization" : `Bearer ${API_KEY}`
        }
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()    
}
/**
 * get the detail information of a bussiness with unique business id
 * src: https://www.yelp.com/developers/documentation/v3/business
 * @param {string} bid - Unique Yelp ID of this business. Example: '4kMBvIEWPxWkWKFN__8SxQ'
 * @returns 
 */
const getBuisnessDetail = async (bid) => {
    let endPoint = getEndPointHelper(`businesses/${bid}`, {})

    let response = await fetch(endPoint, {
        method : "GET",
        headers : {
            "Authorization" : `Bearer ${API_KEY}`
        }
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()    
}

const yelpService = {
    getBusinesses, getBuisnessDetail
}

export default yelpService