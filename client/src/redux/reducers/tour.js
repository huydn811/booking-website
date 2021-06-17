import { getAllTourType, getTourByIdType, bookingType, searchType, delTourType, updateTourType, addTourType } from '../actionTypes'
import { Toastify } from '../../utils/toast'

const initialState = {
	tours: [],
	singleTours: {},
	isRefresh: null
}

const chatRoom = (state = initialState, action) => {
	switch (action.type) {
		case getAllTourType.success:

			return {
				...state,
				tours: action.payload
			}
		case getTourByIdType.success:

			return {
				...state,
				singleTours: action.payload
			}
		case bookingType.success:

			Toastify({ msg: 'booking successfully', type: 'success' })
			return {
				...state,
			}
		case delTourType.success:

			Toastify({ msg: 'Delete tour successfully', type: 'success' })
			return {
				...state,
				isRefresh: Date.now()
			}
		case updateTourType.success:

			Toastify({ msg: 'update tour successfully', type: 'success' })
			return {
				...state,
				isRefresh: Date.now()
			}

		case addTourType.success:

			Toastify({ msg: 'Add a tour successfully', type: 'success' })
			return {
				...state,
				isRefresh: Date.now()
			}
		case searchType.success:

			return {
				...state,
				tours: action.payload
			}
		default:
			return state
	}
};

export default chatRoom;
