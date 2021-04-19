import React, {useEffect, useState} from 'react'
import userActions from '../actions/user-actions'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'

const UserProfileUpdate = (
    {
        currUser = {},
        updateUser,
        findUserById
    }) => {

    const [user, setUser] = useState()

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            // redirect to login page if not logged in
            history.push('/login')
        } else {
            if (currUser._id === undefined) {
                findUserById(localStorage.getItem('uid'))
            }
            setUser(currUser)
        }
    }, [currUser])

    const submitUpdateRequest = () => {
        updateUser(user._id, user)
    }

    return (
        <div className="user-profile-update container">
            <Helmet>
                <title>Update Profile | Cupola</title>
            </Helmet>
            {
                user !== undefined &&


                <div className="signup-form">
                    <form action="">
                        <h2 className="text-center">
                            Update Your Profile
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
                                       value={user.firstName}
                                       onChange={(e) => setUser({...user, firstName: e.target.value})}
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
                                       value={user.lastName}
                                       onChange={(e) => setUser({...user, lastName: e.target.value})}
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
                                   value={user.email}
                                   onChange={(e) => setUser({...user, email: e.target.value})}
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
                                   value={user.phone}
                                   onChange={(e) => setUser({...user, phone: e.target.value})}
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
                                   onChange={(e) => setUser({...user, password: e.target.value})}
                                   required />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block"
                                    type="submit"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        submitUpdateRequest()
                                    }}>
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

const stpm = (state) => ({
    currUser: state.userReducer.currUser
})

const dtpm = (dispatch) => ({
    findUserById: (uid) => userActions.findUserById(dispatch, uid),
    updateUser: (uid, user) => userActions.updateUser(dispatch, uid, user)
})

export default connect
(stpm, dtpm)
(UserProfileUpdate)