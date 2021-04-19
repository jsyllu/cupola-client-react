import React from 'react'

import {
    FIND_IMAGES_BY_ID_SALE,
    FIND_SALE_LISTING_BY_ID,
    FIND_SALE_LISTINGS,
} from "../components/actions/property-actions"

const initialState = {
    saleListings: [
        // insert sale listings data
    ],
    currGallery: [
        // insert images for a property for sale
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
        case FIND_IMAGES_BY_ID_SALE:
            return {
                ...state,
                currGallery: action.saleGallery
            }
        default:
            return state
    }

}

export default saleListingReducer