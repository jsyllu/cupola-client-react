import React from "react"
import {Link} from "react-router-dom"
import './listing-card.style.client.css'

const ListingCard = (
    {
        listing,
        type,
        gallery,
        location
    }) => {

    const currencySymbol = (currency) => {
        if (currency === 'USD') {
            return '$'
        } else {
            return ''
        }
    }

    return (
        <div className="property-card col-6">
            <div className="container">
                <Link to={`/${type}/${location}/p/${listing.zpid}`}>
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

export default ListingCard