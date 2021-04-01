import React from 'react'
import {Link} from "react-router-dom"
import './auth.style.client.css'

const LogIn = () => {
    return (
        <div className="container">
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
                               required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block"
                                type="submit"
                                onClick="location.href='../profile/profile.template.client.html'">
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

export default LogIn