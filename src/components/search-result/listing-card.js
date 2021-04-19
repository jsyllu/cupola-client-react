import React from "react"
import {Link} from "react-router-dom"
import './listing-card.style.client.css'
import {currencySymbol} from '../../util/functions'
import propertyActions from '../actions/property-actions'
import {connect} from 'react-redux'
import {PROPERTY_TYPE_RENT, PROPERTY_TYPE_SALE} from '../../reducers/search-bar-reducer'

const ListingCard = (
    {
        listing,
        type,
        gallery,
        location,
        findSaleListingById,
        findRentalListingById,
        findImagesByIdSale,
        findImagesByIdRental
    }) => {

    const pid = listing.zpid

    const goToProperty = () => {
        console.log("go to property")
        if (type === PROPERTY_TYPE_SALE) {
            findSaleListingById(pid)
            findImagesByIdSale(pid)
        } else if (type === PROPERTY_TYPE_RENT) {
            findRentalListingById(pid)
            findImagesByIdRental(pid)
        }
    }

    return (
        <div className="property-card col-6">
            <div className="container" onClick={() => goToProperty()}>
                <Link to={`/${type}/${location}/p/${pid}`}>
                    <img src={gallery}
                         className="card-img-top property-img"
                         alt={`Images for ${listing.address}`} />
                    <div className="card-body">
                        <h5 className="card-title property-price">
                            {currencySymbol(listing.currency)}
                            {listing.price === null ? "unknown price" : listing.price.toLocaleString('en-US')}
                        </h5>
                        <p className="card-text property-info">
                            {listing.bedrooms === null ? "unknown beds" : listing.bedrooms + " bds"}&nbsp;
                            {listing.bathrooms === null ? "unknown baths" : listing.bathrooms + " ba"}&nbsp;
                            {listing.livingArea === null ? "unknown size" : listing.livingArea + " sqft"}&nbsp;
                            - {listing.propertyType === null ? "unknown type" : listing.propertyType + " for " + type}
                        </p>
                        <p className="card-text property-address">
                            {listing.address}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

const dtpm = (dispatch) => ({
    findSaleListingById: (slid) => {
        propertyActions.findSaleListingById(dispatch, slid)
    },
    findRentalListingById: (rlid) => {
        propertyActions.findRentalListingById(dispatch, rlid)
    },
    findImagesByIdSale: (slid) => {
        propertyActions.findImagesByIdSale(dispatch, slid)
    },
    findImagesByIdRental: (rlid) => {
        propertyActions.findImagesByIdRental(dispatch, rlid)
    }
})

export default
connect
(dtpm)
(ListingCard)