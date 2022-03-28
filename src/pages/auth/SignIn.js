import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/auth-style.css';
import { connect } from "react-redux";
import Header from "../homepage/header/Header";
import { loginUser, reset } from "../../appStore/actions/AuthAction";
import Preloader from '../../components/Preloader';
import {ReactComponent as Welcome} from "../../assets/illustrations/onboarding.svg"

const SignIn = ({ isLoggedIn, error, reset, loginUser, ...props }) => {
    // Initial form state
    const initialState = {
        EmailAddress:"",
        Password:""
    }

    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const errRef = useRef();

    useEffect(()=>{
        if(isLoggedIn){
            setLoading(false);
            redirect();
        };
        // eslint-disable-next-line
    }, [isLoggedIn]);

    const redirect = () =>{
        let roles = localStorage.getItem('role');
        if(roles.includes('HR')){
            props.history.push('/hr/dashboard');
        } else if (roles.includes('Employee')){
            props.history.push('/employee/dashboard');
        } else{
            props.history.push('/user');
        };
    };

    useEffect(()=> {
        emailRef.current.focus();
        reset()
        // eslint-disable-next-line
    }, []);
    // Re renders page whenever there is change in error
    useEffect(()=>{
        checkError()
        // eslint-disable-next-line
    }, [error]);

    const handleInputData = (input) => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setFormData(state => ({
            ...state,
            [input]: e.target.value
        }));
        setErrMsg('');
    };
    // Sends form data to login user action and reset state to initial state on successful login
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrMsg('');
        loginUser(formData);
        if(isLoggedIn){
            setFormData(initialState);
        }
    };
    // Declaring error message
    const [errMsg, setErrMsg] = useState('');
    // Sets error message 
    const checkError = () => {
        setLoading(false);
        if(error !== null) {
            if (error.response?.status === 400) {
                setErrMsg('Invalid Credentials');
            }else if (error.response?.status === 401) {
                setErrMsg('Invalid Credentials');
            }else if(error !== null){
                setErrMsg('Oops.., network or server error');
            }
        }
    };
          
    return (
        <>
            <Header />
            <div className="auth-container">
                    <div className='auth-welcome'>
                        <Welcome />
                    </div>
                    <div className='sub-main'>
                        <div className="heading">
                            <div>
                                <h4> Log In </h4>
                            </div>
                        </div>
                       
                        <form onSubmit={handleSubmit}>
                            <div className="email">
                                <label htmlFor="EmailAddress" required>Email:</label>
                                <input type="email"
                                        name="EmailAddress"
                                        ref={emailRef}
                                        autoComplete='off'
                                        value={formData.EmailAddress}
                                        onChange={handleInputData("EmailAddress")} required />
                            </div>
                            <div className="password">
                                <label htmlFor="Password">Password:</label> 
                                <input type="password"
                                        name="Password"
                                        value={formData.password}
                                        onChange={handleInputData("Password")} required />
                            </div>
                            <div className='login-div'>
                                <input  value="Login" type="submit" />
                                { loading && <Preloader /> }
                            </div>
                             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                                {errMsg}
                            </p>
                        </form>
                    
                        <div className="forgot-password">
                            <Link to="/forgot_password">Forgot password?</Link>
                        </div>
                    </div>
            </div>
        </>
    );
};

const mapStateToProps = state =>({
    isLoggedIn: state.auth.isLoggedIn,
    error: state.auth.error,
    loading: state.auth.loading
});

export default connect(mapStateToProps, {loginUser, reset}) (SignIn);