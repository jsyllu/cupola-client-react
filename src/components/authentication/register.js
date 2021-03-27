import React from 'react'
import {Link} from 'react-router-dom'
import './auth.style.client.css'

const Register = () => {
    return (
        <div className="container">
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
                                   required />
                        </div>
                    </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fa fa-user"
                       aria-hidden="true"></i>
                </span>
                        <label htmlFor="inputUsername"
                               className="sr-only">
                            Username</label>
                        <input className="form-control"
                               id="inputUsername"
                               type="text" name="username"
                               placeholder="Username"
                               required />
                    </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fa fa-calendar"
                       aria-hidden="true"></i>
                </span>
                        <label htmlFor="inputDOB"
                               className="sr-only">
                            Date
                        </label>
                        <input className="form-control"
                               type="date"
                               id="inputDOB"
                               data-inputmask="'alias': 'date'" />
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
                               required />
                    </div>
                    <div className="form-group">
                <span className="form-control-icon">
                    <i className="fas fa-key"></i>
                </span>
                        <label htmlFor="inputConfirmPassword"
                               className="sr-only">
                            Confirm Password</label>
                        <input className="form-control"
                               id="inputConfirmPassword"
                               type="password"
                               placeholder="Confirm Password"
                               required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="selectRole">
                            Register As
                        </label>
                        <select id="selectRole"
                                className="col-sm-5"
                                name="role"
                                required>
                            <option value="student"
                                    selected>
                                Student
                            </option>
                            <option value="instructor">
                                Instructor
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="checkbox-inline">
                            <input type="checkbox" required />
                            &nbsp;I accept the&nbsp;
                            <a href="#">
                                Term of Use
                            </a>
                            &nbsp;&&nbsp;
                            <a href="#">
                                Privacy Policy
                            </a>
                        </label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block"
                                type="submit"
                                onClick="location.href='../profile/profile.template.client.html'">
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

export default Register