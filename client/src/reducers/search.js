import * as TypesSearch from "../constants/ActionTypeTour";

var initialState = '';

const search = (state = initialState, action) => {
    switch(action.type){
        case TypesSearch.SEARCH_TOUR:
            return action.keyword;
        default : return state
    }
}

export default search;