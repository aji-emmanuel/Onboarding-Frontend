import React, { useState, useEffect } from 'react';
import "../../assets/styles/profile.css";
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { Form, Button } from "react-bootstrap";
import Preloader from '../../components/Preloader';
import UploadAvatarModal from '../../components/modals/UploadAvatarModal';
import { updateUser, reset } from "../../appStore/actions/UserAction";
import { confirmAlert } from 'react-confirm-alert';

const Profile = ({ success, error, updateUser, reset }) => {

    var loggedEmployee = JSON.parse(localStorage.getItem('loggedEmployee'));
    console.log(loggedEmployee)

    useEffect(()=>{
        if(success){showSuccess()};
        if(error){showError()};
        // eslint-disable-next-line
    }, [success, error]);

    const [active, setActive] = useState("personal");
    const [show, setShow] = useState(false);
    const [disable, setDisable] = useState(true);
    const [loading, setLoading] = useState(false);
    // Initial state of form values
    const initialState = {
        firstName: loggedEmployee?.firstName,
        middleName: loggedEmployee?.middleName,
        lastName: loggedEmployee?.lastName,
        email: loggedEmployee?.email,
        phoneNumber: loggedEmployee?.phone,
        gender: loggedEmployee?.gender,
        dateOfBirth: loggedEmployee?.dateOfBirth,
        residentialAddress: loggedEmployee?.residentialAddress,
        cityOfResidence: loggedEmployee?.cityOfResidence,
        stateOfResidence: loggedEmployee?.stateofResidence,
        stateOfOrigin: loggedEmployee?.stateofOrigin,
        countryOfOrigin: loggedEmployee?.countryOfOrigin,
        avatar: loggedEmployee?.avatar
    };
    const [formData, setFormData] = useState(initialState);
    // Sets active tab 
    const onClick = (profile) => {
        setActive(profile);
    };
    // Disables form and reset to initial values
    const onCancel = () =>{
        setFormData(initialState);
        setDisable(true);
    };
    // Sends form data to update user profile
    const submitFormData = () =>{
        setLoading(true);
        updateUser(formData);
        setFormData(formData);
        setDisable(true);
    };

    //
    const showSuccess = () =>{
        setShow(false);
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Profile updated successfully!',
        });
        reset();
    };
    const showError = () => {
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Profile update failed!',
        });
        reset();
    };

     // Confirms submission of form
    const submit = (e) => {
        e.preventDefault()
        confirmAlert({
        message: 'Are you sure?',
        buttons: [{
                label: 'submit',
                onClick: () => submitFormData()
            },
            {
            label: 'cancel',
            onClick: () => onCancel()
            }
        ]
        })
    };

    let classes = "profile-nav-button"
    let activeClasses = "profile-nav-button active"

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: e.target.value
        }));
    };

    return (
        <div>
            <div className="profile-nav">
                    
                    <Button className={active === "personal" ? activeClasses : classes}
                            onClick={() => onClick("personal")}>

                            <i className="far fa-eye" />
                            Personal
                    </Button>

                     <Button className={active === "employee" ? activeClasses : classes}
                             onClick={() => onClick("employee")}>

                            <i className="fas fa-briefcase" />
                            Employee
                    </Button>
            </div>
            
            <div className='profile-content'>
                {loading && <Preloader />}
                { active === "personal" ?
                (<>
                    <h4>Personal Details</h4>
                    <div id="center"> 
                        <img
                        alt="..."
                        className="profile-avatar"
                        src={formData.avatar}
                        />
                        <span className="fas fa-camera" onClick={()=>setShow(true)}></span>
                    </div>

                    <Form onSubmit={submit}>
                        <div className='profile-main'>
                            <div>
                                <div>
                                    <label htmlFor="firstName">First Name:</label>
                                    <input type="text" 
                                            name="firstName"
                                            value={formData.firstName}
                                            disabled={disable}
                                            onChange={handleInputData("firstName")} required/>
                                </div>

                                <div>
                                    <label htmlFor="middleName">Middle Name:</label>
                                    <input type="text" 
                                            name="middleName"
                                            value={formData.middleName}
                                            disabled={disable}
                                            onChange={handleInputData("middleName")} enabled required/>
                                </div>

                                <div>
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input type="text" 
                                            name="lastName"
                                            value={formData.lastName}
                                            disabled={disable}
                                            onChange={handleInputData("lastName")} required/>
                                </div>

                                <div>
                                    <label htmlFor="phoneNumber">Phone Number:</label>
                                    <input type="text" 
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            disabled={disable}
                                            onChange={handleInputData("phoneNumber")} required/>
                                </div>

                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" 
                                            name="email"
                                            value={formData.email}
                                            disabled={disable}
                                            onChange={handleInputData("email")} required />
                                </div>

                                <div>
                                    <label htmlFor="gender">Gender:</label>
                                    <input type="text" 
                                            name="gender"
                                            value={formData.gender}
                                            disabled={disable}
                                            onChange={handleInputData("gender")} required/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                                    <input type="date" 
                                            name="dateOfBirth"
                                            value={formData.dateOfBirth}
                                            disabled={disable}
                                            onChange={handleInputData("dateOfBirth")} required/>
                                </div>
                           

                                <div>
                                    <label htmlFor="residentialAddress">Residential Address:</label>
                                    <input type="text" 
                                            name="residentialAddress"
                                            value={formData.residentialAddress}
                                            disabled={disable}
                                            onChange={handleInputData("residentialAddress")} required/>
                                </div>

                                <div>
                                    <label htmlFor="cityOfResidence">City of Residence:</label>
                                    <input type="text" 
                                            name="cityOfResidence"
                                            value={formData.cityOfResidence}
                                            disabled={disable}
                                            onChange={handleInputData("cityOfResidence")} required/>
                                </div>

                                <div>
                                    <label htmlFor="stateOfResidence">State of Residence:</label>
                                    <input type="text" 
                                            name="stateOfResidence"
                                            value={formData.stateOfResidence}
                                            disabled={disable}
                                            onChange={handleInputData("stateOfResidence")} required/>
                                </div>

                                <div>
                                    <label htmlFor="stateOfOrigin">State of Origin:</label>
                                    <input type="text" 
                                            name="stateOfOrigin"
                                            value={formData.stateOfOrigin}
                                            disabled={disable}
                                            onChange={handleInputData("stateOfOrigin")} required/>
                                </div>

                                <div>
                                    <label htmlFor="countryOfOrigin">Country of Origin:</label>
                                    <input type="text" 
                                            name="countryOfOrigin"
                                            value={formData.countryOfOrigin}
                                            disabled={disable}
                                            onChange={handleInputData("countryOfOrigin")} required/>
                                </div>
                            </div>
                        </div>
                        <div className='space-between' style={{marginBottom:"2rem"}}>
                            <Button className='btn-custom' onClick={()=>setDisable(false)} >Edit</Button>
                            <Button type='submit' disabled={disable} >Save</Button>
                            <Button className='btn-custom' disabled={disable} onClick={onCancel}
                                    style={{backgroundColor:"red"}}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </>)
                :
                (<>
                    <h4>Employment Details</h4>
                    <div id="center"> 
                        <img
                        alt="..."
                        className="profile-avatar"
                        src={formData.avatar}
                        />
                        <span className="fas fa-camera" onClick={()=>setShow(true)}></span>
                    </div>
                    <Form>
                        <div className='profile-main'>
                            <div>
                                <div>
                                    <label htmlFor="workEmail">Work Email:</label>
                                    <input type="email" 
                                            name="workEmail"
                                            value={loggedEmployee?.workEmail}
                                            onChange={handleInputData("workEmail")} disabled />
                                </div>

                                <div>
                                    <label htmlFor="startDate">Employee Start Date:</label>
                                    <input type="date" 
                                            name="startDate"
                                            value={loggedEmployee?.employeeStartDate}
                                            onChange={handleInputData("startDate")} disabled/>
                                </div>

                                <div>
                                    <label htmlFor="designation">Designation:</label>
                                    <input type="text" 
                                            name="designation"
                                            value={loggedEmployee?.designation}
                                            onChange={handleInputData("designation")} disabled/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="department">Department:</label>
                                    <input type="text" 
                                            name="department"
                                            value={loggedEmployee?.department}
                                            onChange={handleInputData("department")} disabled/>
                                </div>

                                <div>
                                    <label htmlFor="status">Employment Status:</label>
                                    <input type="text" 
                                            name="status"
                                            value={loggedEmployee?.employmentStatus}
                                            onChange={handleInputData("status")} disabled/>
                                </div>

                                <div>
                                    <label htmlFor="salary">Salary:</label>
                                    <input type="text" 
                                            name="salary"
                                            value={`# ${loggedEmployee?.salary}`}
                                            onChange={handleInputData("salary")} disabled/>
                                </div>
                            </div>
                        </div>
                    </Form>
                </>)
            }
            </div>
            {show && <UploadAvatarModal setShow={setShow}/>}
        </div>
    );
};

const mapStateToProps = state =>({
    success: state.user.success,
    error: state.user.error
});

export default connect(mapStateToProps, {updateUser, reset}) (Profile);
