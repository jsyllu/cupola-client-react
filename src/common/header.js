import React, {useEffect, useState} from 'react'
import './header.style.client.css'
import {Link, useLocation} from 'react-router-dom'
import SearchBar from '../components/search/search-bar'
import {PROPERTY_TYPE_RENT, PROPERTY_TYPE_SALE} from '../reducers/search-bar-reducer'
import searchBarActions from '../components/actions/search-bar-actions'
import {connect} from 'react-redux'

const Header = (
    {
        searchType = '',
        searchInput = '',
        updateSearchType
    }) => {

    // navbar tabs
    const DISCOVER = 'Discover'
    const BUY = 'Buy'
    const RENT = 'Rent'
    const SELL = 'Sell'
    const LOGIN = 'Log In'
    const REGISTER = 'Register'
    const PROFILE = 'Profile'

    const path = useLocation().pathname
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [clickTab, setClickTab] = useState('')

    useEffect(() => {
        if (path.startsWith('/sale/')) {
            if (searchType !== PROPERTY_TYPE_SALE) {
                updateSearchType(PROPERTY_TYPE_SALE)
            }
            setShowSearchBar(true)
        } else if (path.startsWith('/rent/')) {
            if (searchType !== PROPERTY_TYPE_RENT) {
                updateSearchType(PROPERTY_TYPE_RENT)
            }
            setShowSearchBar(true)
        } else {
            setShowSearchBar(false)
        }
    }, [path])

    return (
        // Navbar
        <nav className="navbar sticky-top navbar-expand-lg navbar-light py-3">
            <div className="container">
                <Link className="navbar-brand"
                      to="/">
                    <span>Cupola</span>
                </Link>

                {
                    showSearchBar &&
                    <div className="navbar-menu">
                        <SearchBar />
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
                            <Link className={`nav-link ${clickTab === DISCOVER ? 'active' : ''}`}
                                  aria-current="page"
                                  to="/">
                                {DISCOVER}
                            </Link>
                        </li>
                        {/*<li className="nav-item"*/}
                        {/*    onClick={() => setClickTab(SELL)}>*/}
                        {/*    <Link className={`nav-link ${clickTab === SELL ? 'active' : ''}`}*/}
                        {/*          to="/">*/}
                        {/*        {SELL}*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                        <li className="nav-item"
                            onClick={() => setClickTab(BUY)}>
                            <Link className={`nav-link ${clickTab === BUY ? 'active' : ''}`}
                                  to={`/${PROPERTY_TYPE_SALE}/${searchInput}`}>
                                {BUY}
                            </Link>
                        </li>
                        <li className="nav-item"
                            onClick={() => setClickTab(RENT)}>
                            <Link className={`nav-link ${clickTab === RENT ? 'active' : ''}`}
                                  to={`/${PROPERTY_TYPE_RENT}/${searchInput}`}>
                                {RENT}
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav float-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fas fa-user-circle"
                               data-toggle="dropdown"
                               href="/">
                                &nbsp;
                            </a>
                            <div className="dropdown-menu">
                                <Link className={`nav-link dropdown-item ${clickTab === LOGIN ? 'active' : ''}`}
                                      to="/login">
                                    {LOGIN}
                                </Link>
                                <Link className={`nav-link dropdown-item ${clickTab === REGISTER ? 'active' : ''}`}
                                      to="/register">
                                    {REGISTER}
                                </Link>
                                <Link className={`nav-link dropdown-item ${clickTab === PROFILE ? 'active' : ''}`}
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

const stpm = (state) => ({
    searchType: state.searchBarReducer.searchType,
    searchInput: state.searchBarReducer.searchInput
})


const dtpm = (dispatch) => ({
    updateSearchType: (newType) => searchBarActions.updateSearchType(dispatch, newType)
})

export default connect
(stpm, dtpm)
(Header)
