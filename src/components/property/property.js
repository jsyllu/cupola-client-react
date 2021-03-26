import React from "react"
import {Route} from "react-router-dom"
import PropertyForRent from "./property-for-rent"
import PropertyForSale from "./property-for-sale"

const Property = () => {

    return (
        <div>
            <Route path={[
                "/sale/:location/p/:slid",
                "/sale/p/:slid"]}
                   exact={true}>
                <PropertyForSale p={
                    {address: "boston,ma"}}/>
            </Route>
            <Route path={[
                "/rent/:location/p/:rlid",
                "/rent/p/:rlid"]}
                   exact={true}>
                <PropertyForRent p={{address: "boston,ma"}}/>
            </Route>
        </div>
    )
}

export default Property