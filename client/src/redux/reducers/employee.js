import {
	getAllEmployeeType,
	addEmployeeType,
	updateEmployeeType,
	delEmployeeType,
	getEmployeeByIdType
} from '../actionTypes';

import { Toastify } from '../../utils/toast'

const initialState = {
	listEmployee: [],
	singleEmployee: {},
	isRefresh: null
}

const chatRoom = (state = initialState, action) => {
	switch (action.type) {
		case getAllEmployeeType.success:
			return {
				...state,
				listEmployee: [...action.payload]
			}
		case addEmployeeType.success:
			Toastify({ msg: 'Add Employee successfully', type: 'success' });

			return {
				...state,
				listEmployee: [...state.listEmployee, ...action.payload]
			}

		case updateEmployeeType.success:
			Toastify({ msg: 'Update Employee successfully', type: 'success' });

			return {
				...state,
				isRefresh: Date.now()
			}
		case delEmployeeType.success:
			Toastify({ msg: 'Delete Employee successfully', type: 'success' });
			return {
				...state,
				isRefresh: Date.now()
			}

		case getEmployeeByIdType.success:
			return {
				...state,
				singleEmployee: action.payload
			}
		default:
			return state
	}
};

export default chatRoom;
