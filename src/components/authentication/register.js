import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './auth.style.client.css'
import {connect} from 'react-redux'
import userActions from '../actions/user-actions'
import {Helmet} from 'react-helmet'

const Register = (
    {
        currUser = {},
        registerUser
    }) => {

    const history = useHistory()
    const [user, setUser] = useState({})
    const [profile, setProfile] = useState('sellerProfile')

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            history.push('/profile')
        }
    }, [])

    useEffect(() => {
        console.log(currUser)
        if (currUser._id !== undefined) {
            // registered and logged in successfully, redirect to profile page
            history.push('/profile')
        }
    }, [currUser])

    const submitRegisterRequest = () => {
        setUser({...user, [profile]: {}})
        console.log(user)
        registerUser(user)
    }

    return (
        <div className="container">
            <Helmet>
                <title>Register | Cupola</title>
            </Helmet>
            <div className="signup-form">
                <form action="">
                    <h2 className="text-center">
                        Register
                    </h2>
                    <hr />
                    <div className="form-group row">
                        <label htmlFor="inputFirstName"
                               className="sr-only">
                            First Name
                        </label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control"
                                   id="inputFirstName"
                                   name="first_name"
                                   placeholder="First Name"
                                   onChange={(e) => setUser(
                                       {...user, firstName: e.target.value})}
                                   required autoFocus />
                        </div>
                        <label htmlFor="inputLastName"
                               className="sr-only">
                            Last Name
                        </label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control"
                                   id="inputLastName"
                                   name="last_name"
                                   placeholder="Last Name"
                                   onChange={(e) => setUser(
                                       {...user, lastName: e.target.value})}
                                   required />
                        </div>
                    </div>
                    <div className="form-group">
                        <span className="form-control-icon">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <label htmlFor="inputEmail"
                               className="sr-only">
                            Email address
                        </label>
                        <input className="form-control"
                               id="inputEmail"
                               type="email"
                               name="email"
                               placeholder="Email"
                               onChange={(e) => setUser(
                                   {...user, email: e.target.value})}
                               required />
                    </div>
                    <div className="form-group">
                        <span className="form-control-icon">
                            <i className="fas fa-phone"
                               aria-hidden="true">
                            </i>
                        </span>
                        <label htmlFor="inputPhone"
                               className="sr-only">
                            Phone Number
                        </label>
                        <input className="form-control"
                               id="inputPhone"
                               type="tel"
                               name="phone"
                               placeholder="Phone Number"
                               onChange={(e) => setUser(
                                   {...user, phone: e.target.value})}
                               required />
                    </div>
                    <div className="form-group">
                        <span className="form-control-icon">
                            <i className="fas fa-key"></i>
                        </span>
                        <label htmlFor="inputPassword"
                               className="sr-only">
                            Password</label>
                        <input className="form-control"
                               id="inputPassword"
                               type="password"
                               placeholder="Password"
                               onChange={(e) => setUser(
                                   {...user, password: e.target.value})}
                               required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="selectRole">
                            Register As
                        </label>
                        <select id="selectRole"
                                className="col-sm-5"
                                name="role"
                                onChange={(e) => setProfile(e.target.value)}
                                required>
                            <option value="sellerProfile">
                                Seller
                            </option>
                            <option value="buyerProfile">
                                Buyer
                            </option>
                            <option value="landlordProfile">
                                Landlord
                            </option>
                            <option value="tenantProfile">
                                Tenant
                            </option>
                        </select>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label className="checkbox-inline">*/}
                    {/*        <input type="checkbox" required />*/}
                    {/*        &nbsp;I accept the&nbsp;*/}
                    {/*        <a href="/">*/}
                    {/*            Term of Use*/}
                    {/*        </a>*/}
                    {/*        &nbsp;&&nbsp;*/}
                    {/*        <a href="/">*/}
                    {/*            Privacy Policy*/}
                    {/*        </a>*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                    <div className="form-group">
                        <button className="btn btn-primary btn-block"
                                type='submit'
                                onClick={(e) => {
                                    e.preventDefault()
                                    submitRegisterRequest()
                                }}>
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="hint-text">
                    Already have an account?&nbsp;
                    <Link to="/login">
                        Login here
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
    registerUser: (user) => userActions.registerUser(dispatch, user)
})

export default connect
(stpm, dtpm)
(Register)