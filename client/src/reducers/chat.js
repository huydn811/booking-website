import * as TypeChat from '../constants/ActionChat';

const initialState = [];
// var findIndex = (tours, id) => {
//     var result = -1;
//     tours.forEach((tour, index) => {
//         if(tour._id === id){
//             result = index;
//         }
//     });
//     return result;
// }

const chatRoom = (state = initialState, action) => {
  switch (action.type) {
    case TypeChat.FETCH_ALL_CHATROOM:
      state.push(action.chatRooms);
      return [...state];
    case TypeChat.ADD_MESSAGES:
      state.push(action.message);
      return [...state];
    default:
      return [...state];
  }
};

export default chatRoom;
