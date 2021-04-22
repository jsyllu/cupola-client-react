import React from 'react'

import {
    FIND_RENTAL_LISTING_BY_ID,
    FIND_RENTAL_LISTINGS
} from "../components/actions/property-actions"

const initialState = {
    rentalListings : [
        // insert rental listings data
    ],
    currProperty: {
        // insert a property for rent currently viewed by the user
    }
}

const rentalListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_RENTAL_LISTINGS:
            return {
                ...state,
                rentalListings : action.rentalListings
            }
        case FIND_RENTAL_LISTING_BY_ID:
            return {
                ...state,
                currProperty: action.currProperty
            }
        default:
            return state
    }
}

export default rentalListingReducer