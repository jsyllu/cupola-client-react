import React from "react"
import {Link, useParams} from "react-router-dom"
import {Helmet} from "react-helmet"
import {DummyData} from "../../dummyData/dummy-data"

const RentSearchResult = () => {
    const {location} = useParams()
    const rentals = DummyData

    return (
        <div>
            <Helmet>
                <title>Apartments for Rent in {location} | Cupola</title>
            </Helmet>
            <h1>Search Result - Rental Listings</h1>
            <ul>
                {
                    rentals.map((r, index) =>
                        <Link to={`/rent/${location}/p/${r.rlid}`}
                              key={index}>
                            <li>
                                {r.address}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </div>
    )
}

export default RentSearchResult