import React from 'react'

import {
    FIND_USER_BY_ID,
    FIND_ALL_USERS,
    REGISTER_USER,
    LOG_OUT_USER,
    LOG_IN_USER,
    UPDATE_USER,
    GET_TENANT_WISHLIST,
    GET_BUYER_WISHLIST,
    GET_SELLER_POST,
    GET_LENDER_POST,
    UPDATE_SELLER_POST,
    UPDATE_LENDER_POST, UPDATE_BUYER_WISHLIST, UPDATE_TENANT_WISHLIST
} from '../components/actions/user-actions'
import {
    CREATE_PROPERTY_RENTAL,
    CREATE_PROPERTY_SALE, CREATE_RENTAL_LISTING, CREATE_SALE_LISTING
} from '../components/actions/property-actions'

const initialState = {
    allUsers: [
        // insert all users data (admin only)
    ],
    currUser: {
        // insert current user data
    },
    isLoggedIn: false, // not logged in by default
    propertySale: {},
    propertyRent: {},
    lenderPost: [],
    sellerPost: [],
    tenantWishlist: [],
    buyerWishlist: []
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
        case UPDATE_USER:
            return {
                ...state,
                currUser: action.user
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
        case GET_BUYER_WISHLIST:
            return {
                ...state,
                buyerWishlist: action.wishlist
            }
        case GET_TENANT_WISHLIST:
            return {
                ...state,
                tenantWishlist: action.wishlist
            }
        case GET_SELLER_POST:
            return {
                ...state,
                sellerPost: action.post
            }
        case GET_LENDER_POST:
            return {
                ...state,
                lenderPost: action.post
            }
        case UPDATE_BUYER_WISHLIST:
            return {
                ...state,
                buyerWishlist: action.wishlist
            }
        case UPDATE_TENANT_WISHLIST:
            return {
                ...state,
                tenantWishlist: action.wishlist
            }
        case UPDATE_SELLER_POST:
            return {
                ...state,
                sellerPost: action.post
            }
        case UPDATE_LENDER_POST:
            return {
                ...state,
                lenderPost: action.post
            }
        case CREATE_PROPERTY_SALE:
            return {
                ...state,
                propertySale: action.property
            }
        case CREATE_PROPERTY_RENTAL:
            return {
                ...state,
                propertyRent: action.property
            }
        case CREATE_SALE_LISTING:
            return {
                ...state,
                sellerPost: [action.listing, ...state.sellerPost],
                currUser: {
                    ...state.currUser,
                    sellerProfile: {
                        ...state.currUser.sellerProfile,
                        sellerPost: state.currUser.sellerProfile.sellerPost
                    }
                }
            }
        case CREATE_RENTAL_LISTING:
            return {
                ...state,
                lenderPost: [action.listing, ...state.lenderPost],
                currUser: {
                    ...state.currUser,
                    lenderProfile: {
                        ...state.currUser.lenderProfile,
                        lenderPost: state.currUser.lenderProfile.lenderPost
                    }
                }
            }
        default:
            return state
    }
}

export default userReducer