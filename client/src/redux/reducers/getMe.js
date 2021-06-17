import { getMeType } from '../actionTypes'
import { Toastify } from '../../utils/toast'
import { history } from '../store';

const initialState = {
	profile: {}
}

const chatRoom = (state = initialState, action) => {
	switch (action.type) {
		case getMeType.success:

			return {
				...state,
				profile: action.payload
			}
		default:
			return state
	}
};

export default chatRoom;
