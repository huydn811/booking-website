import* as TypesChat from '../constants/ActionChat';
import callApi from '../utils/ApiCaller';


export const actFetchAllChatRoomReq = () => {
    return dispatch => {
        return callApi("chat/get-all-chatroom", "GET", null)
        .then(res => {
            dispatch(actFetchAllChatRoom(res.data))
        })
        .catch(err =>{
            console.log(err, '[err]');
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
        .then( res => {
            dispatch(actFetchChatRoomByID(res.data))
        })
        .catch((err) => console.log("err"))
    }
}

export const actFetchChatRoomByID = (chatroomById) => {
    return {
        type : TypesChat.FETCH_CHATROOM_BY_ID,
        chatroomById
    }
} 

export const actAddMessageReq = (message) => {
    return dispatch => {
        return callApi("chat/create-message", "POST", message)
        .then((res)=>{
            dispatch(actAddMessage(res.data))
        })
        .catch((err) =>{
            console.log(err, '[err]');
        })
    }
}
export const actAddMessage = (message) => {
    return {
        type : TypesChat.ADD_MESSAGES,
        message
    }
}