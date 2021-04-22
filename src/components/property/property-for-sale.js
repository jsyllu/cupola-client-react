import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet"
import {currencySymbol} from '../../util/functions'
import {connect} from 'react-redux'
import propertyActions from '../actions/property-actions'

const PropertyForSale = (
    {
        property = {}
    }) => {

    const [gallery, setGallery] = useState([])

    const [imgNo, setImgNo] = useState(1)

    useEffect(() => {
        if (property._id !== undefined) {
            console.log(property)
            setGallery(property.pid.details.gallery)
        }
    }, [property])

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
                        <h1 className="text-center">
                            {property.pid.address} For Sale
                        </h1>
                        <hr />
                        <h2>
                            {currencySymbol(property.currency)}
                            {property.price === undefined || property.price === null ? "unknown price" : property.price.toLocaleString('en-US')}
                        </h2>
                        <h4>
                            {property.pid.beds} bd | {property.pid.baths} ba | {property.pid.size} sqft
                        </h4>
                        <hr/>
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
                                        ></li>
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
                    <div className="property-facts">
                        <h3>
                            Facts and Features
                        </h3>
                        <p>
                            Type: {property.pid.type === undefined ? 'CONDO' : property.pid.type}
                        </p>
                        <p>
                            Year Built: {property.pid.details.yearBuilt}
                        </p>
                        <p>
                            Has Parking: {property.pid.details.hasParking.toString()}
                        </p>
                        <p>
                            Has Basement: {property.pid.details.hasBasement.toString()}
                        </p>
                    </div>
                </>
            }
        </div>
    )
}

const stpm = (state) => (
{
    property: state.saleListingReducer.currProperty
}
)

const dtpm = (dispatch) => (
{
    findSaleListingById: (lid) => propertyActions.findSaleListingById(dispatch, lid)
}
)

export default connect
(stpm, dtpm)
(PropertyForSale)