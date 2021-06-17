const createActionTypes = (context) => ({
	success: `${context}_SUCCESS`,
	failed: `${context}_FAILURE`,
	pending: `${context}_PENDING`,
	request: `${context}_REQUEST`,
});


export const logoutType = createActionTypes('LOGOUT');
export const loginType = createActionTypes('LOGIN');
export const registerType = createActionTypes('REGISTER');

export const getMeType = createActionTypes('GET_ME');
export const getAllTourType = createActionTypes('GET_ALL_TOUR');
export const getTourByIdType = createActionTypes('GET_TOUR_BY_ID');
export const bookingType = createActionTypes('BOOKING');
export const searchType = createActionTypes('SEARCH');
export const delTourType = createActionTypes('DEL_TOUR');
export const updateTourType = createActionTypes('UPDATE_TOUR');
export const addTourType = createActionTypes('ADD_TOUR');

export const getAllUserType = createActionTypes('GET_ALL_USER');
export const addUserType = createActionTypes('ADD_USER');
export const getUserByIdType = createActionTypes('GET_USER_BY_ID');
export const updateUserType = createActionTypes('UPDATE_USER');
export const delUserType = createActionTypes('DEL_USER');


export const getAllEmployeeType = createActionTypes('GET_ALL_EMPLOYEE');
export const addEmployeeType = createActionTypes('ADD_EMPLOYEE');
export const getEmployeeByIdType = createActionTypes('GET_EMPLOYEE_BY_ID');
export const updateEmployeeType = createActionTypes('UPDATE_EMPLOYEE');
export const delEmployeeType = createActionTypes('DEL_EMPLOYEE');

export const getAllChatType = createActionTypes('GET_ALL_CHAT');
export const getChatRoomByIdType = createActionTypes('GET_CHAT_ROOM_BY_ID');
export const getAllMessageType = createActionTypes('GET_ALL_MESSAGE_TYPE');
export const addChatRoomType = createActionTypes('ADD_CHAT_ROOM');
export const addMessageType = createActionTypes('ADD_MESSAGE');
export const addTempType = createActionTypes('ADD_TEMP');
export const onSocketType = createActionTypes('ON_SOCKET');
export const getChatRoomById = createActionTypes('GET_CHAT_ROOM_BY_ID_CLIENT');


