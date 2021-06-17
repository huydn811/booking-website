import {
	put,
	takeLeading
} from 'redux-saga/effects';
import { chatApi } from '../../api/chat';

import { apiErrorHandler } from '../../utils';
import {
	getAllChatType,
	getChatRoomByIdType,
	getAllMessageType,
	addMessageType,
	addChatRoomType,
	getChatRoomById
} from '../actionTypes';

function* getAllAction() {
	try {
		const { data } = yield chatApi.getAllChatRoom();
		if (data) {
			yield put({ type: getAllChatType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: getAllChatType.failed });
	}
}

function* getByIdAction(action) {
	try {
		const { data } = yield chatApi.getById(action.payload);
		if (data) {
			yield put({ type: getChatRoomByIdType.success, payload: data });
		}
	} catch (error) {
		// apiErrorHandler(error);
		yield put({ type: getChatRoomByIdType.failed });
	}
}

function* getAllMessAction(action) {
	try {
		const { data } = yield chatApi.getAllMess(action.payload);
		if (data) {
			yield put({ type: getAllMessageType.success, payload: data.message });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: getAllMessageType.failed });
	}
}

function* addMessAction(action) {
	try {
		const { data } = yield chatApi.addMessage(action.payload);
		if (data) {
			yield put({ type: addMessageType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: addMessageType.failed });
	}
}

function* addChatRoomAction(action) {
	try {
		const { data } = yield chatApi.addChatRoom(action.payload);
		if (data) {
			yield put({ type: addChatRoomType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: addChatRoomType.failed });
	}
}
function* getChatRoomByIdAction(action) {
	try {
		const { data } = yield chatApi.getChatRoomById(action.payload);
		// eslint-disable-next-line no-console
		if (data) {
			yield put({ type: getChatRoomById.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: getChatRoomById.failed });
	}
}

export default function* sagas() {
	yield takeLeading(getAllChatType.request, getAllAction);
	yield takeLeading(getChatRoomByIdType.request, getByIdAction);
	yield takeLeading(getAllMessageType.request, getAllMessAction);
	yield takeLeading(addMessageType.request, addMessAction);
	yield takeLeading(addChatRoomType.request, addChatRoomAction);
	yield takeLeading(getChatRoomById.request, getChatRoomByIdAction);
}
