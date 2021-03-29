import React, {useState} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import './search.style.client.css'
import listingService from "../../services/listing-service"

const Search = ({
    getListing
}) => {
    // search property types
    const SALE = "sale"
    const RENT = "rent"

    const [type, setType] = useState(SALE)
    const [searchInput, setSearchInput] = useState("boston, ma")

    return (
        <div className="search container">
            <h1 className="search-heading">
                Discover your new dream home
            </h1>
            <div className="search-property-type radio-toggle">
                <label htmlFor={SALE}>
                    Buy
                </label>
                <input className=""
                       id={SALE}
                       type="radio"
                       name="type-radio"
                       checked={type === SALE}
                       onClick={() => setType(SALE)} />
                <label htmlFor={RENT}>
                    Rent
                </label>
                <input className=""
                       id={RENT}
                       type="radio"
                       name="type-radio"
                       checked={type === RENT}
                       onClick={() => setType(RENT)} />
                <div className="slide-item"></div>
            </div>
            <div className="search-property-location">
                <div className="search-bar row">
                    <input className=""
                           type="text"
                           placeholder="Enter address"
                           value={searchInput}
                           onChange={(e) => setSearchInput(e.target.value)} />
                   <Link to={`/${type}/${searchInput}`}
                        onClick={(e) => {
                            getListing(searchInput, type)
                        }}>
                        <button className="btn btn-outline-primary">
                            <i className="fas fa-search"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
const stpm = (state) => {}

const dtpm = (dispatch) => {
    return {
        getListing : async (location, type) => {
            let listings
            try {
                if (type === "sale") {
                    type = "FIND_PROPERTIES_FOR_SALE"
                    listings = await listingService.findSaleListings({location})
                } else {
                    type = "FIND_PROPERTIES_FOR_RENT"
                    listings = await listingService.findRentalListings({location})
                }
                console.log(listings["props"])
                dispatch({
                        type,
                        listings : listings["props"]
                })
            } catch (e) {
                alert(e.message)
            }
        }
    }
}

export default connect(stpm, dtpm)(Search)