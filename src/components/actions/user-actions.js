import userService from '../../services/user-service'

export const FIND_USER_BY_ID = 'FIND_USER_BY_ID'
export const FIND_ALL_USERS = 'FIND_ALL_USERS'
export const REGISTER_USER = 'REGISTER_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const LOG_OUT_USER = 'LOG_OUT_USER'
export const LOG_IN_USER = 'LOG_IN_USER'

export const findUserById = (dispatch, uid) => {
    userService.findUserById(uid)
        .then((user) => dispatch({
            type: FIND_USER_BY_ID,
            user
        }))
}

export const findAllUsers = (dispatch, uid) => {
    userService.findAllUsers(uid)
        .then((users) => dispatch({
            type: FIND_ALL_USERS,
            allUsers: users
        }))
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
        })
}

export const updateUser = (dispatch, uid, user) => {
    userService.updateUser(uid, user)
        .then((user) => dispatch({
            type: UPDATE_USER,
            user
        }))
}

export const logInUser = (dispatch, credential) => {
    userService.logInUser(credential)
        .then((user) => {
            console.log(user)
            if (user !== undefined) {
                dispatch({
                    type: LOG_IN_USER,
                    user
                })
                saveLogInSession(user)
            } else {
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
    logInUser, logOutUser
}

export default userActions