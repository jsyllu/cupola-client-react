import React, {useState} from 'react'
import propertyActions from '../../actions/property-actions'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Helmet} from 'react-helmet'

const NewRentListingForm = (
    {
        pid,
        createRentalListing
    }) => {

    const history = useHistory()
    const [price, setPrice] = useState()

    const submitNewRequest = (e) => {
        if (pid === undefined) {
            alert('Property is not defined')
            history.push('/profile/property/rent/new')
        }
        e.preventDefault()
        let listing = {
            pid,
            currency: 'USD',
            price
        }
        console.log(listing)
        createRentalListing(listing)
        alert('A listing for rent is created successfully')
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
                        a listing for rent
                    </p>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="inputPrice">
                            Monthly Rent ($)
                        </label>
                        <input className="form-control"
                               id="inputPrice"
                               type="number"
                               placeholder="2500"
                               onChange={(e) => setPrice(e.target.value)}
                               required />
                    </div>
                    <p>
                        By clicking the submit button, I certify that (I own this property and) have the right to lend it.
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
    pid: state.userReducer.propertyRent._id
})

const dtpm = (dispatch) => ({
    createRentalListing: (listing) => propertyActions.createRentalListing(dispatch, listing)
})

export default connect
(stpm, dtpm)
(NewRentListingForm)