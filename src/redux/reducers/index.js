import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";
import AuthReducer from "./AuthReducer";
import MessageReducer from "./MessageReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
    employee: EmployeeReducer,
    auth: AuthReducer,
    message: MessageReducer,
    user: UserReducer
});