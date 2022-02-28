import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/login.css';
import '../../assets/styles/register.css';
import { registerUser, reset } from '../../redux/actions/AuthAction';
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import Swal from 'sweetalert2';
import PropTypes from "prop-types";
import Preloader from "../../components/Preloader";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {ReactComponent as Welcome} from "../../assets/illustrations/onboarding.svg";


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{5}$/;
const TEXT_REGEX = /^[a-zA-Z]{2,}$/;

const SignUp = ({error, success, registerUser, reset}) => {

    const errRef = useRef();

    const [step, setstep] = useState(1);
    const [loading, setLoading] = useState(false);
    // Initial form state
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        dateOfBirth: "",
        residentialAddress: "",
        cityOfResidence: "",
        stateOfResidence: "",
        stateOfOrigin: "",
        countryOfOrigin: "",
        password: ""
    };

    //states for form data, valid phone, email and password
    const [formData, setFormData] = useState(initialState);
    const [password2, setPassword2] = useState('');

    const [validPhone, setValidPhone] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [validMatch, setValidMatch] = useState(false);

    const [validFirst, setValidFirst] = useState(false);
    const [validLast, setValidLast] = useState(false);

    const validGender = () => {return formData.gender === "Male" || formData.gender === "Female"}
    // Validates phone number whenever there's a change in the input
    useEffect(() => {
        setValidPhone(PHONE_REGEX.test(formData.phoneNumber));
        setValidFirst(TEXT_REGEX.test(formData.firstName));
        setValidLast(TEXT_REGEX.test(formData.lastName));
    }, [formData.phoneNumber, formData.firstName, formData.lastName]);
    // Validates email whenever there's a change in the input
    useEffect(()=>{
        setValidEmail(EMAIL_REGEX.test(formData.email));
    }, [formData.email]);
    // Validates password whenever there's a change in the input
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(formData.password));
        setValidMatch(formData.password === password2);
    }, [formData.password, password2]);
    // Re renders page whenever there is change in error
    useEffect(()=>{
        checkError();
        // eslint-disable-next-line
    }, [error]);
    //
    useEffect(()=>{
        if(success){showSuccess()};
        // eslint-disable-next-line
    }, [success])
    // Resets error message whenever there is a change in the input fields
    useEffect(() => {
        setErrMsg('');
    }, [formData]);
    // Resets form to the first step on successful submit
    useEffect(()=>{
        prevStep();
        setFormData(initialState);
        // eslint-disable-next-line
    }, [success]);
    // function for going to next step by increasing step state by 1
    const nextStep = async (e) =>{
        e.preventDefault();
        setstep(step + 1);
    };
     // function for going to previous form by decreasing step state by 1
    const prevStep = () => {
        if(step>1){
            setstep(step - 1)};
    };

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
        registerUser(formData);
    };

   const showSuccess = () =>{
       setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registration Successful',
            footer: '<a href="http://45.76.131.94/login">Login</a>'
        });
        reset();
    };
    // Declaring error message
    const [errMsg, setErrMsg] = useState('');
    // Sets error message 
    const checkError = () => {
        setLoading(false);
        if(error !== null) {
            if (!error?.response) {
                setErrMsg('Oops.. network error!');
            } else if (error.response?.status === 409) {
                setErrMsg('Email already exist!');
            } else {
                setErrMsg('Registration Failed')
            }
        };
        reset();
    };

    return (
        <div id='form-wrap'>
            <div className="main-container">
                <div className="main">
                    <div>
                        <Link to='/' className='brandname'>
                            <h4>Team-Lion</h4>
                        </Link>
                        <div>
                        <section >
                                <div id='about-image'>
                                    <Welcome />
                                </div>
                                <div className='grid-one'>
                                    <article>
                                        <div className='description'>
                                            <p>
                                                Team-Lion HR is a web application that automates the manual onboarding processes of new employees.
                                                <br />
                                                In summary, we're all about ensuring a smooth and interesting integration of new employees
                                                into our organization.<br />
                                                We trust you will have a successful career with us.
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className='sub-main'>
                        <div className="heading">
                            <div>
                                <Link className="sign-in" to="/login">Sign In</Link>
                            </div>
                            <div className="register">
                                <Link to="/register">Register</Link>
                                <p className="register-in-line"></p>
                            </div>
                        </div>

                        {step === 1 ?
                        (<Form>
                            <div>
                                <label htmlFor="firstName">
                                    First Name:
                                    <FontAwesomeIcon icon={faCheck} className={validFirst ? "valid" : "hide"} />
                                </label>
                                <input type="text" 
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputData("firstName")} required />
                            </div>

                            <div>
                                <label htmlFor="lastName">
                                    Last Name:
                                    <FontAwesomeIcon icon={faCheck} className={validLast ? "valid" : "hide"} />
                                </label>
                                <input type="text" 
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputData("lastName")} required/>
                            </div>

                            <div>
                                <label htmlFor="email">
                                    Email:
                                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validEmail || !formData.email ? "hide" : "invalid"} />
                                </label>
                                <input type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputData("email")} required />
                            </div>

                            <div>
                                <label htmlFor="phoneNumber">
                                    Phone Number:
                                    <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPhone || !formData.phoneNumber ? "hide" : "invalid"} />
                                </label>
                                <input type="phone" 
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleInputData("phoneNumber")} required />
                            </div>

                            <div>
                                <label htmlFor="gender">
                                    Gender:
                                    <FontAwesomeIcon icon={faCheck} className={validGender() ? "valid" : "hide"} />
                                </label>
                                <input type="text" 
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputData("gender")} required/>
                            </div>

                            <div>
                                <label htmlFor="dateOfBirth">
                                    Date of Birth:
                                    <FontAwesomeIcon icon={faCheck} className={formData.dateOfBirth ? "valid" : "hide"} />
                                </label>
                                <input type="date" 
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleInputData("dateOfBirth")} required/>
                            </div>

                            <button id="reg-next" onClick={nextStep} disabled={!formData.firstName || 
                                                                !formData.lastName || 
                                                                !formData.email ||
                                                                !validPhone ||
                                                                !validGender() ||
                                                                !formData.dateOfBirth ? true : false} >Continue</button>
                        </Form>)
                        : 
                        (<Form onSubmit={handleSubmit}>
                             {loading && <div style={{marginLeft:"-20vw"}}><Preloader /></div>}
                            <div>
                                <label htmlFor="residentialAddress">
                                    Residential Address:
                                    <FontAwesomeIcon icon={faCheck} className={formData.residentialAddress ? "valid" : "hide"} />
                                </label>
                                <input type="text" 
                                        name="residentialAddress"
                                        value={formData.residentialAddress}
                                        onChange={handleInputData("residentialAddress")} required />
                            </div>

                            <div>
                                <label htmlFor="cityOfResidence">
                                    City Of Residence:
                                    <FontAwesomeIcon icon={faCheck} className={formData.cityOfResidence ? "valid" : "hide"} />
                                </label>
                                <input type="text" 
                                        name="cityOfResidence"
                                        value={formData.cityOfResidence}
                                        onChange={handleInputData("cityOfResidence")} required />
                            </div>

                            <div>
                                <label htmlFor="stateOfResidence">
                                    State Of Residence:
                                    <FontAwesomeIcon icon={faCheck} className={formData.stateOfResidence ? "valid" : "hide"} />
                                </label>
                                <input type="text" 
                                        name="stateOfResidence"
                                        value={formData.stateOfResidence}
                                        onChange={handleInputData("stateOfResidence")} required />
                            </div>

                            <div>
                                <label htmlFor="stateOfOrigin">
                                    State Of Origin:
                                    <FontAwesomeIcon icon={faCheck} className={formData.stateOfOrigin ? "valid" : "hide"} />
                                </label>
                                <input type="text" 
                                        name="stateOfOrigin"
                                        value={formData.stateOfOrigin}
                                        onChange={handleInputData("stateOfOrigin")} required />
                            </div>

                            <div>
                                <label htmlFor="countryOfOrigin">
                                    Country Of Origin:
                                    <FontAwesomeIcon icon={faCheck} className={formData.countryOfOrigin ? "valid" : "hide"} />
                                </label>
                                <input type="text" 
                                        name="countryOfOrigin"
                                        value={formData.countryOfOrigin}
                                        onChange={handleInputData("countryOfOrigin")} required />
                            </div>

                            <div className="password">
                                <label htmlFor="password">
                                    Password:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !formData.password ? "hide" : "invalid"} />
                                </label> 
                                <input type="password"
                                        name="password"
                                        value={formData.password}
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
                                        name="password2"
                                        value={password2}
                                        onChange={e => setPassword2(e.target.value)} />

                                <p className={!validMatch ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Must match the first password input field.
                                </p>
                            </div>
                            
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <input type="submit" value="Sign Up" disabled={!formData || !validPwd || !validMatch ? true : false} />
                            <div className="forgot-password">
                                <Link to="#!" onClick={prevStep}>Go Back</Link>
                            </div>
                        </Form>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

SignUp.propTypes ={
    success: PropTypes.bool.isRequired,
    registerUser: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    success: state.auth.success,
    error: state.auth.error
}); 

export default connect(mapStateToProps, {registerUser, reset}) (SignUp);