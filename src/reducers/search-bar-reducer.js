import React from 'react'
import {UPDATE_SEARCH_TYPE, UPDATE_SEARCH_INPUT} from '../components/actions/search-bar-actions'

// search property types
export const PROPERTY_TYPE_SALE = "sale"
export const PROPERTY_TYPE_RENT = "rent"

const initialState = {
    searchInput: 'boston,ma',
    searchType: PROPERTY_TYPE_SALE
}

const searchBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TYPE:
            return {
                ...state,
                searchType: action.searchType
            }
        case UPDATE_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.searchInput
            }
        default:
            return state
    }

}

export default searchBarReducer