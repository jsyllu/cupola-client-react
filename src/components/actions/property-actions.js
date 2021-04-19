import listingService from "../../services/listing-service"

export const FIND_SALE_LISTINGS = "FIND_SALE_LISTINGS"
export const FIND_RENTAL_LISTINGS = "FIND_RENTAL_LISTINGS"
export const FIND_SALE_LISTING_BY_ID = "FIND_SALE_LISTING_BY_ID"
export const FIND_RENTAL_LISTING_BY_ID = "FIND_RENTAL_LISTING_BY_ID"
export const FIND_IMAGES_BY_ID_SALE = "FIND_IMAGES_BY_ID_SALE"
export const FIND_IMAGES_BY_ID_RENTAL = "FIND_IMAGES_BY_ID_RENTAL"
export const CREATE_PROPERTY_SALE = 'CREATE_PROPERTY_SALE'
export const CREATE_PROPERTY_RENTAL = 'CREATE_PROPERTY_RENTAL'
export const CREATE_SALE_LISTING = 'CREATE_SALE_LISTING'
export const CREATE_RENTAL_LISTING = 'CREATE_RENTAL_LISTING'

export const findSaleListings = (dispatch, param) => {
    listingService.findSaleListings(param)
        .then(sales => {
                // console.log(sales)
                dispatch({
                    type: FIND_SALE_LISTINGS,
                    saleListings: sales.props
                })
            }
        )
}
export const findRentalListings = (dispatch, param) => {
    listingService.findRentalListings(param)
        .then(rentals => dispatch({
            type: FIND_RENTAL_LISTINGS,
            rentalListings: rentals.props
        }))
}
export const findSaleListingById = (dispatch, slid) => {
    listingService.findListingById(slid)
        .then(listing => dispatch({
            type: FIND_SALE_LISTING_BY_ID,
            currListing: listing
        }))
}
export const findRentalListingById = (dispatch, rlid) => {
    listingService.findListingById(rlid)
        .then(listing => dispatch({
            type: FIND_RENTAL_LISTING_BY_ID,
            currListing: listing
        }))
}
export const findImagesByIdSale = (dispatch, slid) => {
    listingService.findImagesById(slid)
        .then(gallery => dispatch({
            type: FIND_IMAGES_BY_ID_SALE,
            saleGallery: gallery.images
        }))
}
export const findImagesByIdRental = (dispatch, rlid) => {
    listingService.findImagesById(rlid)
        .then(gallery => dispatch({
            type: FIND_IMAGES_BY_ID_RENTAL,
            rentalGallery: gallery.images
        }))
}

export const createPropertySale = (dispatch, property) => {
    listingService.createProperty(property)
        .then(property => dispatch({
            type: CREATE_PROPERTY_SALE,
            property
        }))
}

export const createPropertyRental = (dispatch, property) => {
    listingService.createProperty(property)
        .then(property => dispatch({
            type: CREATE_PROPERTY_RENTAL,
            property
        }))
}

export const createSaleListing = (dispatch, listing) => {
    listingService.createSaleListing(listing)
        .then(listing => dispatch({
            type: CREATE_SALE_LISTING,
            listing
        }))
}

export const createRentalListing = (dispatch, listing) => {
    listingService.createRentalListing(listing)
        .then(listing => dispatch({
            type: CREATE_RENTAL_LISTING,
            listing
        }))
}

const propertyActions = {
    findSaleListings,
    findRentalListings,
    findRentalListingById,
    findSaleListingById,
    findImagesByIdSale,
    findImagesByIdRental,
    createPropertySale,
    createPropertyRental,
    createSaleListing,
    createRentalListing
}

export default propertyActions