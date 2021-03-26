import React from "react"
import {Helmet} from "react-helmet";

const PropertyForRent = ({p}) => {
    // console.log(p)
    return (
        <div>
            <Helmet>
                <title>{p.address} for Rent | Cupola</title>
            </Helmet>
            <h1>Property for Rent</h1>
            <p>Address: {p.address}</p>
        </div>
    )
}

export default PropertyForRent