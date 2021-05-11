import * as Types from '../constants/ActionTypeTour';

const initialState = {
  singleTour: {}
}

const tours = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_TOUR_BY_ID:
      console.log(action)
      return {
        ...state,
        singleTour: { ...state.singleTour, ...action.tour }
      };

    default: return state;
  }
};

export default tours;
