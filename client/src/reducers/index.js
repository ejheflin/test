import { combineReducers } from "redux";
import authReducer from "./authReducer";
import wodReducer from "./wodReducer";

export default combineReducers({
	auth: authReducer,
	wod: wodReducer //we are defining a "wod" state here
});
