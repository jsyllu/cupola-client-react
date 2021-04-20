import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {Helmet} from "react-helmet"
import {connect} from "react-redux"
import propertyActions from "../actions/property-actions"
import ListingCard from "./listing-card"
import {PROPERTY_TYPE_RENT} from "../../reducers/search-bar-reducer"
import searchBarActions from '../actions/search-bar-actions'

const RentSearchResult = (
    {
        searchInput = '',
        rentalListings = [],
        validateSearchInput,
        updateSearchInput,
        findRentalListings
    }) => {

    const {location} = useParams()

    useEffect(() => {
        // update search input with {@param location}
        if (location !== searchInput) {
            updateSearchInput(location)
        }
    }, [location])

    useEffect(() => {
        // find listings for valid search input
        if (rentalListings.length < 1) {
            if (validateSearchInput(searchInput)) {
                console.log(searchInput)
                findRentalListings(searchInput)
            } else {
                alert("Please enter a valid address for search")
            }
        }
    }, [searchInput])

    return (
        <div className="container">
            <Helmet>
                <title>Apartments for Rent in {location} | Cupola</title>
            </Helmet>
            <h1>Rental Listings in {location}</h1>
            <p>{rentalListings.length} results</p>
            <div className="search-result-grid">
                <div className="row">
                    {
                        rentalListings.map((r, index) =>
                            <ListingCard listing={r}
                                         type={PROPERTY_TYPE_RENT}
                                         location={location}
                                         gallery="https://photos.zillowstatic.com/fp/fd2fbce65c42716ce7a3b3b7dfe8643f-cc_ft_1536.jpg"
                                         key={index} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const stpm = (state) => ({
    searchInput: state.searchBarReducer.searchInput,
    rentalListings: state.rentalListingReducer.rentalListings
})

const dtpm = (dispatch) => ({
    validateSearchInput: (searchInput) => {
        return searchBarActions.validateSearchInput(searchInput)
    },
    updateSearchInput: (newInput) => {
        searchBarActions.updateSearchInput(dispatch, newInput)
    },
    findRentalListings: (location) => {
        try {
            propertyActions.findRentalListings(dispatch, location)
        } catch (e) {
            alert(e.message)
        }
    }
})

export default connect
(stpm, dtpm)
(RentSearchResult)