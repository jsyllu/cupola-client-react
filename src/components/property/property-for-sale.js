import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet"
import {currencySymbol} from '../../util/functions'
import {connect} from 'react-redux'
import ListingCard from '../search-result/listing-card'
import {PROPERTY_TYPE_SALE} from '../../reducers/search-bar-reducer'
import propertyActions from '../actions/property-actions'
import {useParams} from 'react-router-dom'

const PropertyForSale = (
    {
        property = {},
        gallery = [],
        findSaleListingById,
        findImagesByIdSale
    }) => {

    const {slid} = useParams()
    const [imgNo, setImgNo] = useState(0)

    useEffect(() => {
        if (slid !== "undefined" && typeof slid !== "undefined" && property.zpid.toString() !== slid) {
            console.log("start finding sale listing by id")
            findSaleListingById(slid)
            findImagesByIdSale(slid)
        }
    }, [slid])

    console.log(property)

    return (
        <>
            <Helmet>
                <title>
                    {property.address === undefined ? 'Property' : property.address.streetAddress} for Sale | Cupola
                </title>
            </Helmet>

            <div id="carouselExampleIndicators"
                 className="property-slide carousel slide"
                 data-ride="carousel">
                <ol className="carousel-indicators">
                    {
                        gallery.map((img, index) => {
                            return (
                                <li data-target="#carouselExampleIndicators"
                                    data-slide-to={index}
                                    className={`${imgNo === index ? 'active' : ''}`}></li>
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

            <div className="property-header">
                <div className="row">
                    <h3>
                        {currencySymbol(property.currency)}
                        {property.price === undefined || property.price === null ? "unknown price" : property.price.toLocaleString('en-US')}
                    </h3>
                    <button className="btn btn-outline-danger">
                        For Sale
                    </button>
                    <p>
                        {property.bedrooms} bd | {property.bathrooms} ba | {property.livingArea} sqft
                    </p>
                    <p></p>
                </div>
                <p>
                    {property.address.streetAddress}
                </p>
            </div>
            <div className="property-description">
                <h3>Description</h3>
                <p>{property.description}</p>
            </div>
            <div className="property-facts">
                <h3>Facts and Features</h3>
                <p>Type: {property.homeType}</p>
                <p>Year Built: {property.yearBuilt}</p>
            </div>
            <div className="property-nearby-properties">
                <h3>Nearby Homes</h3>
                {/*{*/}
                {/*    property.nearbyHome((nearby) => {*/}
                {/*        return (*/}
                {/*            <ListingCard listing={nearby} type={PROPERTY_TYPE_SALE} />*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </>
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
    findImagesByIdSale: (slid) => {
        propertyActions.findImagesByIdSale(dispatch, slid)
    }
})

export default connect
(stpm, dtpm)
(PropertyForSale)