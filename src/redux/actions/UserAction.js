import axios from "../axios";
import { GET_USERS, GET_USER, UPDATE, AVATAR, DELETE, RESET, SET_LOADING, ERROR } from "../Types";

// Gets all users
    export const getUsers = () => async dispatch =>{
        
        try {
            setLoading();
            const response = await axios.get("api/User");
            dispatch({ type: GET_USERS, payload: response?.data.data});
        } catch (error){
            dispatch({ type: ERROR });
        };
    };

// Gets a user using id
    export const getUser = (id) => async dispatch =>{

        try {
            setLoading();
            const response = await axios.get(`api/User/${id}`);
            dispatch({ type: GET_USER, payload: response?.data.data});
        } catch (error){
            dispatch({ type: ERROR });
        };
    };

// Updates a user
    export const updateUser = (user) => async dispatch =>{

        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };
        try {
             setLoading();
            let userId = localStorage.getItem('userId');
            const response = await axios.put(`api/User/${userId}`,
                            user, config);

             dispatch({type: UPDATE, payload: response?.data.data});
        } catch (error) {
             dispatch({ type: ERROR, payload: error});
        };
    };

// Updates a user's profile picture
    export const updateAvatar = (Image) => async dispatch =>{

        var userId = (JSON.parse(localStorage.getItem('loggedUser'))).userId;

         const config = {
            headers: {
                'content-type': 'multipart/form-data',
                withCredentials: true
            }
        };
        try {
            setLoading();
            await axios.put(`api/User/update-user-avatar?userId=${userId}`, Image, config);
            dispatch({type: AVATAR, payload: {userId, Image}});
        } catch (error) {
            dispatch({ type: ERROR, payload: error});
        };
    };

// Deletes a user
    export const deleteUser = (id) => async dispatch =>{

        try {
            setLoading();
            await axios.delete(`api/User/${id}`);
            dispatch({type: DELETE, payload: id});
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