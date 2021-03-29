import React, {useEffect, useState} from "react"
import './header.style.client.css'
import {Link, useLocation} from "react-router-dom"

const Header = () => {
    // navbar tabs
    const DISCOVER = "Discover"
    const BUY = "Buy"
    const RENT = "Rent"
    const SELL = "Sell"
    const LOGIN = "Log In"
    const REGISTER = "Register"
    const PROFILE = "Profile"

    const path = useLocation().pathname
    const [searchBar, setSearchBar] = useState(false)
    const [type, setType] = useState("")
    const [searchInput, setSearchInput] = useState("Boston,MA")
    const [clickTab, setClickTab] = useState("")

    useEffect(() => {
        if (path.startsWith("/sale/")) {
            setType("sale")
            setSearchBar(true)
        } else if (path.startsWith("/rent/")) {
            setType("rent")
            setSearchBar(true)
        } else {
            setSearchBar(false)
        }
        setSearchInput("Boston,MA")
    }, [path])

    const searchForResult = () => {
        if (searchInput.length < 1) {
            alert("Please enter a valid address for search")
        } else {
            console.log("search this " + searchInput)
        }
    }

    return (
        // Navbar
        <nav className="navbar sticky-top navbar-expand-lg navbar-light py-3">
            <div className="container">
                <Link className="navbar-brand"
                      to="/">
                    <span>Cupola</span>
                </Link>

                {
                    searchBar &&
                    <div className="search-bar row">
                        <input className=""
                               type="text"
                               placeholder="Enter address"
                               value={searchInput}
                               onChange={(e) => setSearchInput(e.target.value)} />
                        <Link to={`/${type}/${searchInput}`}>
                            <button className="btn btn-outline-primary">
                                <i className="fas fa-search"></i>
                            </button>
                        </Link>
                    </div>
                }

                <label
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </label>

                <div className="navbar-menu collapse navbar-collapse"
                     id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"
                            onClick={() => setClickTab(DISCOVER)}>
                            <Link className={`nav-link ${clickTab === DISCOVER ? "active" : ""}`}
                                  aria-current="page"
                                  to="/">
                                {DISCOVER}
                            </Link>
                        </li>
                        <li className="nav-item"
                            onClick={() => setClickTab(SELL)}>
                            <Link className={`nav-link ${clickTab === SELL ? "active" : ""}`}
                                  to="/">
                                {SELL}
                            </Link>
                        </li>
                        <li className="nav-item"
                            onClick={() => setClickTab(BUY)}>
                            <Link className={`nav-link ${clickTab === BUY ? "active" : ""}`}
                                  to="/sale/boston,ma">
                                {BUY}
                            </Link>
                        </li>
                        <li className="nav-item"
                            onClick={() => setClickTab(RENT)}>
                            <Link className={`nav-link ${clickTab === RENT ? "active" : ""}`}
                                  to="/rent/boston,ma">
                                {RENT}
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav float-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fas fa-user-circle"
                               data-toggle="dropdown"
                               href="#">
                                &nbsp;
                            </a>
                            <div className="dropdown-menu">
                                <Link className={`nav-link dropdown-item ${clickTab === LOGIN ? "active" : ""}`}
                                      to="/login">
                                    {LOGIN}
                                </Link>
                                <Link className={`nav-link dropdown-item ${clickTab === REGISTER ? "active" : ""}`}
                                          to="/register">
                                        {REGISTER}
                                    </Link>
                                <Link className={`nav-link dropdown-item ${clickTab === PROFILE ? "active" : ""}`}
                                      to="/profile">
                                    {PROFILE}
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header