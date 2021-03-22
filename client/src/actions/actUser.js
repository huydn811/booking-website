import * as TypesUser from "../constants/ActionTypeUser";
import callApi from "../utils/ApiCaller";

export const actFetchAllTUserReq = () => {
    return dispatch => {
        return callApi("user/get-all-user", "GET", null)
        .then((res) => {
            dispatch(actFetchAllUser(res.data))
        })
    }
}
export const actFetchAllUser = (users) => {
    return{
        type : TypesUser.FETCH_ALL_USER,
        users
    }
}

export const actAddUserReq = (user) => {
    return dispatch => {
        return callApi("user/add-user", "POST", user)
        .then((res) => {
            dispatch(actAddUser(res.data))
        })
    }
}
export const actAddUser = (user) => {
    return {
        type : TypesUser.ADD_USER,
        user
    }
}

export const actDeleteUserReq = (userID) => {
    return dispatch => {
        if(confirm("do you want delete user")){//eslint-disable-line
            return  callApi(`user/delete-user/${userID}`, "DELETE", null)
            .then((res) => {
                dispatch(actDeleteUser(userID))
            })
        }
    }
}
export const actDeleteUser = (userID) => {
    return {
        type : TypesUser.DELETE_USER,
        userID
    }
}

export const actGetTourByIDReq = (userID) => {
    return dispatch => {
        return callApi(`user/get-userID/${userID}`, "GET", null)
        .then((res)=>{
            dispatch(actGetUserByID(res.data));
        })
    }
}
export const actGetUserByID = (user) => {
    return {
        type : TypesUser.GET_USER_BY_ID,
        user
    }
}

export const actUpdateUserReq = (user) => {
    return dispatch => {
        return callApi(`user/update-user/${user._id}`, "PUT", user)
        .then((res) => {
            dispatch(actUpdateUser(res.data));
        })
    }
}
export const actUpdateUser = (user) => {
    return {
        type : TypesUser.UPDATE_USER,
        user
    }
}