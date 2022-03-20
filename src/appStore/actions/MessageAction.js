import axios from "../axios";
import { SUCCESS, SET_LOADING, ERROR, RESET } from "../Types";

// Sends a message to a slack channel
    export const sendSlack = (formData) => async dispatch =>{

        try{
            setLoading();
            await axios.post(`api/Slack/new-message?${formData.channel}&${formData.text}`);
            dispatch({ type: SUCCESS });
        } catch (err){
            dispatch({type: ERROR, payload: err});
        }
    };

// Sends a mail
    export const sendMail = (formData) => async dispatch => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            setLoading();
            await axios.post('api/Email/send-email', formData, config);
            dispatch({ type: SUCCESS });
            
        } catch (error) {
             dispatch({ type: ERROR, payload: error});
        };
    };

// Sends mail to all employees
    export const mailEmployees = (formData) => async dispatch => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            setLoading();
            await axios.post('api/Email/send-bulk-email-to-employees', formData, config);
            dispatch({ type: SUCCESS });
            
        } catch (error) {
             dispatch({ type: ERROR, payload: error});
        };
    };

// Sends mail to all applicants
    export const mailUsers = (formData) => async dispatch => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            setLoading();
            await axios.post('api/Email/send-bulk-email-to-users', formData, config);
            dispatch({ type: SUCCESS });
            
        } catch (error) {
             dispatch({ type: ERROR, payload: error});
        };
    };

// Sets loading to true
    export const setLoading = () => dispatch =>{
        dispatch({type: SET_LOADING});
    };

// Resets success and errors
    export const reset = () => dispatch => {
        dispatch({type: RESET});
    };