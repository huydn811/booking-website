import * as Types from "../constants/ActionTypeTour";

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

const tours = (state = initialState , action) => {
    var index = -1;
    var tourID = action.id;
    var tour = action.tour;
    switch(action.type){
        case Types.FECTH_TOURS:
            state = action.tours;
            return [...state];
        case Types.ADD_TOURS:
            state.push(action.tour)
            return [...state];
        case Types.DELETE_TOURS:
            index = findIndex(state,tourID);
            state.splice(index,1)
            return [...state];
        case Types.UPDATE_TOURS:
            index = findIndex(state, action.tour._id)
            state[index] = tour;
            return [...state];
        default : return [...state]; 
    }
};

export default tours;