import * as TypesChat from '../constants/ActionChat';
import callApi from '../utils/ApiCaller';

export const actFetchAllChatRoom = (payload) => ({
  type: TypesChat.FETCH_ALL_CHATROOM,
  payload,
});

export const actFetchAllChatRoomReq = () => (dispatch) => callApi('chat/get-all-chatroom', 'GET', null)
  .then((res) => {
    dispatch(actFetchAllChatRoom(res.data));
  })
  .catch(() => {
    // console.log(err, '[err]');
  });

export const actFetchChatRoomByID = (chatroomById) => ({
  type: TypesChat.FETCH_CHATROOM_BY_ID,
  chatroomById,
});

export const actFetchChatRoomByIDReq = (chatRoomID) => (dispatch) => callApi(`chat/get-chatroom/${chatRoomID}`, 'GET', null)
  .then((res) => {
    dispatch(actFetchChatRoomByID(res.data));
  });
// .catch((err) => console.log('err'));

export const actAddMessage = (message) => ({
  type: TypesChat.ADD_MESSAGES,
  message,
});

export const actAddMessageReq = (message) => (dispatch) => callApi('chat/create-message', 'POST', message)
  .then((res) => {
    dispatch(actAddMessage(res.data));
  })
  .catch(() => {
    // console.log(err, '[err]');
  });

export const actCreateChatRoom = (payload) => ({
  type: TypesChat.CREATE_CHAT_ROOM,
  payload,
});

export const actCreateChatRoomReq = (payload) => (dispatch) => callApi('chat/create-chatroom', 'POST', payload)
  .then((res) => {
    console.log(res.data)
    dispatch(actCreateChatRoom(res.data));
  })
  .catch(() => {
    // console.log(err, '[err]');
  });
