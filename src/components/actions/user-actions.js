import userService from '../../services/user-service'

export const FIND_USER_BY_ID = 'FIND_USER_BY_ID'
export const FIND_ALL_USERS = 'FIND_ALL_USERS'
export const REGISTER_USER = 'REGISTER_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const LOG_OUT_USER = 'LOG_OUT_USER'
export const LOG_IN_USER = 'LOG_IN_USER'
export const GET_BUYER_WISHLIST = 'GET_BUYER_WISHLIST'
export const GET_TENANT_WISHLIST = 'GET_TENANT_WISHLIST'
export const GET_SELLER_POST = 'GET_SELLER_POST'
export const GET_LENDER_POST = 'GET_LENDER_POST'
export const UPDATE_BUYER_WISHLIST = 'UPDATE_BUYER_WISHLIST'
export const UPDATE_TENANT_WISHLIST = 'UPDATE_TENANT_WISHLIST'
export const UPDATE_SELLER_POST = 'UPDATE_SELLER_POST'
export const UPDATE_LENDER_POST = 'UPDATE_LENDER_POST'

export const findUserById = (dispatch, uid) => {
    userService.findUserById(uid)
        .then((user) => dispatch({
            type: FIND_USER_BY_ID,
            user
        })).catch(err => console.log(err))
}

export const findAllUsers = (dispatch, uid) => {
    userService.findAllUsers(uid)
        .then((users) => dispatch({
            type: FIND_ALL_USERS,
            allUsers: users
        })).catch(err => console.log(err))
}

export const registerUser = (dispatch, user) => {
    userService.registerUser(user)
        .then((user) => {
            if (user !== undefined) {
                dispatch({
                    type: REGISTER_USER,
                    user
                })
                saveLogInSession(user)
                console.log('registered & logged in')
            } else {
                console.log('Failed to register a new user')
            }
        }).catch(err => console.log(err))
}

export const deleteUser = (dispatch, uid) => {
    userService.deleteUser(uid)
        .then(() => {
            dispatch({
                type: LOG_OUT_USER
            })
            clearLogInSession()
        }).catch(err => console.log(err))
}

export const updateUser = (dispatch, uid, user) => {
    userService.updateUser(uid, user)
        .then((user) => dispatch({
            type: UPDATE_USER,
            user
        })).catch(err => console.log(err))
}

export const logInUser = (dispatch, credential) => {
    userService.logInUser(credential)
        .then((user) => {
            if (user !== undefined) {
                dispatch({
                    type: LOG_IN_USER,
                    user
                })
                saveLogInSession(user)
                console.log('logged in')
            } else {
                alert('Email or password doesn\'t match')
                console.log('Invalid user object received')
            }
        }).catch(err => console.log(err))
}

export const logOutUser = (dispatch) => {
    userService.logOutUser()
        .then((res) => {
            console.log(res)
            dispatch({
                type: LOG_OUT_USER
            })
            clearLogInSession()
        }).catch(err => console.log(err))
}

export const getBuyerWishlist = (dispatch, wishlist) => {
    userService.getBuyerWishlist(wishlist)
        .then(wishlist => {
            dispatch({
                type: GET_BUYER_WISHLIST,
                wishlist
            })
        }).catch(err => console.log(err))
}

export const updateBuyerWishlist = (dispatch, wishlist) => {
    dispatch({
        type: UPDATE_BUYER_WISHLIST,
        wishlist
    })
}

export const getTenantWishlist = (dispatch, wishlist) => {
    userService.getTenantWishlist(wishlist)
        .then(wishlist => dispatch({
            type: GET_TENANT_WISHLIST,
            wishlist
        })).catch(err => console.log(err))
}

export const updateTenantWishlist = (dispatch, wishlist) => {
    dispatch({
        type: UPDATE_TENANT_WISHLIST,
        wishlist
    })
}

export const getSellerPost = (dispatch, post) => {
    userService.getSellerPost(post)
        .then(post => {
            console.log(post)
            dispatch({
                type: GET_SELLER_POST,
                post
            })
        }).catch(err => console.log(err))
}

export const updateSellerPost = (dispatch, post) => {
    dispatch({
        type: UPDATE_SELLER_POST,
        post
    })
}

export const getLenderPost = (dispatch, post) => {
    userService.getLenderPost(post)
        .then(post => dispatch({
            type: GET_LENDER_POST,
            post
        })).catch(err => console.log(err))
}

export const updateLenderPost = (dispatch, post) => {
    dispatch({
        type: UPDATE_LENDER_POST,
        post
    })
}

const clearLogInSession = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("uid")
}

const saveLogInSession = (user) => {
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("uid", user._id)
}

const userActions = {
    findUserById, findAllUsers,
    registerUser, updateUser, deleteUser,
    logInUser, logOutUser,
    getBuyerWishlist, getTenantWishlist,
    getSellerPost, getLenderPost,
    updateLenderPost, updateSellerPost,
    updateTenantWishlist, updateBuyerWishlist
}

export default userActions