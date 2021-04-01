import React from "react"
import {connect} from "react-redux"
import './search.style.client.css'
import SearchBar from "./search-bar"
import searchBarActions from "../actions/search-bar-actions"
import {PROPERTY_TYPE_SALE, PROPERTY_TYPE_RENT} from "../../reducers/search-bar-reducer"

const Search = (
    {
        searchType = '',
        updateSearchType
    }) => {

    return (
        <div className="search container">
            <h1 className="search-heading">
                Discover your new dream home
            </h1>
            <div className="search-property-type radio-toggle">
                <label htmlFor={PROPERTY_TYPE_SALE}>
                    Buy
                </label>
                <input className=""
                       id={PROPERTY_TYPE_SALE}
                       type="radio"
                       name="type-radio"
                       checked={searchType === PROPERTY_TYPE_SALE}
                       onClick={() => updateSearchType(PROPERTY_TYPE_SALE)} />
                <label htmlFor={PROPERTY_TYPE_RENT}>
                    Rent
                </label>
                <input className=""
                       id={PROPERTY_TYPE_RENT}
                       type="radio"
                       name="type-radio"
                       checked={searchType === PROPERTY_TYPE_RENT}
                       onClick={() => updateSearchType(PROPERTY_TYPE_RENT)} />
                <div className="slide-item"></div>
            </div>
            <div className="search-property-location">
                <SearchBar />
            </div>
        </div>
    )
}

const stpm = (state) => ({
    searchType: state.searchBarReducer.searchType
})

const dtpm = (dispatch) => ({
    updateSearchType: (newType) => searchBarActions.updateSearchType(dispatch, newType)
})

export default connect
(stpm, dtpm)
(Search)