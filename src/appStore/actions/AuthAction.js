import axios from "../axios";
import { REGISTER, LOGIN, LOGOUT, ERROR, SET_LOADING, CONFIRM_USER,
         RESET, LOAD_USER, LOAD_EMPLOYEE } from "../Types";

// Logs in a user
export const loginUser = (formData) => async dispatch => {

    const config = {
        headers: { 'Content-Type': 'application/json',
                    withCredentials: true
        }
    };
    try {
        setLoading();
        const response = await axios.post('api/Account/login',
                        formData, config);
        dispatch({ type: LOGIN, payload: response?.data.payload});
    } catch (err) {
        dispatch({ type: ERROR, payload: err})
    };
};

// Registers a new user
export const registerUser = (formData) => async dispatch => {

    const config = {
        headers: { 'Content-Type': 'application/json',
                    withCredentials: true
        }
    };
    try {
        setLoading();
        const response = await axios.post('api/User/register_user',
                        formData, config);
        dispatch({ type: REGISTER, payload: response?.data});
    } catch (err) {
        console.log(err)
        dispatch({ type: ERROR, payload: err})
    };
};

// Confirms user identity
export const confirmUser = (email) => async dispatch => {
    try{
        setLoading();
        const response = await axios.post(`api/Account/forgot-password?${email}`);
        dispatch({ type: CONFIRM_USER, payload: response.data })
    }  catch (error){
        dispatch({ type: ERROR, payload: error})};
};

// Resets user password
export const resetPassword = (formData) => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json',
                    withCredentials: true
        }
    };
    try {
        setLoading();
        const response = await axios.post('api/Account/reset-password',
                                            formData, config);
        dispatch({ type: RESET, payload: response?.data});
    } catch (err) {
        console.log(err)
        dispatch({ type: ERROR, payload: err})
    };
};

// Gets details of logged in user
    export const loadUser = () => async dispatch =>{
        let userId = localStorage.getItem('userId');
        try {
            const response = await axios.get(`api/User/${userId}`);
            dispatch({ type: LOAD_USER, payload: response.data.data});
        } catch (err) {
            dispatch({ type: ERROR, payload: err});
        }
    }
// Gets employee details of logged user
    export const loadEmployee = () => async dispatch =>{
        let employeeId = localStorage.getItem('employeeId');
         try {
            const response = await axios.get(`/api/Employees/${employeeId}`);
            dispatch({ type: LOAD_EMPLOYEE, payload: response.data.data});
        } catch (err) {
            dispatch({ type: ERROR, payload: err});
        };
    };

// Logs out a user
export const logoutUser = () => dispatch => {
    dispatch({type: LOGOUT});
};

// Sets loading to true
export const setLoading = () => dispatch => {
    dispatch({type: SET_LOADING});
};

// Resets success and errors
export const reset = () => dispatch => {
    dispatch({type: RESET})
};