import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet"
import {connect} from 'react-redux'
import userActions from '../actions/user-actions'
import {Link, useHistory} from 'react-router-dom'
import {currencySymbol} from '../../util/functions'

const PropertyForRent = (
    {
        property = {},
        currUser = {},
        updateUser
    }) => {

    const history = useHistory()
    const [gallery, setGallery] = useState([])
    const [isTenant, setIsTenant] = useState(false)
    const [imgNo, setImgNo] = useState(1)
    const [starred, setStarred] = useState(false)

    useEffect(() => {
        if (property._id !== undefined) {
            setGallery(property.pid.details.gallery)
        }
    }, [property])

    useEffect(() => {
        if (currUser.tenantProfile !== undefined && property._id !== undefined) {
            setIsTenant(true)
            currUser.tenantProfile.wishList.map(like => {
                if (like === property._id) {
                    setStarred(true)
                }
            })
        }
    }, [currUser, property])

    const handleStar = () => {
        if (currUser._id === undefined) { // not logged in
            alert('Please log in first.')
            history.push('/login')
        } else if (!isTenant) { // not a tenant
            alert('Please create a tenant profile before you save the listing for rent.')
        } else {
            if (starred) { // remove from wishlist
                deleteFromWishlist()
            } else { // add to wishlist
                addToWishlist()
            }
        }
    }

    const addToWishlist = () => {
        currUser = {
            ...currUser,
            tenantProfile: {
                ...currUser.tenantProfile,
                wishList: [...currUser.tenantProfile.wishList, property._id]
            }
        }
        updateUser(currUser._id, currUser)
        setStarred(true)
        alert('Successfully added to your wish list in tenant profile.')
    }

    const deleteFromWishlist = () => {
        currUser = {
            ...currUser,
            tenantProfile: {
                ...currUser.tenantProfile,
                wishList: currUser.tenantProfile.wishList.filter(lid => lid === property._id)
            }
        }
        setStarred(false)
        alert('Successfully removed from your wish list in tenant profile.')
    }

    return (
        <div className="container">
            {
                property._id !== undefined &&
                <>
                    <Helmet>
                        <title>
                            {property.pid.address === undefined ? 'Property' : property.pid.address} for Rent |
                            Cupola
                        </title>
                    </Helmet>
                    <div className="text-center">
                        <i className={`${starred ? 'fas' : 'far'} fa-star fa-2x float-right`}
                           onClick={() => handleStar()}></i>
                        <h1 className="text-center">
                            {property.pid.address} For Rent
                        </h1>
                        <hr />
                        <h2>
                            {currencySymbol(property.currency)}
                            {property.price === undefined || property.price === null ? "unknown price" : property.price.toLocaleString('en-US')}
                        </h2>
                        <h4>
                            {property.pid.beds} beds | {property.pid.baths} baths | {property.pid.size} sqft
                        </h4>
                        <hr />
                    </div>
                    <div id="carouselExampleIndicators"
                         className="property-slide carousel slide"
                         data-ride="carousel">
                        <ol className="carousel-indicators">
                            {
                                gallery.map((img, index) => {
                                    return (
                                        <li data-target="#carouselExampleIndicators"
                                            data-slide-to={index}
                                            className={`${imgNo === index ? 'active' : ''}`}
                                            key={index}>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                gallery.map((img, index) => {
                                    return (
                                        <div className={`carousel-item ${imgNo === index ? 'active' : ''}`}
                                             key={index}>
                                            <img className="d-block w-100"
                                                 src={img}
                                                 alt={`${property.address} - slide ${index}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <a className="carousel-control-prev"
                           href="#carouselExampleIndicators"
                           role="button"
                           data-slide="prev">
                <span className="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                            <span className="sr-only">
                Previous
                </span>
                        </a>
                        <a className="carousel-control-next"
                           href="#carouselExampleIndicators"
                           role="button"
                           data-slide="next">
                <span className="carousel-control-next-icon"
                      aria-hidden="true"></span>
                            <span className="sr-only">
                Next
                </span>
                        </a>
                    </div>
                    <br />
                    <div className="property-facts">
                        <h2>
                            Facts and Features
                        </h2>
                        <hr />
                        <h5>
                            Type: {property.pid.type === undefined ? 'CONDO' : property.pid.type}
                        </h5>
                        <h5>
                            Year Built: {property.pid.details.yearBuilt}
                        </h5>
                        <h5>
                            Has Parking: {property.pid.details.hasParking.toString()}
                        </h5>
                        <h5>
                            Has Basement: {property.pid.details.hasBasement.toString()}
                        </h5>
                    </div>
                    <p>
                        Owned by &nbsp;
                        <Link to={`/profile/${property.pid.uid}`}>
                            {property.pid.uid}
                        </Link>
                    </p>
                </>
            }
        </div>
    )
}

const stpm = (state) => ({
    property: state.rentalListingReducer.currProperty,
    currUser: state.userReducer.currUser
})

const dtpm = (dispatch) => ({
    // findRentalListingById: (lid) => propertyActions.findRentalListingById(dispatch, lid)
    updateUser: (uid, user) => userActions.updateUser(dispatch, uid, user)
})

export default connect
(stpm, dtpm)
(PropertyForRent)