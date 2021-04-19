import React, {useEffect, useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import './auth.style.client.css'
import userActions from '../actions/user-actions'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'

const LogIn = (
    {
        currUser = {},
        logInUser
    }) => {

    const history = useHistory()
    const [credential, setCredential] = useState()

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            history.push('/profile')
        }
    }, [])

    useEffect(() => {
        if (currUser._id !== undefined) {
            // registered and logged in successfully, redirect to profile page
            history.push('/profile')
        }
    }, [currUser])

    const submitLogInRequest = () => {
        console.log(credential)
        logInUser(credential)
    }

    return (
        <div className="container">
            <Helmet>
                <title>Log In | Cupola</title>
            </Helmet>
            <div className="login-form">
                <form action="">
                    <h2 className="text-center">Log In</h2>
                    <hr />
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-envelope"></i>
                </span>
                        <label htmlFor="inputEmail" className="sr-only">Email</label>
                        <input className="form-control"
                               id="inputEmail"
                               type="email"
                               placeholder="Email Address"
                               onChange={(e) => setCredential(
                                   {...credential, email: e.target.value})}
                               required autoFocus />
                    </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-key"></i>
                </span>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input className="form-control"
                               id="inputPassword"
                               type="password"
                               placeholder="Password"
                               onChange={(e) => setCredential(
                                   {...credential, password: e.target.value})}
                               required />
                    </div>
                    <div className="">
                        <button className="btn btn-primary btn-block"
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault()
                                    submitLogInRequest()
                                }}>
                            Log in
                        </button>
                    </div>
                    <div className="form-group d-flex justify-content-between">
                        <label className="checkbox-inline">
                            <input type="checkbox"
                                   value="remember-me" />
                            &nbsp;Remember me
                        </label>
                        <a href="/">
                            Forgot Password
                        </a>
                    </div>
                </form>
                <div className="hint-text">
                    New to here?&nbsp;
                    <Link to="/register">
                        Sign Up
                    </Link>
                </div>
                <div className="hint-text">
                    <Link to="/">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    )
}

const stpm = (state) => ({
    currUser: state.userReducer.currUser
})
const dtpm = (dispatch) => ({
    logInUser: (credential) => userActions.logInUser(dispatch, credential)
})

export default connect
(stpm, dtpm)
(LogIn)