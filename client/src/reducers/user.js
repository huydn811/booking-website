import * as TypesUser from '../constants/ActionTypeUser';

const initialState = [];
const findIndex = (tours, id) => {
  let result = -1;
  tours.forEach((tour, index) => {
    if (tour._id === id) {
      result = index;
    }
  });
  return result;
};

const users = (state = initialState, action) => {
  let index = -1;
  const { userID } = action;
  switch (action.type) {
    case TypesUser.FETCH_ALL_USER:
      state = action.users;
      return [...state];
    case TypesUser.ADD_USER:
      state.push(action.user);
      return [...state];
    case TypesUser.DELETE_USER:
      index = findIndex(state, userID);
      state.splice(index, 1);
      return [...state];
    default:
      return [...state];
  }
};

export default users;
