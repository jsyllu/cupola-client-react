import React from "react"
import {Link, useParams} from "react-router-dom"
import {Helmet} from "react-helmet"
import {SaleData} from "../../dummyData/dummy-data"

const SaleSearchResult = () => {
    const {location} = useParams()
    const sales = SaleData

    return (
        <div className="container">
            <Helmet>
                <title>Homes for Sale in {location} | Cupola</title>
            </Helmet>
            <h1>Search Result - For Sale Listings</h1>
            <ul>
                {
                    sales.map((s, index) =>
                        <Link to={`/sale/${location}/p/${s.slid}`}
                              key={index}>
                            <li>
                                {s.address}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </div>
    )
}

export default SaleSearchResult