import * as TypesUser from '../constants/ActionTypeUser';

const initialState = {
  currentUser: {}
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case TypesUser.FETCH_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    default:
      return state;
  }
};

export default currentUser;
