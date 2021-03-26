import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet";
import {SaleData} from "../../dummyData/dummy-data";
import {useParams} from "react-router-dom";

const PropertyForSale = ({p}) => {
    const {slid} = useParams()
    const [property, setProperty] = useState({})

    // function findById (id) {
    //     return id === slid
    // }
    //
    // useEffect(() => {
    //     setProperty(SaleData.filter(findById))
    //     console.log(property)
    // }, [slid])


    return (
        <div>
            <Helmet>
                <title>{p.address} for Sale | Cupola</title>
            </Helmet>
            <h1>Property for Sale</h1>
            <p>Address: {p.address}</p>
        </div>
    )
}

export default PropertyForSale