import {
	put,
	takeLeading
} from 'redux-saga/effects';
import { tourApi } from '../../api/tour';
import { apiErrorHandler } from '../../utils';
import {
	getAllTourType,
	getTourByIdType,
	bookingType,
	searchType,
	delTourType,
	updateTourType,
	addTourType
} from '../actionTypes';

function* getAllAction(action) {
	try {
		const { data } = yield tourApi.getAll(action.payload);

		if (data) {
			yield put({ type: getAllTourType.success, payload: data });
		}
	} catch (error) {
		// apiErrorHandler(error);
		yield put({ type: getAllTourType.failed });
	}
}

function* getTourByIdAction(action) {
	try {
		const { data } = yield tourApi.getDetail(action.payload);

		if (data) {
			yield put({ type: getTourByIdType.success, payload: data.data });
		}
	} catch (error) {
		// apiErrorHandler(error);
		yield put({ type: getTourByIdType.failed });
	}
}

function* updateTourAction(action) {
	try {
		const { data } = yield tourApi.updateTour(action.payload);

		if (data) {
			yield put({ type: updateTourType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: updateTourType.failed });
	}
}

function* delTourAction(action) {
	try {
		const { data } = yield tourApi.delTour(action.payload);

		if (data) {
			yield put({ type: delTourType.success, payload: data });
		}
	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: delTourType.failed });
	}
}

function* bookingAction(action) {
	try {
		const { data: { tourInCart } } = yield tourApi.booking(action.payload);

		if (tourInCart) {
			yield put({ type: bookingType.success });
		}

	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: bookingType.failed });
	}
}

function* searchAction(action) {
	try {
		const { data } = yield tourApi.search(action.payload);

		if (data) {
			yield put({ type: searchType.success, payload: data });
		}

	} catch (error) {
		apiErrorHandler(error);
		yield put({ type: searchType.failed });
	}
}

function* addTourAction(action) {
	try {
		const { data: { data } } = yield tourApi.add(action.payload);

		if (data) {
			yield put({ type: addTourType.success, payload: data });
		}

	} catch (error) {
		// apiErrorHandler(error);
		yield put({ type: addTourType.failed });
	}
}


export default function* sagas() {
	yield takeLeading(getAllTourType.request, getAllAction);
	yield takeLeading(getTourByIdType.request, getTourByIdAction);
	yield takeLeading(bookingType.request, bookingAction);
	yield takeLeading(searchType.request, searchAction);
	yield takeLeading(delTourType.request, delTourAction);
	yield takeLeading(updateTourType.request, updateTourAction);
	yield takeLeading(addTourType.request, addTourAction);

}
