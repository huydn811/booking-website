import * as TypesLogin from "../constants/ActionTypeLogin";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
var initialState = {
        isLogin : false,
        dataUserLogin: null,
};
const persistConfig = {
    key: 'login', //key localstorega
    storage: storage,
    blacklist: [] //k bi thay doi hoac k dua va localstorage
};
const Login = (state = initialState, action) => {   
    switch(action.type){
        case TypesLogin.USER_LOGIN:
            if(action.dataUserLogin.code == 200){
                state.isLogin = true;
                state.dataUserLogin = action.dataUserLogin;
                // localStorage.setItem("login", JSON.stringify(state));
            }
            return {...state};
        case TypesLogin.USER_REGISTER:
            return {...state};
        default : return {...state};
    }
}

export default persistReducer(persistConfig,Login);