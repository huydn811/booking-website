import* as TypesChat from '../constants/ActionChat';
import callApi from '../utils/ApiCaller';


export const actFetchAllChatRoomReq = () => {
    return dispatch => {
        return callApi("chat/get-all-chatroom", "GET", null)
        .then(res => {
            dispatch(actFetchAllChatRoom(res.data))
        })
    }
}

export const actFetchAllChatRoom = (chatRooms) => {
    return {
        type : TypesChat.FETCH_ALL_CHATROOM,
        chatRooms,
    }
}

export const actFetchChatRoomByIDReq = (chatRoomID) => {
    return  dispatch => {
        return callApi(`chat/get-chatroom/${chatRoomID}`, "GET", null)
        .then(res => {
            dispatch(actFetchChatRoomByID(res.data))
        })
    }
}

export const actFetchChatRoomByID = (chatroomById) => {
    return {
        type : TypesChat.FETCH_CHATROOM_BY_ID,
        chatroomById
    }
} 