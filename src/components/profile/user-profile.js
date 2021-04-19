import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet"
import {Link, useHistory} from "react-router-dom"
import SellerProfile from "./seller-profile"
import BuyerProfile from "./buyer-profile"
import LandlordProfile from "./landlord-profile"
import TenantProfile from "./tenant-profile"
import {connect} from 'react-redux'
import userActions from '../actions/user-actions'

const UserProfile = (
    {
        currUser = {},
        findUserById,
        updateUser,
        deleteUser
    }) => {

    const SELLER_PROFILE = "sellerProfile"
    const BUYER_PROFILE = "buyerProfile"
    const LANDLORD_PROFILE = "lenderProfile"
    const TENANT_PROFILE = "tenantProfile"

    const CREATE = 'Create'
    const OPEN = 'Open'

    const [sellerBtn, setSellerBtn] = useState('Seller Profile')
    const [buyerBtn, setBuyerBtn] = useState('Buyer Profile')
    const [landlordBtn, setLandlordBtn] = useState('Landlord Profile')
    const [tenantBtn, setTenantBtn] = useState('Tenant Profile')

    const history = useHistory()
    const [openProfile, setOpenProfile] = useState('')

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            // redirect to login page if not logged in
            history.push('/login')
        } else {
            if (currUser._id === undefined) {
                findUserById(localStorage.getItem('uid'))
                // open the first profile
                if (currUser[SELLER_PROFILE] !== undefined) {
                    setOpenProfile(SELLER_PROFILE)
                } else if (currUser[BUYER_PROFILE] !== undefined) {
                    setOpenProfile(BUYER_PROFILE)
                } else if (currUser[LANDLORD_PROFILE] !== undefined) {
                    setOpenProfile(LANDLORD_PROFILE)
                } else if (currUser[TENANT_PROFILE] !== undefined) {
                    setOpenProfile(TENANT_PROFILE)
                }
            }
        }
    }, [currUser])

    const handleTabClick = (profile) => {
        // create new profile for the role
        if (currUser[profile] === undefined) {
            createProfile(profile)
        }
        // open the selected profile
        openSelectedProfile(profile)
    }

    const createProfile = (profile) => {
        if (profile === SELLER_PROFILE) {
            currUser[SELLER_PROFILE] = {
                postToSell: [],
                saleListingResults: []
            }
        } else if (profile === BUYER_PROFILE) {
            currUser[BUYER_PROFILE] = {
                bids: [],
                wishList: []
            }
        } else if (profile === LANDLORD_PROFILE) {
            currUser[LANDLORD_PROFILE] = {
                postToLend: [],
                rentalListingResults: []
            }
        } else if (profile === TENANT_PROFILE) {
            currUser[TENANT_PROFILE] = {
                applications: [],
                wishList: []
            }
        }
        // update user object
        updateUser(currUser._id, currUser)
    }

    const openSelectedProfile = (profile) => {
        if (profile === SELLER_PROFILE) {
            setOpenProfile(SELLER_PROFILE)
        } else if (profile === BUYER_PROFILE) {
            setOpenProfile(BUYER_PROFILE)
        } else if (profile === LANDLORD_PROFILE) {
            setOpenProfile(LANDLORD_PROFILE)
        } else if (profile === TENANT_PROFILE) {
            setOpenProfile(TENANT_PROFILE)
        }
    }

    return (
        <>
            <Helmet>
                <title>Profile | Cupola</title>
            </Helmet>

            <div className="user-profile container">
                <h1>Hello, {currUser.firstName}</h1>
                <div className="btn-group">
                    <Link className="btn btn-outline-warning"
                          to="/profile/update">
                        Update Account
                    </Link>
                    <button className="btn btn-outline-danger"
                            onClick={() => deleteUser(currUser._id)}>
                        Delete Account
                    </button>
                </div>
                <hr />
                <div className="user-profile-tab-list">
                    <button className="user-profile-tab"
                            onClick={() => handleTabClick(SELLER_PROFILE)}>
                        {currUser[SELLER_PROFILE] === undefined ? CREATE : OPEN} {sellerBtn}
                    </button>
                    <button className="user-profile-tab"
                            onClick={() => handleTabClick(BUYER_PROFILE)}>
                        {currUser[BUYER_PROFILE] === undefined ? CREATE : OPEN} {buyerBtn}
                    </button>
                    <button className="user-profile-tab"
                            onClick={() => handleTabClick(LANDLORD_PROFILE)}>
                        {currUser[LANDLORD_PROFILE] === undefined ? CREATE : OPEN} {landlordBtn}
                    </button>
                    <button className="user-profile-tab"
                            onClick={() => handleTabClick(TENANT_PROFILE)}>
                        {currUser[TENANT_PROFILE] === undefined ? CREATE : OPEN} {tenantBtn}
                    </button>
                </div>
                <div className="user-profile-detail">
                    <SellerProfile openProfile={openProfile === SELLER_PROFILE} />
                    <BuyerProfile openProfile={openProfile === BUYER_PROFILE} />
                    <LandlordProfile openProfile={openProfile === LANDLORD_PROFILE} />
                    <TenantProfile openProfile={openProfile === TENANT_PROFILE} />
                </div>
            </div>
        </>
    )
}

const stpm = (state) => ({
    currUser: state.userReducer.currUser
})

const dtpm = (dispatch) => ({
    findUserById: (uid) => userActions.findUserById(dispatch, uid),
    updateUser: (uid, user) => userActions.updateUser(dispatch, uid, user),
    deleteUser: (uid) => userActions.deleteUser(dispatch, uid)
})

export default connect
(stpm, dtpm)
(UserProfile)