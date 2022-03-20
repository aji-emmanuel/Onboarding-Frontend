

import { REGISTER, LOGIN, LOGOUT, ERROR, SET_LOADING,
         RESET, CONFIRM_USER, LOAD_USER, LOAD_EMPLOYEE} from "../Types";

const initialState = {
    token: localStorage.getItem('token'),
    success: false,
    isLoggedIn: localStorage.getItem('isLoggedIn'),
    loggedUser: null,
    loggedEmployee: null,
    loading: false,
    error: null
};

const AuthReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                success: true,
                loading: false
            };
        case LOGIN:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('userId', action.payload.userId);
            localStorage.setItem('employeeId', action.payload.employeeId);
            localStorage.setItem('role', action.payload.role);
            localStorage.setItem('isLoggedIn', true);
            return {
                ...state,
                success: true,
                isLoggedIn: true,
                loading: false
            };
        case LOAD_USER:
            localStorage.setItem('loggedUser', JSON.stringify(action.payload))
            return {
                ...state,
                loggedUser: action.payload
            };
        case LOAD_EMPLOYEE:
            localStorage.setItem('loggedEmployee', JSON.stringify(action.payload))
            return {
                ...state,
                loggedEmployee: action.payload
            };
        case CONFIRM_USER:
            return {
                ...state,
                success: true,
                loading: false
            };
        case LOGOUT:
             localStorage.removeItem('token');
             localStorage.removeItem('userId');
             localStorage.removeItem('employeeId');
             localStorage.removeItem('role');
             localStorage.removeItem('isLoggedIn')
             localStorage.removeItem('loggedUser')
             localStorage.removeItem('loggedEmployee')
             localStorage.removeItem('employee')
            return {
                ...state,
                isLoggedIn: false,
                loggedUser: null
            };
         case SET_LOADING:
            return{
                ...state,
                loading: true,
                success: false
            };
        case ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            };
        case RESET:
            return {
                ...state,
                loading: false,
                success:false,
                error: null
            };
        default: return state;
    };
};

export default AuthReducer;