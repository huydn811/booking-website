import * as TypesLogin from "../constants/ActionTypeLogin";
import callApi from "../utils/ApiCaller";


export const actLoginReq = (dataUserLogin) => {
    return dispatch => {
        return callApi("login", "POST",dataUserLogin )
        .then((res) => {
            // const tokenLogin = res.data.accessToken;
            // if(res.data.code == 200){
                // localStorage.setItem("accessToken", tokenLogin);
                // localStorage.setItem("login", res.data);
            // }
            dispatch(actLogin(res.data));
        })
    }
}
export const actLogin = (dataUserLogin) => {
    return {
        type : TypesLogin.USER_LOGIN,
        dataUserLogin,
    }
}

export const actRegisterReq = (dataUserRegister) => {
    return dispatch => {
        return callApi("register", "POST", dataUserRegister)
        .then((res) => {
            dispatch(actRegister(res.data))
        })
    }
}
export const actRegister = (dataUserRegister) => {
    return {
        type : TypesLogin.USER_REGISTER,
        dataUserRegister
    }
}

// export const actLogoutReq = (dataUserLogout) => {
//     return dispatch => {
//         return callApi("logout","POST",dataUserLogout)
//         .then((res) => {
//             dispatch(actLogout(res.data))
//         })
//     }
// }
// export const actLogout = (dataUserLogout) => {
//     return {
//         type : TypesLogin.USER_LOGOUT,
//         dataUserLogout
//     }
// }