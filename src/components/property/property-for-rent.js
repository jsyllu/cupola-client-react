import React from "react"
import {Helmet} from "react-helmet"
import {connect} from 'react-redux'
import propertyActions from '../actions/property-actions'

const PropertyForRent = (
    {
        property = {}
    }) => {
    return (
        <>
            {
                property._id !== undefined &&
                <div className="container">
                    <Helmet>
                        <title>{property.address} for Rent | Cupola</title>
                    </Helmet>
                    <h1>Property for Rent</h1>
                    <p>Address: {property.address}</p>
                </div>
            }
        </>

    )
}

const stpm = (state) => ({
    property: state.rentalListingReducer.currProperty
})

const dtpm = (dispatch) => ({
    findRentalListingById: (lid) => propertyActions.findRentalListingById(dispatch, lid)
})

export default connect
(stpm, dtpm)
(PropertyForRent)