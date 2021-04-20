import React from 'react'

import {
    FIND_SALE_LISTING_BY_ID,
    FIND_SALE_LISTINGS,
} from "../components/actions/property-actions"

const initialState = {
    saleListings: [
        // insert sale listings data
    ],
    currProperty: {
        // insert a property for sale currently viewed by the user
    }
}

const saleListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_SALE_LISTINGS:
            return {
                ...state,
                saleListings: action.saleListings
            }
        case FIND_SALE_LISTING_BY_ID:
            return {
                ...state,
                currProperty: action.currListing
            }
        default:
            return state
    }

}

export default saleListingReducer