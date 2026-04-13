import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    todos: todoReducer
});

export default rootReducer;