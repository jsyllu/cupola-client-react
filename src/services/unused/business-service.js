import yelpService from "./yelp-service"

/**
 * find Businesses by location (address)
 * @param {String} location - address of a location, for example, "New York City", "350 5th Ave, New York, NY 10118".
 * @param {Number} radius  - a suggested search radius in meters
 * @returns
 */
const findBusinessesByLocation = async (location, radius = 2000) => {
    return yelpService.getBusinesses({
        location,
        radius
    })
}
/**
 * get the detail info for specific Business
 * @param {String} bid
 * @returns
 */
const findBusinessDetail = async (bid) => {
    return yelpService.getBusinessDetail(bid)
}

const businessService = {
    findBusinessesByLocation, findBusinessDetail
}

export default businessService