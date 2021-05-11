
import { history } from '../store'

import Toastify from '../utils/toastify'

import * as Types from '../constants/ActionTypeTour';

<<<<<<< HEAD
const initialState = [
];
=======
const initialState = {
  listTour: [],
  isRefresh: false
}
>>>>>>> 77b0b91b39f4b5660fb53567408ba5182df04380

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
  const { tour, isSuccess } = action;

  switch (action.type) {
    case Types.FETCH_TOURS:
      return { ...state, listTour: action.tours }
    case Types.ADD_TOURS:
      if (isSuccess) {
        Toastify({ msg: 'Create tour successfully', type: 'success' });
        state.push(action.tour);
      }
<<<<<<< HEAD
      return [...state];
=======
      return state
>>>>>>> 77b0b91b39f4b5660fb53567408ba5182df04380
    case Types.DELETE_TOURS:
      index = findIndex(state.listTour, tourID);
      state.splice(index, 1);
      return state
    case Types.UPDATE_TOURS:

      index = findIndex(state.listTour, action.tour._id);
      state[index] = tour;
<<<<<<< HEAD
      return [...state];

    default: return [...state];
=======
      Toastify({ msg: 'Update tour successfully', type: 'success' });
      return { ...state, isRefresh: true }

    default: return state
>>>>>>> 77b0b91b39f4b5660fb53567408ba5182df04380
  }
};

export default tours;
