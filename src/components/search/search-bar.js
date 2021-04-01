import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import propertyActions from "../actions/property-actions"
import searchBarActions from "../actions/search-bar-actions"
import {PROPERTY_TYPE_SALE, PROPERTY_TYPE_RENT} from "../../reducers/search-bar-reducer"

const SearchBar = (
    {
        searchType = '',
        searchInput = '',
        validateSearchInput,
        updateSearchInput,
        findSaleListings,
        findRentalListings
    }) => {

    const getResultForType = () => {
        if (validateSearchInput(searchInput)) {
            if (searchType === PROPERTY_TYPE_SALE) {
                findSaleListings(searchInput)
            } else if (searchType === PROPERTY_TYPE_RENT) {
                findRentalListings(searchInput)
            }
        } else {
            alert("Please enter a valid address for search")
        }
    }

    return (
        <div className="row">
            <div className="search-bar">
                <input className=""
                       type="text"
                       placeholder="Enter address"
                       value={searchInput}
                       onChange={(e) => updateSearchInput(e.target.value)} />
                <Link to={`/${searchType}/${searchInput}`}
                      onClick={() => getResultForType()}>
                    <button className="btn btn-outline-primary">
                        <i className="fas fa-search"></i>
                    </button>
                </Link>
            </div>
        </div>
    )
}

const stpm = (state) => ({
    searchType: state.searchBarReducer.searchType,
    searchInput: state.searchBarReducer.searchInput
})

const dtpm = (dispatch) => ({
    validateSearchInput: (searchInput) => {
        return searchBarActions.validateSearchInput(searchInput)
    },
    updateSearchInput: (newInput) => {
        searchBarActions.updateSearchInput(dispatch, newInput)
    },
    findSaleListings: (location) => {
        try {
            propertyActions.findSaleListings(dispatch, {location})
        } catch (e) {
            alert(e.message)
        }
    },
    findRentalListings: (location) => {
        try {
            propertyActions.findRentalListings(dispatch, {location})
        } catch (e) {
            alert(e.message)
        }
    }
})

export default connect
(stpm, dtpm)
(SearchBar)