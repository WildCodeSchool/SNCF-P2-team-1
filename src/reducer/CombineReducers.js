import { combineReducers } from "redux";
import reducerRequest from "./ReducerRequest";
import reducerGlobal from "./ReducerGlobal";

export default combineReducers({
  reducerRequest,
  reducerGlobal
});
