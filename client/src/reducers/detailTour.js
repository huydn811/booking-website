import * as Types from '../constants/ActionTypeTour';

const initialState = {
  tour: {}
}

const tours = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_TOUR_BY_ID:
      console.log(action)
      return {
        ...state,
        tour: { ...state.tour, ...action.tour }
      };

    default: return state;
  }
};

export default tours;
