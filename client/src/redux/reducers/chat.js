import {
	getAllMessageType,
	addChatRoomType,
	getAllChatType,
	addTempType,
	onSocketType,
	getChatRoomByIdType,
	getChatRoomById
} from '../actionTypes';

import { Toastify } from '../../utils/toast'

const initialState = {
	listMessages: {},
	isRefresh: null,
	listConversation: [],
	listMessTemp: [],
	messages: [],
	clientMessages: []
}

const chatRoom = (state = initialState, action) => {
	switch (action.type) {
		case getAllMessageType.success:
			return {
				...state,
				listMessages: { ...action.payload }
			}
		case getAllChatType.success:
			return {
				...state,
				listConversation: action.payload
			}
		case getChatRoomByIdType.success:
			return {
				...state,
				messages: action.payload
			}

		case addChatRoomType.success:
			Toastify({ msg: 'addChatRoomType user successfully', type: 'success' });
			return {
				...state,
				isRefresh: Date.now()
			}
		case addTempType.success:
			return {
				...state,
				listMessTemp: [...state.listMessTemp, action.payload]
			}
		case getChatRoomById.success:

			return {
				...state,
				clientMessages: action.payload
			}
		case onSocketType.success:
			return {
				...state,
				listMessTemp: [...state.listMessTemp, action.payload]

			}

		default:
			return state
	}
};

export default chatRoom;
