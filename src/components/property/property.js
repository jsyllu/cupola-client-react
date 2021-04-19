import React, {useEffect} from "react"
import {Route, useParams} from "react-router-dom"
import './property.style.client.css'
import propertyActions from '../actions/property-actions'
import {connect} from 'react-redux'
import PropertyForSale from './property-for-sale'
import PropertyForRent from './property-for-rent'

const Property = (
    {
        property = {},
        gallery = [],
        findSaleListingById,
        findRentalListingById,
        findImagesByIdSale,
        findImagesByIdRental
    }) => {

    const {slid, rlid} = useParams()

    useEffect(() => {
        if (slid !== "undefined" && typeof slid !== "undefined" && property.zpid.toString() !== slid) {
            console.log("start finding sale listing by id")
            findSaleListingById(slid)
            findImagesByIdSale(slid)
        } else if (rlid !== "undefined" && typeof rlid !== "undefined" && property.zpid.toString() !== rlid) {
            findRentalListingById(rlid)
            findImagesByIdRental(rlid)
        }
    }, [slid, rlid])

    console.log(property)
    console.log(gallery)

    return (
        <div className="property container">
            <h1>common part of property</h1>
            <Route path={[
                "/sale/:location/p/:slid",
                "/sale/p/:slid"]}
                   exact={true}>
                {console.log(property)}
                <PropertyForSale property={property} gallery={gallery} />
            </Route>
            <Route path={[
                "/rent/:location/p/:rlid",
                "/rent/p/:rlid"]}
                   exact={true}>
                <PropertyForRent />
            </Route>
        </div>
    )
}

const stpm = (state) => ({
    property: state.saleListingReducer.currProperty,
    gallery: state.saleListingReducer.currGallery
})

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

export default connect
(stpm, dtpm)
(Property)