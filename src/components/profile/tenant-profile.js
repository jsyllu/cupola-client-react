import React, {useEffect} from "react"
import userActions from '../actions/user-actions'
import {connect} from 'react-redux'
import ListingCard from '../search-result/listing-card'
import {PROPERTY_TYPE_RENT} from '../../reducers/search-bar-reducer'

const TenantProfile = (
    {
        profile,
        openProfile,
        wishlist = [],
        getTenantWishlist,
        updateTenantWishlist,
        updateUser,
        user = {}
    }) => {

    useEffect(() => {
        if (openProfile && profile !== undefined) {
            getTenantWishlist(profile.wishList)
        }
    }, [openProfile])

    const unlike = (listing) => {
        wishlist = wishlist.filter((l) => l._id !== listing._id)
        updateTenantWishlist(wishlist)
        let tenantProfile = {...user.tenantProfile, wishList: wishlist}
        updateUser(user._id, {...user, tenantProfile})
    }

    return (
        <>
            {
                openProfile &&
                <div className="profile container">
                    <h2>Wish List of Listings for Rent</h2>
                    <div className="search-result-grid">
                        <div className="row">
                            {
                                wishlist.map((listing) => {
                                    return (
                                        <ListingCard listing={listing}
                                                     type={PROPERTY_TYPE_RENT}
                                                     gallery="https://photos.zillowstatic.com/fp/fd2fbce65c42716ce7a3b3b7dfe8643f-cc_ft_1536.jpg"
                                                     star={true}
                                                     unlike={unlike}
                                                     key={listing._id} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const stpm = (state) => ({
    wishlist: state.userReducer.tenantWishlist
})

const dtpm = (dispatch) => ({
    getTenantWishlist: (wishlist) => userActions.getTenantWishlist(dispatch, wishlist),
    updateTenantWishlist: (wishlist) => userActions.updateTenantWishlist(dispatch, wishlist)
})

export default connect
(stpm, dtpm)
(TenantProfile)