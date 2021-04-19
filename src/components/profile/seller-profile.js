import React, {useEffect, useState} from "react"
import userService from '../../services/user-service'
import NewPropertyForm from '../property/new-property-form'
import propertyActions from '../actions/property-actions'
import {connect} from 'react-redux'
import NewSaleListingForm from '../listing/new-sale-listing-form'

const SellerProfile = (
    {
        tempProperty = {},
        uid,
        openProfile,
        sellerProfile,
        createSaleListing,
        createPropertySale
    }) => {

    const [newForm, setNewForm] = useState(false)
    const [hasProperty, setHasProperty] = useState(false)
    const [saleListing, setSaleListing] = useState({})

    useEffect(() => {
        setHasProperty(true)
    }, [tempProperty])

    const createNewPropertySale = (property) => {
        createPropertySale(property)
    }

    const createNewSaleListing = (listing) => {
        createSaleListing(listing)
    }

    return (
        <>
            {
                openProfile &&
                <div className="profile container">
                    {
                        newForm &&
                        <div className="new-listing">
                            {
                                !hasProperty &&
                                <NewPropertyForm uid={uid}
                                                 createNewProperty={createNewPropertySale} />
                            }
                            {
                                hasProperty &&
                                <NewSaleListingForm pid={tempProperty._id}
                                                    createNewSaleListing={createNewSaleListing}/>
                            }
                        </div>
                    }
                    {
                        !newForm &&
                        <>
                            <button onClick={() => setNewForm(true)}>
                                Create a Sale Listing
                            </button>
                            <div className="post-to-sell">

                            </div>
                            <div className="sale-listing-results">
                                <h2>Sale Listing Results</h2>
                            </div>
                        </>
                    }

                </div>
            }
        </>
    )
}

const stpm = (state) => ({
    tempProperty: state.saleListingReducer.tempProperty
})

const dtpm = (dispatch) => ({
    createPropertySale: (property) => propertyActions.createPropertySale(dispatch, property),
    createSaleListing: (listing) => propertyActions
})

export default connect
(stpm, dtpm)
(SellerProfile)