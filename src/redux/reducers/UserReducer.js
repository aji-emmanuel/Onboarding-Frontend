import { GET_USERS, GET_USER, UPDATE, AVATAR, DELETE, RESET, SET_LOADING, ERROR } from "../Types";

const initialState = {
    users: [],
    user: {},
    avatar: "",
    success: false,
    loading: false,
    error: null
};

const UserReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                success: true,
                loading: false
            };
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                success: true,
                loading: false
            };
        case UPDATE:
            return{
                ...state,
                users: state.users.map(
                    (user) => user.userId === action.payload.userId ? action.payload : user),
                success: true,
                loading: false
            };
        case AVATAR:
            return{
                ...state,
                users: state.users.map(
                    (user) => user.userId===action.payload.userId ? user.avatar = action.payload.Image : user),
                success: true,
                loading: false
            };
        case DELETE:
            return{
                ...state,
                users: state.users.filter(user => user.userId !== action.payload),
                success: true,
                loading: false
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
                success: false,
                loading: false,
                error: null
            };

        default: return state;
    };
};

export default UserReducer;