import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"
import './listing-card.style.client.css'
import {currencySymbol} from '../../util/functions'
import propertyActions from '../actions/property-actions'
import {connect} from 'react-redux'
import {PROPERTY_TYPE_RENT, PROPERTY_TYPE_SALE} from '../../reducers/search-bar-reducer'

const ListingCard = (
    {
        listing = {},
        type,
        star = false,
        unlike,
        mutable = false,
        updateThePost,
        deleteThePost,
        gallery = '',
        location,
        findSaleListingById,
        findRentalListingById
    }) => {

    const lid = listing._id
    const history = useHistory()
    const [price, setPrice] = useState(undefined)

    const goToProperty = () => {
        console.log("go to property")
        if (type === PROPERTY_TYPE_SALE) {
            findSaleListingById(lid)
        } else if (type === PROPERTY_TYPE_RENT) {
            findRentalListingById(lid)
        }
    }
// console.log(listing)

    return (
        <div className="property-card col-6">
            <div className="container">
                <div onClick={() => goToProperty()}>
                    <Link to={`/${type}${location === undefined ? '' : '/' + location}/p/${lid}`}>
                        <img src={gallery}
                             className="card-img-top property-img"
                             alt={`Images for ${listing.pid.address}`} />
                    </Link>
                </div>
                <div className="card-body">
                    {
                        star &&
                        <i className="fas fa-star fa-lg float-right"
                           onClick={() => unlike(listing)}></i>
                    }
                    {
                        mutable &&
                        <div className="float-right">
                            {
                                price === undefined &&
                                <i className="fas fa-pencil-alt fa-lg"
                                   onClick={() => setPrice(listing.price)}>
                                    &nbsp;
                                </i>
                            }
                            {
                                price !== undefined &&
                                <i className="fas fa-pencil-alt fa-lg"
                                   onClick={() => {
                                       updateThePost({
                                           ...listing,
                                           price
                                       })
                                       setPrice(undefined)
                                   }}>
                                    &nbsp;
                                </i>
                            }
                            <i className="fas fa-times fa-lg"
                               onClick={() => deleteThePost(listing)}>
                            </i>
                        </div>
                    }
                    {
                        price === undefined &&
                        <h5 className="card-title property-price">
                            {currencySymbol(listing.currency)}
                            {listing.price === null ? "unknown price" : listing.price.toLocaleString('en-US')}
                        </h5>
                    }
                    {
                        price !== undefined &&
                        <input type="number"
                               placeholder="1500"
                               value={price}
                               onChange={(e) => setPrice(e.target.value)} />
                    }

                    <p className="card-text property-info">
                        {listing.pid.beds === null ? "unknown beds" : listing.pid.beds + " bds"}&nbsp;
                        {listing.pid.baths === null ? "unknown baths" : listing.pid.baths + " ba"}&nbsp;
                        {listing.pid.size === null ? "unknown size" : listing.pid.size + " sqft"}&nbsp;
                        - {listing.type === null ? "unknown type" : listing.pid.type + " for " + type}
                    </p>
                    <p className="card-text property-address">
                        {listing.pid.address}
                    </p>
                </div>
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
    }
})

export default connect
(dtpm)
(ListingCard)