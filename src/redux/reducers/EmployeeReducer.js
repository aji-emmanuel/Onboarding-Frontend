
import { GET_EMPLOYEES, GET_EMPLOYEE, ADD_EMPLOYEE, UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE, SET_LOADING, SEARCH_EMPLOYEES, ERROR, RESET} from "../Types";

const initialState = {
    employees: [],
    filtered: [],
    employee: {},
    current: null,
    success: false,
    loading: true,
    error: null
};

const EmployeeReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case GET_EMPLOYEES:
            return{
                ...state,
                employees: action.payload,
                loading: false
            };
        case GET_EMPLOYEE:
             localStorage.setItem('employee', JSON.stringify(action.payload))
                return{
                    ...state,
                    employee: action.payload,
                    loading: false
                };
        case ADD_EMPLOYEE:
            return{
                ...state,
                employees: [action.payload, ...state.employees],
                success: true,
                loading: false
            };
        case UPDATE_EMPLOYEE:
            return{
                ...state,
                employees: state.employees.map(
                    (employee) => employee.id === action.payload.id ? action.payload : employee),
                success: true,
                loading: false
            };
        case DELETE_EMPLOYEE:
            return{
                ...state,
                employees:  state.employees.filter(employee => employee.id !== action.payload),
                success: true,
                loading: false
            };
        case SEARCH_EMPLOYEES:
            return{
                ...state,
                filtered: state.employees.filter(employee =>{
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return employee.firstName.match(regex) ||
                           employee.lastName.match(regex) ||
                           employee.department.match(regex) ||
                           employee.designation.match(regex) ||
                           employee.workEmail.match(regex) ||
                           employee.phoneNumber.match(regex);}),
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
                error: null,
                loading: false,
                success: false
            };
        default: return state;
    };
};

export default EmployeeReducer;