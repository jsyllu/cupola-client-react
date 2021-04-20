import React, {useEffect, useState} from "react"
import userActions, {findUserById} from '../actions/user-actions'
import {connect} from 'react-redux'
import './admin-board.style.client.css'
import {Helmet} from 'react-helmet'
import {useHistory} from 'react-router-dom'

const AdminBoard = (
    {
        currUser = {},
        allUsers = [],
        findUserById,
        findAllUsers,
        deleteUser,
        updateUser
    }) => {

    const history = useHistory()
    const [editing, setEditing] = useState({})
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [editingIndex, setEditingIndex] = useState()

    useEffect(() => {
        if (currUser._id === undefined) {
            findUserById(localStorage.getItem("uid"))
        }
    }, [])

    useEffect(() => {
        if (currUser.isAdmin) {
            findAllUsers(currUser._id)
        }
    }, [currUser])

    useEffect(() => {
        setFirstName(editing.firstName)
        setLastName(editing.lastName)
        setEmail(editing.email)
        setPhone(editing.phone)
    }, [editing])

    const submitUpdateRequest = () => {
        let editedUser = {
            ...editing,
            firstName,
            lastName,
            email,
            phone
        }
        updateUser(editing._id, editedUser)
        allUsers[editingIndex] = editedUser
        setEditing({})
    }

    const cancelUpdate = () => {
        setEditing({})
    }

    return (
        <div className="admin-board container">
            <Helmet>
                <title>Admin Board | Cupola</title>
            </Helmet>
            <i className='fas fa-chevron-left fa-2x float-left'
            onClick={() => history.goBack()}></i>
            <h1>Admin Board</h1>
            {
                currUser.isAdmin &&
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">uid</th>
                        <th scope="col">firstname</th>
                        <th scope="col">lastname</th>
                        <th scope="col">phone</th>
                        <th scope="col">email</th>
                        <th scope="col">buyerProfile</th>
                        <th scope="col">sellerProfile</th>
                        <th scope="col">tenantProfile</th>
                        <th scope="col">landlordProfile</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        allUsers.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user._id}</td>
                                    {
                                        editing === user &&
                                        <>
                                            <td>
                                                <input type="text"
                                                       placeholder="first name"
                                                       value={firstName}
                                                       onChange={(e) => setFirstName(e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text"
                                                       placeholder="last name"
                                                       value={lastName}
                                                       onChange={(e) => setLastName(e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text"
                                                       placeholder="phone"
                                                       value={phone}
                                                       onChange={(e) => setPhone(e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text"
                                                       placeholder="email"
                                                       value={email}
                                                       onChange={(e) => setEmail(e.target.value)} />
                                            </td>
                                            <td>{user.buyerProfile !== undefined ? 'true' : 'false'}</td>
                                            <td>{user.sellerProfile !== undefined ? 'true' : 'false'}</td>
                                            <td>{user.tenantProfile !== undefined ? 'true' : 'false'}</td>
                                            <td>{user.lenderProfile !== undefined ? 'true' : 'false'}</td>
                                            <td>
                                                <i className="fas fa-check"
                                                   onClick={() => submitUpdateRequest()}></i>
                                            </td>
                                            <td>
                                                <i className="fas fa-times"
                                                   onClick={() => cancelUpdate()}></i>
                                            </td>
                                        </>
                                    }
                                    {
                                        editing !== user &&
                                        <>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.email}</td>
                                            <td>{user.buyerProfile !== undefined ? 'true' : 'false'}</td>
                                            <td>{user.sellerProfile !== undefined ? 'true' : 'false'}</td>
                                            <td>{user.tenantProfile !== undefined ? 'true' : 'false'}</td>
                                            <td>{user.lenderProfile !== undefined ? 'true' : 'false'}</td>
                                            <td>
                                                <i className="fas fa-pen"
                                                   onClick={() => {
                                                       setEditingIndex(index)
                                                       setEditing(user)
                                                   }}></i>
                                            </td>
                                            <td>
                                                <i className="fas fa-trash-alt"
                                                   onClick={() => deleteUser(currUser._id)}></i>
                                            </td>
                                        </>
                                    }

                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            }

        </div>
    )
}

const stpm = (state) => ({
    currUser: state.userReducer.currUser,
    allUsers: state.userReducer.allUsers
})

const dtpm = (dispatch) => ({
    findUserById: (uid) => userActions.findUserById(dispatch, uid),
    findAllUsers: (uid) => userActions.findAllUsers(dispatch, uid),
    deleteUser: (uid) => userActions.deleteUser(dispatch, uid),
    updateUser: (uid, user) => userActions.updateUser(dispatch, uid, user)
})

export default connect
(stpm, dtpm)
(AdminBoard)