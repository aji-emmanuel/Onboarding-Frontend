import { SUCCESS, SET_LOADING, ERROR, RESET } from "../Types";

const initialState = {
    success: false,
    loading: false,
    messageError: null
};

const MessageReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case SUCCESS:
            return{
                ...state,
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
                messageError: action.payload,
                loading: false
            };
        case RESET:
            return {
                ...state,
                success: false,
                loading: false,
                messageError: null
            };

        default: return state;
    };
};

export default MessageReducer;