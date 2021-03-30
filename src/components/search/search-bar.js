import React, {useState} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import propertyActions from "../actions/property-actions"

// search property types
export const PROPERTY_TYPE_SALE = "sale"
export const PROPERTY_TYPE_RENT = "rent"

const SearchBar = (
    {
        saleListings = [],
        rentalListings = [],
        type,
        findSaleListings,
        findRentalListings
    }) => {

    const [searchInput, setSearchInput] = useState("boston, ma")

    const getResultForType = () => {
        if (validSearchInput()) {
            if (type === PROPERTY_TYPE_SALE) {
                findSaleListings(searchInput)
                // console.log(type)
                // console.log(searchInput)
                console.log(saleListings)
            } else if (type === PROPERTY_TYPE_RENT) {
                findRentalListings(searchInput)
                // console.log(type)
                // console.log(searchInput)
                console.log(rentalListings)
            }
        } else {
            alert("Please enter a valid address for search")
        }
    }

    const validSearchInput = () => {
        return searchInput.length >= 3
    }

    return (
        <div className="row">
            <div className="search-bar">
                <input className=""
                       type="text"
                       placeholder="Enter address"
                       value={searchInput}
                       onChange={(e) => setSearchInput(e.target.value)} />
                <Link to={`/${type}/${searchInput}`}
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
    saleListings: state.saleListingReducer.saleListings,
    rentalListings: state.rentalListingReducer.rentalListings
})

const dtpm = (dispatch) => ({
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