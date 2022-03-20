import React, { useEffect, useState, useRef } from 'react';
import '../../assets/styles/forget.css'
import { resetPassword, reset } from '../../appStore/actions/AuthAction';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Preloader from '../../components/Preloader';
import Swal from 'sweetalert2';
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const ForgotPassword = ({error, success, resetPassword, reset}) => {

    const errRef = useRef();
    const passwordRef = useRef();
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [validMatch, setValidMatch] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        token: "",
        emailAddress: "",
        newPassword: "",
        confirmPassword: ""
    });

    // Validates password whenever there's a change in the input
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(formData.password));
        setValidMatch(formData.password === formData.confirmPassword);
    }, [formData.password, formData.confirmPassword]);
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
        setErrMsg('')
    };
    // Sends form data to login user action and reset state to initial state on successful login
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        resetPassword(formData);
    };

    if(success){
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "You've successfully reset your password!.",
            footer: '<a href="http://45.76.131.94/login">Login</a>'
        });
        reset();
    };

     // Declaring error message
    const [errMsg, setErrMsg] = useState('');
    // Sets error message 
    const checkError = () => {
        setLoading(false);
        if (error?.response) {
            setErrMsg('Oops.. network or server error!');
        };
        reset();
    };

    return (
        <div id='form-wrap'>
            <div className="main-container">

                    <div className='forget'>
                        <div>
                            <h3>Reset your password</h3>
                            <hr></hr>
                            <h5>Please enter a valid password.</h5>
                        </div>
                        
                        <form onSubmit={handleSubmit}>
                             <div className="password">
                                <label htmlFor="password">
                                    New Password:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !formData.password ? "hide" : "invalid"} />
                                </label> 
                                <input type="password"
                                        name="password"
                                        value={formData.password}
                                        ref={passwordRef}
                                        onChange={handleInputData("password")}
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)} required />

                                <p className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>
                            </div>

                            <div>
                                <label htmlFor="password2">
                                    Confirm Password:
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !validPwd ? "hide" : "invalid"} />
                                </label> 
                                <input type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputData("confirmPassword")} required/>

                                <p className={!validMatch && formData.confirmPassword ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>
                            </div>
                            <div>
                                <input  value="Submit" type="submit" />
                                { loading && <Preloader /> }
                            </div>
                             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                                {errMsg}
                            </p>
                        </form>
                    </div>
            </div>
        </div>
    );
};

ForgotPassword.propTypes ={
    success: PropTypes.bool.isRequired,
    resetPassword: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    success: state.auth.success,
    error: state.auth.error
}); 


export default connect(mapStateToProps, {resetPassword, reset}) (ForgotPassword);
