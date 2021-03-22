import * as TypesUser from "../constants/ActionTypeUser";

var initialState = [];
var findIndex = (tours, id) => {
    var result = -1;
    tours.forEach((tour, index) => {
        if(tour._id === id){
            result = index;
        }
    });
    return result;
}

const users = (state = initialState , action) => {
    var index = -1;
    var userID = action.userID;
    switch(action.type){
        case TypesUser.FETCH_ALL_USER:
            state = action.users;
            return [...state]
        case TypesUser.ADD_USER:
            state.push(action.user);
            return [...state];
        case TypesUser.DELETE_USER:
            index = findIndex(state, userID);
            state.splice(index, 1)
            return [...state];
        default : 
            return [...state]
    }
}

export default users;