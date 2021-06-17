import { loginType, registerType } from '../actionTypes';
import { Toastify } from '../../utils/toast';

const initialState = {
    isRefresh: false,
    token: !!localStorage.getItem('token'),
    textToken: '',
    authProfile: {}
};

const chatRoom = (state = initialState, action) => {
    switch (action.type) {
        case loginType.success:
            Toastify({ msg: 'Login successfully', type: 'success' });

            return {
                ...state,
                token: action.payload,
                textToken: action.payload,
                authProfile: action.user
            };
        case loginType.failed:
            Toastify({ msg: 'Login failed', type: 'failed' });
            return {
                ...state,
            };

        case registerType.success:
            Toastify({ msg: 'Register successfully', type: 'success' });
            return {
                ...state,
            };
        case registerType.failed:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default chatRoom;
