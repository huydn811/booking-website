import { combineReducers } from 'redux';
import tour from './tour';
import itemEditing from './itemEditing';
import employee from './employee';
import user from './user';
import login from './login';
import cart from './cart';
import chatRoom from './chat';
import customer from './customer';
import detailTourReducer from './detailTour';
import currentUser from './currentUser';

const appReducers = combineReducers({
  tour,
  employee,
  itemEditing,
  user,
  login,
  cart,
  chatRoom,
  customer,
  tourState: detailTourReducer,
  currentUserState: currentUser
});

export default appReducers;
