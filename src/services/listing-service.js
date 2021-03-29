import zillowService from "./zillow-service";
/**
 * get the listing detail
 * @param {Integer} slid 
 * @returns {Promise} a json promise
 */
const findListingById = async (slid) => {
    return zillowService.getPropertyDetail({"zpid" : slid});
};
/**
 * find properties for sale based on different filters
 * @param {Object} params - a object that includes the filters information, required paramter - location : string
 * @returns {Promise} a json promise
 */
const findSaleListings = async (params) => {
    return zillowService.getPropertyByFilters({
        ...params,
        "status_type" : "ForSale"
    });
};
/**
 * find properties for rent based on different filters
 * @param {Object} params - a object that includes the filters information, required paramter - location : string
 * @returns {Promise} a json promise
 */
 const findRentalListings = async (params) => {
    return zillowService.getPropertyByFilters({
        ...params,
        "status_type" : "ForRent"
    });
};
/**
 * get images of a sale listing
 * @param {Integer} slid listing id 
 * @returns {Promise} a json promise
 */
const findImagesById = async (slid) => {
    return zillowService.getPropertyImages({"zpid" : slid});
}

const listingService = {
    findListingById, findSaleListings, findImagesById, findRentalListings
};

export default listingService;