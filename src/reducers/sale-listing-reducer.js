import React from 'react'

import {
    FIND_SALE_LISTINGS,
} from "../components/actions/property-actions"

const initialState = {
    saleListings : [
        // insert sale listings data
    ]
}

const saleListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_SALE_LISTINGS:
            return {
                ...state,
                saleListings : action.saleListings
            }
        default:
            return state
    }

}

export default saleListingReducer