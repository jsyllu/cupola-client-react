import React from 'react'

import {
    FIND_RENTAL_LISTINGS
} from "../components/actions/property-actions"

const initialState = {
    rentalListings : [
        // insert rental listings data
    ]
}

const rentalListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_RENTAL_LISTINGS:
            return {
                ...state,
                rentalListings : action.rentalListings
            }
        default:
            return state
    }
}

export default rentalListingReducer