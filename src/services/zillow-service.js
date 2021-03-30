const URL = process.env["REACT_APP_CUPOLA_URL"]
const API_KEY = process.env["REACT_APP_CUPOLA_API_KEY"]
const API_HOST = process.env["REACT_APP_CUPOLA_API_HOST"]

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
 * get property based on the parameters
 * required parameters: location - Location details, address or ZIP code.
 * reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
 * @param {object} params 
 */
const getPropertyByFilters = async (params) => {
    const endPoint = getEndPointHelper("propertyExtendedSearch", params)

    let response = await fetch(endPoint, {
        method : "GET",
        headers : {
            "content-type" : "application/json; charset=UTF-8",
            "x-rapidapi-key" : API_KEY,
            "x-rapidapi-host" : API_HOST
        }
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
}
/**
 * get property details based on the id of the property
 * required parameters: zpid - number
 * @param {object} params 
 */
const getPropertyDetail = async (params) => {
    let endPoint = getEndPointHelper("property", params)

    let response = await fetch(endPoint, {
        method : "GET",
        headers : {
            "content-type" : "application/json; charset=UTF-8",
            "x-rapidapi-key" : API_KEY,
            "x-rapidapi-host" : API_HOST
        }
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
}
/**
 * get iamges of a property based on the id of the property
 * required parameters: zpid - number
 * @param {object} params 
 */
const getPropertyImages = async (params) => {
    let endPoint = getEndPointHelper("images", params)

    let response = await fetch(endPoint, {
        method : "GET",
        headers : {
            "content-type" : "application/json; charset=UTF-8",
            "x-rapidapi-key" : API_KEY,
            "x-rapidapi-host" : API_HOST
        }
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
}

const zillowService = {
    getPropertyByFilters, getPropertyDetail, getPropertyImages
}

export default zillowService