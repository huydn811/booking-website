import * as TypeChat from '../constants/ActionChat';

const initialState = {
  chatRooms: [],
  messages: {}
}

const chatRoom = (state = initialState, action) => {
  switch (action.type) {
    case TypeChat.FETCH_ALL_CHATROOM:
      return {
        ...state, chatRooms: action.payload
      }
    case TypeChat.ADD_MESSAGES:
      return state

    case TypeChat.GET_ALL:
      return {
        ...state,
        messages: action.payload.message
      }
    default:
      return state
  }
};

export default chatRoom;
