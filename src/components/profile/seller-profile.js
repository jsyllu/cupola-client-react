import React, {useEffect} from "react"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import userActions from '../actions/user-actions'
import ListingCard from '../search-result/listing-card'
import {PROPERTY_TYPE_SALE} from '../../reducers/search-bar-reducer'
import propertyActions from '../actions/property-actions'

const SellerProfile = (
    {
        profile,
        posts = [],
        openProfile,
        getSellerPost,
        updateSellerPost,
        updateUser,
        user = {}
    }) => {

    useEffect(() => {
        if (openProfile && profile !== undefined) {
            getSellerPost(profile.postToSell)
        }
    }, [openProfile])

    // console.log(posts)
    // console.log(profile)

    const deleteThePost = (post) => {
        propertyActions.deleteListing('sale', post._id)
        posts = posts.filter((p) => p._id !== post._id)
        updateSellerPost(posts)
        let sellerProfile = {...user.sellerProfile, postToSell: posts}
        updateUser(user._id, {...user, sellerProfile})
        alert('The post for sale has been deleted successfully.')
    }

    const updateThePost = (post) => {
        post = {
            ...post,
            pid: post.pid._id
        }
        propertyActions.updateListing('sale', post._id, post)
        posts = posts.map(function (p) {
            return (p._id !== post._id) ? p : post
        })
        updateSellerPost(posts)
        let sellerProfile = {...user.sellerProfile, postToSell: posts}
        updateUser(user._id, {...user, sellerProfile})
    }

    return (
        <>
            {
                openProfile &&
                <div className="profile container">
                    <Link to="/profile/property/sale/new">
                        <button className="btn btn-primary">
                            Create a Sale Listing
                        </button>
                    </Link>
                    <div className="search-result-grid">
                        <div className="row">
                            {
                                posts.map((listing) => {
                                    return (
                                        <ListingCard listing={listing}
                                                     type={PROPERTY_TYPE_SALE}
                                                     gallery="https://i.ytimg.com/vi/bIONUutiutk/maxresdefault.jpg"
                                                     mutable={true}
                                                     updateThePost={updateThePost}
                                                     deleteThePost={deleteThePost}
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
    posts: state.userReducer.sellerPost
})

const dtpm = (dispatch) => ({
    getSellerPost: (post) => userActions.getSellerPost(dispatch, post),
    updateSellerPost: (post) => userActions.updateSellerPost(dispatch, post)
})

export default connect
(stpm, dtpm)
(SellerProfile)