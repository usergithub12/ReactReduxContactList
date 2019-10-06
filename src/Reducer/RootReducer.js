import { combineReducers } from "redux";
import ContactListItemReducer from "../Reducer/ContactListItemReducer";
import AppReducer from "../Reducer/AppReducer";
import SearchReducer from "../Reducer/SearchReducer";
import AddContactReducer from "../Reducer/AddContactReducer";

export default combineReducers({
  ContactListItemReducer,
  AppReducer,
  SearchReducer,
  AddContactReducer
});
