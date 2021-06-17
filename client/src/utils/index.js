
import { Toastify } from './toast'

export const apiErrorHandler = (error) => {
	Toastify({ msg: `${error.response.data.message}`, type: 'error' });
};


export const USER_IMG = 'http://localhost:9000/api/storages/users'
export const TOUR_IMG = 'http://localhost:9000/api/storages/tours'