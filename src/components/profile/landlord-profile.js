import React, {useEffect} from "react"
import {connect} from 'react-redux'
import userActions from '../actions/user-actions'
import {Link} from 'react-router-dom'
import ListingCard from '../search-result/listing-card'
import {PROPERTY_TYPE_RENT, PROPERTY_TYPE_SALE} from '../../reducers/search-bar-reducer'

const LandlordProfile = (
    {
        profile,
        posts = [],
        openProfile,
        getLenderPost,
        updateLenderPost,
        updateUser,
        user = {}
    }) => {

    useEffect(() => {
        if (openProfile && profile !== undefined) {
            getLenderPost(profile.postToLend)
        }
    }, [openProfile])

    const deleteThePost = (post) => {
        posts = posts.filter((p) => p._id !== post._id)
        updateLenderPost(posts)
        let lenderProfile = {...user.lenderProfile, postToLend: posts}
        updateUser(user._id, {...user, lenderProfile})
    }

    const updateThePost = (post) => {
        posts = posts.map(function (p) {
            return (p._id !== post._id) ? p : post
        })
        updateLenderPost(posts)
        let lenderProfile = {...user.lenderProfile, postToLend: posts}
        updateUser(user._id, {...user, lenderProfile})
    }

    return (
        <>
            {
                openProfile &&
                <div className="profile container">
                    <Link to="/profile/property/rent/new">
                        <button className="btn btn-primary">
                            Create a Rental Listing
                        </button>
                    </Link>
                    <div className="search-result-grid">
                        <div className="row">
                            {
                                posts.map((listing) => {
                                    return (
                                        <ListingCard listing={listing}
                                                     type={PROPERTY_TYPE_RENT}
                                                     gallery="https://photos.zillowstatic.com/fp/fd2fbce65c42716ce7a3b3b7dfe8643f-cc_ft_1536.jpg"
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
    posts: state.userReducer.lenderPost
})

const dtpm = (dispatch) => ({
    getLenderPost: (post) => userActions.getLenderPost(dispatch, post),
    updateLenderPost: (post) => userActions.updateLenderPost(dispatch, post)
})

export default connect
(stpm, dtpm)
(LandlordProfile)