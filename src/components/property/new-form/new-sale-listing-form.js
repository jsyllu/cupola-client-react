import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import {useHistory} from 'react-router-dom'
import propertyActions from '../../actions/property-actions'
import {connect} from 'react-redux'

const NewSaleListingForm = (
    {
        pid,
        createSaleListing
    }) => {

    const history = useHistory()
    const [price, setPrice] = useState()

    const submitNewRequest = (e) => {
        if (pid === undefined) {
            alert('Property is not defined')
            history.push('/profile/property/sale/new')
        }
        e.preventDefault()
        let listing = {
            pid,
            currency: 'USD',
            price
        }
        console.log(listing)
        createSaleListing(listing)
        alert('A listing for sale is created successfully')
        history.push('/profile')
    }

    return (
        <div className="container">
            <Helmet>
                <title>New Sale Listing | Cupola</title>
            </Helmet>
            <div className="signup-form">
                <form action="">
                    <i className="fas fa-chevron-left fa-2x float-left"
                       onClick={() => history.goBack()}></i>
                    <h2 className="text-center">
                        Create Listing
                    </h2>
                    <p className="text-center">
                        a listing for sale
                    </p>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="inputPrice">
                            Price ($)
                        </label>
                        <input className="form-control"
                               id="inputPrice"
                               type="number"
                               placeholder="750,000"
                               onChange={(e) => setPrice(e.target.value)}
                               required />
                    </div>
                    <p>
                        By clicking the submit button, I certify I own this property and have the right to sell it.
                    </p>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block"
                                type="submit"
                                onClick={(e) => submitNewRequest(e)}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const stpm = (state) => ({
    pid: state.userReducer.propertySale._id
})

const dtpm = (dispatch) => ({
    createSaleListing: (listing) => propertyActions.createSaleListing(dispatch, listing)
})

export default connect
(stpm, dtpm)
(NewSaleListingForm)