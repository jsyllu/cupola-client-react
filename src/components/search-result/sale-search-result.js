import React from "react"
import {Link, useParams} from "react-router-dom"
import {Helmet} from "react-helmet"
import {connect} from "react-redux"

const SaleSearchResult = ({
    sales = []
}) => {
    const {location} = useParams()

    return (
        <div className="container">
            <Helmet>
                <title>Homes for Sale in {location} | Cupola</title>
            </Helmet>
            <h1>Search Result - For Sale Listings</h1>
            <ul>
                {
                    sales.map((s, index) =>
                        <Link to={`/sale/${location}/p/${s.zpid}`}
                              key={index}>
                            <li>
                                {s["zpid"]} {/* test api*/}
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
        sales : state.saleListingReducer.saleListing
    }
}

const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)(SaleSearchResult)