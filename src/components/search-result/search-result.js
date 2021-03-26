import React from "react"
import {Route} from 'react-router-dom'
import SaleSearchResult from "./sale-search-result"
import RentSearchResult from "./rent-search-result"

const SearchResult = () => {

    return (
        <div className="container">
            <p>
                common part of search result
            </p>
            <Route path="/sale/:location"
                   exact={true}
                   component={SaleSearchResult} />
            <Route path="/rent/:location"
                   exact={true}
                   component={RentSearchResult} />
        </div>
    )
}

export default SearchResult