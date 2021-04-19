import React from 'react'

import {
    FIND_USER_BY_ID,
    FIND_ALL_USERS,
    REGISTER_USER,
    LOG_OUT_USER,
    LOG_IN_USER,
    UPDATE_USER
} from '../components/actions/user-actions'
import {
    CREATE_PROPERTY_SALE
} from '../components/actions/property-actions'

const initialState = {
    allUsers: [
        // insert all users data (admin only)
    ],
    currUser: {
        // insert current user data
    },
    isLoggedIn: false, // not logged in by default
    tempProperty: {
        // insert a temporary property for a sale listing
    },

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_USER_BY_ID:
            return {
                ...state,
                currUser: action.user
            }
        case FIND_ALL_USERS:
            return {
                ...state,
                allUsers: action.allUsers
            }
        case REGISTER_USER:
            return {
                ...state,
                currUser: action.user,
                isLoggedIn: true
            }
        case LOG_OUT_USER:
            return {
                ...state,
                currUser: {},
                allUsers: [],
                isLoggedIn: false
            }
        case LOG_IN_USER:
            return {
                ...state,
                currUser: action.user,
                isLoggedIn: true
            }
        case UPDATE_USER:
            return {
                ...state,
                currUser: action.user
            }
        case CREATE_PROPERTY_SALE:
            return {
                ...state,
                tempProperty: action.property
            }
        default:
            return state
    }
}

export default userReducer