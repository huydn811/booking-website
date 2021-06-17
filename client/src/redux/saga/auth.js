import {
	put,
	takeLeading
} from 'redux-saga/effects';
import { authApi } from '../../api/auth';
import { getMeApi } from '../../api/getMe';
import { apiErrorHandler } from '../../utils';
import {
	loginType,
	registerType
} from '../actionTypes';



function* loginAction(action) {
	try {
		const { data: { code, accessToken, user } } = yield authApi.login(action.payload);

		if (code === 200) {
			localStorage.setItem('token', accessToken)
			yield put({ type: loginType.success, payload: accessToken, user });
			const flag = localStorage.getItem('token');
			if (flag) {
				// action.history.push('/')
				window.location.href = 'http://localhost:3000/'
			}
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: loginType.failed });
	}
}

function* registerAction(action) {
	try {
		const { data } = yield authApi.register(action.payload);
		if (data.data) {
			yield put({ type: registerType.success, payload: data.data });
			action.history.push('/login')

		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: registerType.failed });
	}
}


export default function* sagas() {
	yield takeLeading(loginType.request, loginAction);
	yield takeLeading(registerType.request, registerAction);

}
