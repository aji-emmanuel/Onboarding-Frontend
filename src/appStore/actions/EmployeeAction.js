
import axios from "../axios";

import { GET_EMPLOYEES, GET_EMPLOYEE, ADD_EMPLOYEE, UPDATE_EMPLOYEE,
            DELETE_EMPLOYEE, SET_LOADING, SEARCH_EMPLOYEES, ERROR, RESET } from "../Types";

// Gets all employees
    export const getEmployees = () => async dispatch => {
        try{
            setLoading();
            const response = await axios.get("api/Employees");
            dispatch({ type: GET_EMPLOYEES, payload: response?.data?.data });

        } catch (err){
            console.log(err);
        };
    };

// Gets an employee
    export const getEmployee = (employee) => dispatch => {
        dispatch({type:GET_EMPLOYEE, payload: employee});
    };

// Adds an employee
    export const addEmployee = (formData) => async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
             setLoading();
             const response = await axios.post('api/Employees', formData, config);
             dispatch({type: ADD_EMPLOYEE, payload: response?.data?.data});
            
        } catch (error) {
             dispatch({ type: ERROR, payload: error});
        };
    };

// Updates an employee
    export const updateEmployee = (employee) => async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };
        try {
             setLoading();
            const response = await axios.put(`api/Employee/${employee.id}`,
                            employee, config);

             dispatch({type: UPDATE_EMPLOYEE, payload: response?.data?.data});
        } catch (err) {
             dispatch({ type: ERROR, payload: err});
        };
    };

// Deletes an employee
    export const deleteEmployee = (id) => async dispatch =>{
        try {
            setLoading();
            await axios.delete(`api/Employees/${id}`);
            dispatch({type: DELETE_EMPLOYEE, payload: id});
        } catch (error) {
            dispatch({ type: ERROR, payload: error?.response?.data});
        };
    };

// Search employees
    export const searchEmployee = (query) => async dispatch => {
        dispatch({ type: SEARCH_EMPLOYEES, payload: query });
    };

// Sets loading to true
    export const setLoading = () => dispatch =>{
        dispatch({type: SET_LOADING});
    };

// Resets success and errors
    export const reset = () => dispatch => {
        dispatch({type: RESET});
    };