import React, { useState, useEffect } from 'react';
import "../../assets/styles/profile.css";
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import UploadAvatarModal from '../../components/modals/UploadAvatarModal';
import { Form, Button } from "react-bootstrap";
import NavBar from '../../components/navbar/NavBar';
import Preloader from '../../components/Preloader';
import { loadUser } from "../../appStore/actions/AuthAction";
import { updateUser, reset } from "../../appStore/actions/UserAction";
import { confirmAlert } from 'react-confirm-alert';

const UserProfile = ({ success, error, loadUser, updateUser, reset }) => {

    var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    useEffect(()=>{
        loadUser();
        // eslint-disable-next-line
    }, [success]);

    useEffect(()=>{
        if(success){showSuccess()};
        if(error){showError()};
        // eslint-disable-next-line
    }, [success, error]);
    // State to show upload profile pic modal
    const [show, setShow] = useState(false);
    const [disable, setDisable] = useState(true);
    const [loading, setLoading] = useState(false);
    // Initial state of form values
    const initialState = {
        firstName: loggedUser?.firstName,
        middleName: loggedUser?.middleName,
        lastName: loggedUser?.lastName,
        email: loggedUser?.email,
        phoneNumber: loggedUser?.phoneNumber,
        gender: loggedUser?.gender,
        dateOfBirth: loggedUser?.dateOfBirth,
        residentialAddress: loggedUser?.residentialAddress,
        cityOfResidence: loggedUser?.cityOfResidence,
        stateOfResidence: loggedUser?.stateofResidence,
        stateOfOrigin: loggedUser?.stateofOrigin,
        countryOfOrigin: loggedUser?.countryOfOrigin,
        avatar: loggedUser?.avatar
    };
    const [formData, setFormData] = useState(initialState);
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
        setLoading(false);
        setShow(false);
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

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: e.target.value
        }));
    };

    return (
        <>
            <NavBar />
            <div className='profile-content'>
                {loading && <Preloader />}
                <div id="center" style={{marginTop:"2rem"}}> 
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
            </div>
            {show && <UploadAvatarModal setShow={setShow}/>}
        </>
    );
};

const mapStateToProps = state =>({
    success: state.user.success,
    error: state.user.error
});

export default connect(mapStateToProps, {updateUser, loadUser, reset}) (UserProfile);
