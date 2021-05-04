import * as Types from '../constants/ActionTypeTour';

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

const tours = (state = initialState, action) => {
  let index = -1;
  const tourID = action.id;
  const { tour } = action;
  switch (action.type) {
    case Types.FETCH_TOURS:
      state = action.tours;
      return [...state];
    case Types.ADD_TOURS:
      state.push(action.tour);
      return [...state];
    case Types.DELETE_TOURS:
      index = findIndex(state, tourID);
      state.splice(index, 1);
      return [...state];
    case Types.UPDATE_TOURS:
      index = findIndex(state, action.tour._id);
      state[index] = tour;
      return [...state];
    default: return [...state];
  }
};

export default tours;
