import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet"
import {currencySymbol} from '../../util/functions'
import {connect} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import userActions from '../actions/user-actions'

const PropertyForSale = (
    {
        property = {},
        currUser = {},
        updateUser
    }) => {

    const history = useHistory()
    const [gallery, setGallery] = useState([])
    const [isBuyer, setIsBuyer] = useState(false)
    const [imgNo, setImgNo] = useState(1)
    const [starred, setStarred] = useState(false)

    useEffect(() => {
        if (property._id !== undefined) {
            setGallery(property.pid.details.gallery)
        }
    }, [property])

    useEffect(() => {
        if (currUser.buyerProfile !== undefined && property._id !== undefined) {
            setIsBuyer(true)
            currUser.buyerProfile.wishList.map(like => {
                if (like === property._id) {
                    setStarred(true)
                }
            })
        }
    }, [currUser, property])

    // console.log(starred)
    // console.log(currUser)

    const handleStar = () => {
        if (currUser._id === undefined) { // not logged in
            alert('Please log in first.')
            history.push('/login')
        } else if (!isBuyer) { // not a buyer
            alert('Please create a buyer profile before you save the listing for sale.')
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
            buyerProfile: {
                ...currUser.buyerProfile,
                wishList: [...currUser.buyerProfile.wishList, property._id]
            }
        }
        updateUser(currUser._id, currUser)
        setStarred(true)
        alert('Successfully added to your wish list in buyer profile.')
    }

    const deleteFromWishlist = () => {
        currUser = {
            ...currUser,
            buyerProfile: {
                ...currUser.buyerProfile,
                wishList: currUser.buyerProfile.wishList.filter(lid => lid === property._id)
            }
        }
        setStarred(false)
        alert('Successfully removed from your wish list in buyer profile.')
    }

    return (
        <div className="container">
            {
                property._id !== undefined &&
                <>
                    <Helmet>
                        <title>
                            {property.pid.address === undefined ? 'Property' : property.pid.address} for Sale |
                            Cupola
                        </title>
                    </Helmet>
                    <div className="text-center">
                        <i className={`${starred ? 'fas' : 'far'} fa-star fa-2x float-right`}
                           onClick={() => handleStar()}></i>
                        <h1 className="text-center">
                            {property.pid.address} For Sale
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
    property: state.saleListingReducer.currProperty,
    currUser: state.userReducer.currUser
})

const dtpm = (dispatch) => ({
    // findSaleListingById: (lid) => propertyActions.findSaleListingById(dispatch, lid),
    updateUser: (uid, user) => userActions.updateUser(dispatch, uid, user)
})

export default connect
(stpm, dtpm)
(PropertyForSale)