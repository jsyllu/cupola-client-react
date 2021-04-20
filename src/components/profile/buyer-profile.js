import React, {useEffect} from "react"
import userActions from '../actions/user-actions'
import {connect} from 'react-redux'
import ListingCard from '../search-result/listing-card'
import {PROPERTY_TYPE_SALE} from '../../reducers/search-bar-reducer'

const BuyerProfile = (
    {
        profile,
        openProfile,
        wishlist = [],
        getBuyerWishlist,
        updateBuyerWishlist
    }) => {

    useEffect(() => {
        if (openProfile && profile !== undefined) {
            getBuyerWishlist(profile.wishList)
        }
    }, [openProfile])

    const unlike = (listing) => {
        wishlist.filter((l) => l !== listing)
        updateBuyerWishlist(wishlist)
    }

    return (
        <>
            {
                openProfile &&
                <div className="profile container">
                    <h2>Wish List of Listings for Sale</h2>
                    <div className="search-result-grid">
                        <div className="row">
                            {
                                wishlist.map((listing) => {
                                    return (
                                        <ListingCard listing={listing}
                                                     type={PROPERTY_TYPE_SALE}
                                                     gallery="https://i.ytimg.com/vi/bIONUutiutk/maxresdefault.jpg"
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
    wishlist: state.userReducer.buyerWishlist
})

const dtpm = (dispatch) => ({
    getBuyerWishlist: (wishlist) => userActions.getBuyerWishlist(dispatch, wishlist),
    updateBuyerWishlist: (wishlist) => userActions.updateBuyerWishlist(dispatch, wishlist)
})

export default connect
(stpm, dtpm)
(BuyerProfile)