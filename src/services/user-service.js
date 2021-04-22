const SERVER_URL = process.env.REACT_APP_SERVER_URL
// const SERVER_URL = 'http://localhost:3001'

const findUserById = (uid) =>
    fetch(`${SERVER_URL}/profile/${uid}`)
        .then(res => res.json())
        .catch(err => console.log(err))

const findAllUsers = (uid) =>
    fetch(`${SERVER_URL}/admin/profiles/${uid}`)
        .then(res => res.json())
        .catch(err => console.log(err))

const registerUser = (user) =>
    fetch(`${SERVER_URL}/register`, {
        method: 'POST',
        // credentials: 'include',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))

const deleteUser = (uid) =>
    fetch(`${SERVER_URL}/profile/${uid}`, {
        method: 'DELETE',
        body: JSON.stringify({}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))

const updateUser = (uid, user) =>
    fetch(`${SERVER_URL}/profile/${uid}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))

const logInUser = (credential) =>
    fetch(`${SERVER_URL}/profile/login`, {
        method: 'POST',
        // credentials: 'include',
        body: JSON.stringify(credential),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))

const logOutUser = () =>
    fetch(`${SERVER_URL}/profile/logout`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))

const getBuyerWishlist = (wishlist) =>
    fetch(`${SERVER_URL}/profile/wishlist/sale`, {
        method: 'POST',
        body: JSON.stringify(wishlist),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))

const getTenantWishlist = (wishlist) =>
    fetch(`${SERVER_URL}/profile/wishlist/rent`, {
        method: 'POST',
        body: JSON.stringify(wishlist),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))

const getSellerPost = (post) =>
    fetch(`${SERVER_URL}/profile/post/sale`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))

const getLenderPost = (post) =>
    fetch(`${SERVER_URL}/profile/post/rent`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
        .catch(err => console.log(err))

const userService = {
    findUserById, findAllUsers,
    registerUser, deleteUser,updateUser,
    logInUser, logOutUser,
    getTenantWishlist, getBuyerWishlist,
    getLenderPost, getSellerPost
}

export default userService