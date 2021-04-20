import listingService from "../../services/listing-service"

export const FIND_SALE_LISTINGS = "FIND_SALE_LISTINGS"
export const FIND_RENTAL_LISTINGS = "FIND_RENTAL_LISTINGS"
export const FIND_SALE_LISTING_BY_ID = "FIND_SALE_LISTING_BY_ID"
export const FIND_RENTAL_LISTING_BY_ID = "FIND_RENTAL_LISTING_BY_ID"
export const CREATE_PROPERTY_SALE = 'CREATE_PROPERTY_SALE'
export const CREATE_PROPERTY_RENTAL = 'CREATE_PROPERTY_RENTAL'
export const CREATE_SALE_LISTING = 'CREATE_SALE_LISTING'
export const CREATE_RENTAL_LISTING = 'CREATE_RENTAL_LISTING'

export const findSaleListings = (dispatch, location = '') => {
    listingService.findSaleListings(location)
        .then(sales => {
                console.log(sales)
                dispatch({
                    type: FIND_SALE_LISTINGS,
                    saleListings: sales
                })
            }).catch(err => console.log(err))
}
export const findRentalListings = (dispatch, location = '') => {
    listingService.findRentalListings(location)
        .then(rentals => {
            console.log(rentals)
            dispatch({
                type: FIND_RENTAL_LISTINGS,
                rentalListings: rentals
            })
        }).catch(err => console.log(err))
}
export const findSaleListingById = (dispatch, slid = '') => {
    listingService.findListingById('sale', slid)
        .then(listing => dispatch({
            type: FIND_SALE_LISTING_BY_ID,
            currListing: listing
        })).catch(err => console.log(err))
}
export const findRentalListingById = (dispatch, rlid = '') => {
    listingService.findListingById('rent', rlid)
        .then(listing => dispatch({
            type: FIND_RENTAL_LISTING_BY_ID,
            currListing: listing
        })).catch(err => console.log(err))
}

export const createPropertySale = (dispatch, property = {}) => {
    listingService.createProperty(property)
        .then(property => dispatch({
            type: CREATE_PROPERTY_SALE,
            property
        })).catch(err => console.log(err))
}

export const createPropertyRental = (dispatch, property = {}) => {
    listingService.createProperty(property)
        .then(property => dispatch({
            type: CREATE_PROPERTY_RENTAL,
            property
        })).catch(err => console.log(err))
}

export const createSaleListing = (dispatch, listing = {}) => {
    listingService.createSaleListing(listing)
        .then(listing => dispatch({
            type: CREATE_SALE_LISTING,
            listing
        })).catch(err => console.log(err))
}

export const createRentalListing = (dispatch, listing = {}) => {
    listingService.createRentalListing(listing)
        .then(listing => dispatch({
            type: CREATE_RENTAL_LISTING,
            listing
        })).catch(err => console.log(err))
}

const propertyActions = {
    findSaleListings,
    findRentalListings,
    findRentalListingById,
    findSaleListingById,
    createPropertySale,
    createPropertyRental,
    createSaleListing,
    createRentalListing
}

export default propertyActions