import {
	put,
	takeLeading
} from 'redux-saga/effects';
import { getMeApi } from '../../api/getMe';
import { apiErrorHandler } from '../../utils';
import {
	getMeType
} from '../actionTypes';

function* getMeAction(action) {
	try {
		const { data: { data } } = yield getMeApi.getMe(action.payload);

		if (data) {
			yield put({ type: getMeType.success, payload: data });
		}
	} catch (error) {
		yield put({ type: getMeType.failed });
	}
}


export default function* sagas() {
	yield takeLeading(getMeType.request, getMeAction);

}
