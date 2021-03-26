import React, {useState} from "react"
import {Link} from "react-router-dom";

const Search = () => {
    // search property types
    const sale = "sale"
    const rent = "rent"

    const [type, setType] = useState(sale)
    const [location, setLocation] = useState("Boston,MA")

    return (
        <div className="search container">
            <h1 className="search-heading">
                Discover your new dream home
            </h1>
            <div className="search-property-type">
                <label htmlFor={sale}>
                    Buy
                </label>
                <input className=""
                       type="radio"
                       name="type"
                       checked={type === sale}
                       onClick={() => setType(sale)} />
                <label htmlFor={rent}>
                    Rent
                </label>
                <input className=""
                       type="radio"
                       name="type"
                       checked={type === rent}
                       onClick={() => setType(rent)} />
            </div>
            <div className="search-property-location">
                <div className="row">
                    <input className=""
                           type="text"
                           placeholder="Enter address"
                           value={location}
                           onChange={(e) => setLocation(e.target.value)} />
                    <Link to={`/${type}/${location}`}>
                        <button className="btn btn-outline-primary">
                            <i className="fas fa-search"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Search