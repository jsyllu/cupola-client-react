import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet"
import {Link, useHistory, useParams} from "react-router-dom"
import SellerProfile from "./seller-profile"
import BuyerProfile from "./buyer-profile"
import LandlordProfile from "./landlord-profile"
import TenantProfile from "./tenant-profile"
import {connect} from 'react-redux'
import userActions from '../actions/user-actions'
import './user-profile.style.client.css'
import userService from '../../services/user-service'

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

    const {uid} = useParams()
    const [isPublic, setIsPublic] = useState(false)
    const [publicView, setPublicView] = useState({})

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
        }
    }, [])

    useEffect(() => {
        if (currUser !== undefined && uid !== undefined && currUser._id !== uid) {
            userService.findUserById(uid)
                .then((user) => {
                    setPublicView(user)
                    setIsPublic(true)
                }).catch(err => console.log(err))
        }
    }, [uid, currUser])

    useEffect(() => {
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

    const deleteAccount = () => {
        deleteUser(currUser._id)
        alert('Account has been deleted')
    }

    return (
        <>
            <Helmet>
                <title>
                    {isPublic && publicView !== undefined ? publicView.firstName + publicView.lastName + '\'s Public' : ''} Profile | Cupola
                </title>
            </Helmet>

            <div className="user-profile container">
                {
                    isPublic &&
                    <>
                        <i className='fas fa-chevron-left fa-2x'
                           onClick={() => history.goBack()}></i>
                        <h1>
                            Welcome to {publicView.firstName} {publicView.lastName}'s Profile
                        </h1>
                        <h3>
                            Contact: {publicView.email}
                        </h3>
                        <br/>
                        <h4>
                            User Roles:
                        </h4>
                        <ul>
                            {
                                publicView.sellerProfile !== undefined &&
                                    <li>
                                        Seller
                                    </li>
                            }
                            {
                                publicView.buyerProfile !== undefined &&
                                <li>
                                    Buyer
                                </li>
                            }
                            {
                                publicView.lenderProfile !== undefined &&
                                <li>
                                    Landlord
                                </li>
                            }
                            {
                                publicView.tenantProfile !== undefined &&
                                <li>
                                    Tenant
                                </li>
                            }
                        </ul>
                    </>
                }
                {
                    !isPublic &&
                    <>
                        <h1>Hello, {currUser.firstName} {currUser.lastName}</h1>
                        <div className="btn-group">
                            {
                                currUser.isAdmin &&
                                <Link className="btn btn-warning"
                                      to="/admin">
                                    Admin Board
                                </Link>
                            }
                            <Link className="btn btn-outline-success"
                                  to="/profile/update">
                                Update Profile
                            </Link>
                            <button className="btn btn-outline-danger"
                                    onClick={() => deleteAccount()}>
                                Delete Account
                            </button>
                        </div>
                        <hr />
                        <div className="user-profile-tab-list">
                            <button className={`user-profile-tab 
                    ${currUser[SELLER_PROFILE] === undefined ? CREATE : OPEN} 
                    ${openProfile === SELLER_PROFILE ? 'active' : ''}`}
                                    onClick={() => handleTabClick(SELLER_PROFILE)}>
                                {currUser[SELLER_PROFILE] === undefined ? CREATE : OPEN} {sellerBtn}
                            </button>
                            <button className={`user-profile-tab 
                    ${currUser[BUYER_PROFILE] === undefined ? CREATE : OPEN}
                     ${openProfile === BUYER_PROFILE ? 'active' : ''}`}
                                    onClick={() => handleTabClick(BUYER_PROFILE)}>
                                {currUser[BUYER_PROFILE] === undefined ? CREATE : OPEN} {buyerBtn}
                            </button>
                            <button className={`user-profile-tab 
                    ${currUser[LANDLORD_PROFILE] === undefined ? CREATE : OPEN}
                        ${openProfile === LANDLORD_PROFILE ? 'active' : ''}`}
                                    onClick={() => handleTabClick(LANDLORD_PROFILE)}>
                                {currUser[LANDLORD_PROFILE] === undefined ? CREATE : OPEN} {landlordBtn}
                            </button>
                            <button className={`user-profile-tab 
                    ${currUser[TENANT_PROFILE] === undefined ? CREATE : OPEN}
                    ${openProfile === TENANT_PROFILE ? 'active' : ''}`}
                                    onClick={() => handleTabClick(TENANT_PROFILE)}>
                                {currUser[TENANT_PROFILE] === undefined ? CREATE : OPEN} {tenantBtn}
                            </button>
                        </div>
                        <div className="user-profile-detail">
                            <SellerProfile profile={currUser.sellerProfile}
                                           openProfile={openProfile === SELLER_PROFILE}
                                           updateUser={updateUser}
                                           user={currUser} />
                            <BuyerProfile profile={currUser.buyerProfile}
                                          openProfile={openProfile === BUYER_PROFILE}
                                          updateUser={updateUser}
                                          user={currUser} />
                            <LandlordProfile profile={currUser.lenderProfile}
                                             openProfile={openProfile === LANDLORD_PROFILE}
                                             updateUser={updateUser}
                                             user={currUser} />
                            <TenantProfile profile={currUser.tenantProfile}
                                           openProfile={openProfile === TENANT_PROFILE}
                                           updateUser={updateUser}
                                           user={currUser} />
                        </div>
                    </>
                }
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