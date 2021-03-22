import { combineReducers } from "redux";
import tour from "./Tour";
import itemEditing from './itemEditing';
import employee from "./employee";
import user from "./user";
import login from "./login";
import cart from "./cart";
import search from "./search";
import chatRoom from './chat';
const appReducers = combineReducers ({
  tour,
  employee,
  itemEditing,
  user,
  login,
  cart,
  search,
  chatRoom
});

export default appReducers;