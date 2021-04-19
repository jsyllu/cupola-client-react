import React, {useEffect} from "react"
import userActions from '../actions/user-actions'
import {connect} from 'react-redux'

const AdminBoard = (
    {
        allUsers = [],
        findAllUsers
    }) => {

    useEffect(() => {
        findAllUsers('607895710da0953e57c44f52')
    }, [])

    return (
        <div className="admin-board container">
            <h1>Admin Board</h1>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>uid</th>
                        <th scope='col'>firstname</th>
                        <th scope='col'>lastname</th>
                        <th scope='col'>phone</th>
                        <th scope='col'>email</th>
                        <th scope='col'>buyerProfile</th>
                        <th scope='col'>sellerProfile</th>
                        <th scope='col'>tenantProfile</th>
                        <th scope='col'>landlordProfile</th>
                    </tr>
                </thead>
                <tbody>
                {
                    allUsers.map((user, index) => {
                        return (
                            <tr key={user._id}>
                                <th scope='row'>{index+1}</th>
                                <td>{user._id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.buyerProfile !== undefined ? 'true' : 'false'}</td>
                                <td>{user.sellerProfile !== undefined ? 'true' : 'false'}</td>
                                <td>{user.tenantProfile !== undefined ? 'true' : 'false'}</td>
                                <td>{user.lenderProfile !== undefined ? 'true' : 'false'}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

const stpm = (state) => ({
    allUsers: state.userReducer.allUsers
})

const dtpm = (dispatch) => ({
    findAllUsers: (uid) => userActions.findAllUsers(dispatch, uid)
})

export default connect
(stpm, dtpm)
(AdminBoard)