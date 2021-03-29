import React from "react"
import {Link, useParams} from "react-router-dom"
import {Helmet} from "react-helmet"
import {DummyData} from "../../dummyData/dummy-data"
import {connect} from "react-redux"

const RentSearchResult = ({
    rentals = []
}) => {
    const {location} = useParams()

    return (
        <div className="container">
            <Helmet>
                <title>Apartments for Rent in {location} | Cupola</title>
            </Helmet>
            <h1>Search Result - Rental Listings</h1>
            <ul>
                {
                    rentals.map((r, index) =>
                        <Link to={`/rent/${location}/p/${r.zpid}`}
                              key={index}>
                            <li>
                                {r["zpid"]} {/* test api*/}
                                {/* {r.address} */}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </div>
    )
}
const stpm = (state) => {
    return {
        rentals : state.rentalListingReducer.rentalListing
    }
}

const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)(RentSearchResult)