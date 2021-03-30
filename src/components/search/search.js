import React, {useState} from "react"
import './search.style.client.css'
import SearchBar, {PROPERTY_TYPE_RENT, PROPERTY_TYPE_SALE} from "./search-bar"

const Search = () => {

    const [type, setType] = useState(PROPERTY_TYPE_SALE)

    return (
        <div className="search container">
            <h1 className="search-heading">
                Discover your new dream home
            </h1>
            <div className="search-property-type radio-toggle">
                <label htmlFor={PROPERTY_TYPE_SALE}>
                    Buy
                </label>
                <input className=""
                       id={PROPERTY_TYPE_SALE}
                       type="radio"
                       name="type-radio"
                       checked={type === PROPERTY_TYPE_SALE}
                       onClick={() => setType(PROPERTY_TYPE_SALE)} />
                <label htmlFor={PROPERTY_TYPE_RENT}>
                    Rent
                </label>
                <input className=""
                       id={PROPERTY_TYPE_RENT}
                       type="radio"
                       name="type-radio"
                       checked={type === PROPERTY_TYPE_RENT}
                       onClick={() => setType(PROPERTY_TYPE_RENT)} />
                <div className="slide-item"></div>
            </div>
            <div className="search-property-location">
                <SearchBar type={type} />
            </div>
        </div>
    )
}

export default Search