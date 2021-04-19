import zillowService from "./zillow-service"
// const SERVER_URL = process.env.REACT_APP_SERVER_URL
const SERVER_URL = 'http://localhost:3001'

/**
 * get the listing detail
 * @param {Number} slid
 * @returns {Promise} a json promise
 */
const findListingById = async (slid) => {
    return zillowService.getPropertyDetail({"zpid": slid})
}
/**
 * find properties for sale based on different filters
 * @param {Object} params - a object that includes the filters information, required parameter - location : string
 * @returns {Promise} a json promise
 */
const findSaleListings = async (params) => {
    return zillowService.getPropertyByFilters({
        ...params,
        "status_type": "ForSale"
    })
}
/**
 * find properties for rent based on different filters
 * @param {Object} params - a object that includes the filters information, required parameter - location : string
 * @returns {Promise} a json promise
 */
const findRentalListings = async (params) => {
    return zillowService.getPropertyByFilters({
        ...params,
        "status_type": "ForRent"
    })
}
/**
 * get images of a sale listing
 * @param {Number} slid listing id
 * @returns {Promise} a json promise
 */
const findImagesById = async (slid) => {
    return zillowService.getPropertyImages({"zpid": slid})
}

const createProperty = (property) =>
    fetch(`${SERVER_URL}/property/new`, {
        method: 'POST',
        body: JSON.stringify(property),
        headers: {
            'content-type': 'application/json'
        }
    }).then((res) => res.json())
        .catch(err => console.log(err))

const createSaleListing = (listing) =>
    fetch(`${SERVER_URL}/sale/new`, {
        method: 'POST',
        body: JSON.stringify(listing),
        headers: {
            'content-type': 'application/json'
        }
    }).then((res) => res.json())
        .catch(err => console.log(err))

const createRentalListing = (listing) =>
    fetch(`${SERVER_URL}/rent/new`, {
        method: 'POST',
        body: JSON.stringify(listing),
        headers: {
            'content-type': 'application/json'
        }
    }).then((res) => res.json())
        .catch(err => console.log(err))

const listingService = {
    findListingById, findSaleListings, findImagesById, findRentalListings, createProperty,
    createSaleListing, createRentalListing
}

export default listingService