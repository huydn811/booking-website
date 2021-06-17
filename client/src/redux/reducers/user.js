import {
	getAllUserType,
	addUserType,
	updateUserType,
	delUserType,
	getUserByIdType
} from '../actionTypes';

import { Toastify } from '../../utils/toast'

const initialState = {
	listUsers: [],
	singleUsers: {},
	isRefresh: null
}

const chatRoom = (state = initialState, action) => {
	switch (action.type) {
		case getAllUserType.success:
			return {
				...state,
				listUsers: [...action.payload]
			}
		case addUserType.success:
			Toastify({ msg: 'Add user successfully', type: 'success' });

			return {
				...state,
				listUsers: [...state.listUsers, ...action.payload]
			}

		case updateUserType.success:
			Toastify({ msg: 'Update user successfully', type: 'success' });

			return {
				...state,
				isRefresh: Date.now()
			}
		case delUserType.success:
			Toastify({ msg: 'Delete user successfully', type: 'success' });
			return {
				...state,
				isRefresh: Date.now()
			}

		case getUserByIdType.success:
			return {
				...state,
				singleUsers: action.payload
			}
		default:
			return state
	}
};

export default chatRoom;
