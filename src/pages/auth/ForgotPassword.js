import React, { useEffect, useState, useRef } from 'react';
import '../../assets/styles/forget.css'
import { Link } from 'react-router-dom';
import { confirmUser, reset } from '../../appStore/actions/AuthAction';
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preloader from '../../components/Preloader';
import Swal from 'sweetalert2';
import PropTypes from "prop-types";
import { connect } from "react-redux";


const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const ForgotPassword = ({error, success, confirmUser, reset}) => {

    const errRef = useRef();
     const emailRef = useRef();

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [loading, setLoading] = useState(false);
    // Re renders page whenever there is change in error
    useEffect(()=>{
        emailRef.current.focus();
        if(error !==null){checkError()}
        // eslint-disable-next-line
    }, [error]);
    // Validates email whenever there's a change in the input
    useEffect(()=>{
        setValidEmail(EMAIL_REGEX.test(email));
        setErrMsg('');
    }, [email]);
     // Sends form data to login user action and reset state to initial state on successful login
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        confirmUser(email);
        setErrMsg('');
    };

    if(success){
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'An email with password reset instructions has been sent to your email address.'
        });
        reset();
    };

     // Declaring error message
    const [errMsg, setErrMsg] = useState('');
    // Sets error message 
    const checkError = () => {
        setLoading(false);
        setErrMsg('Oops.. network or server error!');
        reset();
    };

    return (
        <div id='form-wrap'>
            <div className="main-container">

                    <div className='forget'>
                        <div>
                            <h3>Find your Account</h3>
                            <hr></hr>
                            <h5>Please enter your email address to search for your account.</h5>
                        </div>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="email">
                                <label htmlFor="email">
                                    Email:
                                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                                </label>
                                <input type="email"
                                        name="email"
                                        ref={emailRef}
                                        autoComplete='off'
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)} required />
                            </div>
                            <div className='submit-div'>
                                <input  value="Submit" type="submit" />
                                {loading && <Preloader />}
                            </div>
                             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                                {errMsg}
                            </p>
                            <div className="forgot-password">
                                <Link to="/login"> Back to Login</Link>
                            </div>
                        </form>
                    </div>
                    
            </div>
        </div>
    );
};

ForgotPassword.propTypes ={
    success: PropTypes.bool.isRequired,
    confirmUser: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    success: state.auth.success,
    error: state.auth.error
}); 

export default connect(mapStateToProps, {confirmUser, reset}) (ForgotPassword);
