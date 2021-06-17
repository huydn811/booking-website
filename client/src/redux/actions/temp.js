import { addTempType, onSocketType } from '../actionTypes'


export const addMessTempSuccess = (payload) => {
	return {
		type: addTempType.success,
		payload
	}
}
export const onSocket = (payload) => {
	return {
		type: onSocketType.success,
		payload
	}
}