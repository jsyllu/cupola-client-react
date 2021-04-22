import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import propertyActions from '../../actions/property-actions'
import {connect} from 'react-redux'
import {PROPERTY_TYPE_RENT, PROPERTY_TYPE_SALE} from '../../../reducers/search-bar-reducer'
import userReducer from '../../../reducers/user-reducer'
import {Helmet} from 'react-helmet'

const NewPropertyForm = (
    {
        uid,
        createPropertySale,
        createPropertyRental
    }) => {

    const {type} = useParams()
    const history = useHistory()
    const [beds, setBeds] = useState()
    const [baths, setBaths] = useState()
    const [size, setSize] = useState()
    const [address, setAddress] = useState()

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            // redirect to login page if not logged in
            history.push('/login')
        }
    }, [])

    const createNewProperty = () => {
        const property = {
            uid,
            beds,
            baths,
            size,
            address
        }
        if (type === PROPERTY_TYPE_SALE) {
            createPropertySale(property)
        } else if (type === PROPERTY_TYPE_RENT) {
            createPropertyRental(property)
        }
        history.push(`/profile/${type}/new`)
    }

    return (
        <div className="container">
            <Helmet>
                <title>New Property | Cupola</title>
            </Helmet>
            <div className="signup-form">
                <form action="">
                    <i className='fas fa-chevron-left fa-2x float-left'
                        onClick={() => history.goBack()}></i>
                    <h2 className="text-center">
                        Create Property
                    </h2>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="inputAddress">
                            Address
                        </label>
                        <div className="">
                            <input type="text"
                                   className="form-control"
                                   id="inputAddress"
                                   name="address"
                                   placeholder="150 Huntington Ave, Boston, MA 02115"
                                   onChange={(e) => setAddress(e.target.value)}
                                   required autoFocus />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSize">
                                Size (sqft)
                            </label>
                            <div className="">
                                <input type="number"
                                       className="form-control"
                                       id="inputSize"
                                       name="size"
                                       placeholder="1500"
                                       onChange={(e) => setSize(e.target.value)}
                                       required autoFocus />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputBeds">
                                No. Beds
                            </label>
                            <div className="">
                                <input type="number"
                                       className="form-control"
                                       id="inputBeds"
                                       name="beds"
                                       placeholder="2"
                                       onChange={(e) => setBeds(e.target.value)}
                                       required autoFocus />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputBaths">
                                No. Baths
                            </label>
                            <div className="">
                                <input type="number"
                                       className="form-control"
                                       id="inputBaths"
                                       name="baths"
                                       placeholder="2"
                                       onChange={(e) => setBaths(e.target.value)}
                                       required autoFocus />
                            </div>
                        </div>
                        <p>
                            Please note: The property information on this page cannot be changed.
                        </p>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block"
                                    type="submit"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        createNewProperty()
                                    }}>
                                Confirm Property
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const stpm = (state) => ({
    uid: state.userReducer.currUser._id
})

const dtpm = (dispatch) => ({
    createPropertySale: (property) => propertyActions.createPropertySale(dispatch, property),
    createPropertyRental: (property) => propertyActions.createPropertyRental(dispatch, property)
})

export default connect
(stpm, dtpm)
(NewPropertyForm)