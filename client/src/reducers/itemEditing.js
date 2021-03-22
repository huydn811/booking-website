import * as Types from "../constants/ActionTypeTour";
import * as TypesEmployee from "../constants/ActionTypeEmployee";
import * as TypesUser from "../constants/ActionTypeUser";
import * as TypeChat from "../constants/ActionChat";
var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_TOUR_BY_ID:
            return action.tour;
        case TypesEmployee.GET_EMPLOYEE_BY_ID:
            return action.employee;
        case TypesUser.GET_USER_BY_ID:
            return action.user;
        case TypeChat.FETCH_CHATROOM_BY_ID:
            return action.chatroomById;
        default :
            return state;
    }
}

export default itemEditing;