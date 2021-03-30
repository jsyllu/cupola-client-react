import listingService from "../../services/listing-service"

export const FIND_SALE_LISTINGS = "FIND_SALE_LISTINGS"
export const FIND_RENTAL_LISTINGS = "FIND_RENTAL_LISTINGS"

export const findSaleListings = (dispatch, param) => {
    listingService.findSaleListings(param)
        .then(sales => dispatch({
            type: FIND_SALE_LISTINGS,
            saleListings: sales.props
        }))
}
export const findRentalListings = (dispatch, param) => {
    listingService.findRentalListings(param)
        .then(rentals => dispatch({
            type: FIND_RENTAL_LISTINGS,
            rentalListings: rentals.props
        }))
}

const propertyActions = {
    findSaleListings, findRentalListings
}

export default propertyActions