import React, {useEffect} from "react"
import {Route, useHistory, useParams} from "react-router-dom"
import './property.style.client.css'
import propertyActions from '../actions/property-actions'
import {connect} from 'react-redux'
import PropertyForSale from './property-for-sale'
import PropertyForRent from './property-for-rent'
import {PROPERTY_TYPE_RENT, PROPERTY_TYPE_SALE} from '../../reducers/search-bar-reducer'

const Property = (
    {
        findSaleListingById,
        findRentalListingById
    }) => {

    const history = useHistory()
    const {type, lid} = useParams()

    useEffect(() => {
        if (lid !== undefined) {
            if (type === PROPERTY_TYPE_SALE) {
                findSaleListingById(lid)
            } else if (type === PROPERTY_TYPE_RENT) {
                findRentalListingById(lid)
            }
        }
    }, [type, lid])

    return (
        <div className="property container">
            <i className='fas fa-chevron-left fa-2x float-left'
               onClick={() => history.goBack()}></i>
            <Route path={[
                "/sale/:location/p/:lid",
                "/sale/p/:lid"]}
                   exact={true}>
                <PropertyForSale />
            </Route>
            <Route path={[
                "/rent/:location/p/:lid",
                "/rent/p/:lid"]}
                   exact={true}>
                <PropertyForRent />
            </Route>
        </div>
    )
}

const stpm = (state) => ({
})

const dtpm = (dispatch) => ({
    findSaleListingById: (slid) => propertyActions.findSaleListingById(dispatch, slid),
    findRentalListingById: (rlid) => propertyActions.findRentalListingById(dispatch, rlid)
})

export default connect
(stpm, dtpm)
(Property)