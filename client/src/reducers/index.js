import { combineReducers } from "redux";
import tour from "./Tour";
import itemEditing from './itemEditing';
import employee from "./employee";
import user from "./user";
import login from "./login";
import cart from "./cart";
import search from "./search";
import chatRoom from './chat';
import customer from './customer';
const appReducers = combineReducers ({
  tour,
  employee,
  itemEditing,
  user,
  login,
  cart,
  search,
  chatRoom,
  customer
});

export default appReducers;