import yelpService from "./yelp-service"
/**
 * find resturants by location (address)
 * @param {string} location - address of a location, for example, "New York City", "350 5th Ave, New York, NY 10118".
 * @param {number} radius  - a suggested search radius in meters
 * @returns 
 */
const findResturantsByLocation = async (location, radius = 2000) => {
    return yelpService.getBusinesses({
        location,
        radius
    })
}
/**
 * get the detail info for specific resturant
 * @param {string} bid 
 * @returns 
 */
const findResturantDetail = async (bid) => {
    return yelpService.getBuisnessDetail(bid)
}

const resturantService = {
    findResturantDetail, findResturantsByLocation
}

export default resturantService