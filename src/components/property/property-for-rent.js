import React from "react"
import {Helmet} from "react-helmet"

const PropertyForRent = (
    {
        property = {}
    }) => {
    return (
        <div className="container">
            <Helmet>
                <title>{property.address} for Rent | Cupola</title>
            </Helmet>
            <h1>Property for Rent</h1>
            <p>Address: {property.address}</p>
        </div>
    )
}

export default PropertyForRent