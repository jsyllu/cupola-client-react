import React from "react"
import {Helmet} from "react-helmet"
import {useParams} from "react-router-dom"

const PropertyForSale = ({p}) => {
    const {slid} = useParams()
    // const [property, setProperty] = useState({})

    return (
        <div className="container">
            <Helmet>
                <title>{p.address} for Sale | Cupola</title>
            </Helmet>
            <h1>Property for Sale</h1>
            <p>SLID: {slid}</p>
            <p>Address: {p.address}</p>
        </div>
    )
}

export default PropertyForSale