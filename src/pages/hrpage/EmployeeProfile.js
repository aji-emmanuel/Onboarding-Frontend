import React, { useState, useEffect } from 'react';
import "../../assets/styles/modal.css";
import PropTypes from "prop-types";
import Swal from 'sweetalert2';
import { connect } from "react-redux";
import { confirmAlert } from 'react-confirm-alert';
import Preloader from '../../components/Preloader';
import { updateEmployee, deleteEmployee, reset } from '../../appStore/actions/EmployeeAction';
import { Card, Form, Button } from 'react-bootstrap';

const EmployeeProfile = ({error, success, reset, updateEmployee, deleteEmployee}) => {

    var employee = JSON.parse(localStorage.getItem('employee'));
    const [loading, setLoading] = useState(false);
    //state for form data
    const [employeeUpdate, setEmployee] = useState(employee);

    const { employeeId, avatar, firstName, middleName, lastName, gender, dateOfBirth, 
            phoneNumber, workEmail, designation, department, employeeStartDate, 
            employmentStatus, salary } = employeeUpdate;
        
    useEffect(()=>{
        if(success){showSuccess()};
        if(error){showError()};
        // eslint-disable-next-line
    }, [success, error]);
    
    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setEmployee(prevState => ({
            ...prevState,
            [input]: e.target.value
        }));
    };
    // Sends form data to update employee action and reset state to initial state
    const saveFormData = () =>{
        setLoading(true);
        updateEmployee(employeeUpdate);
    };
    // Sends employee id to delte employee action and reset state to initial state
    const terminate = () =>{
        setLoading(true);
        deleteEmployee(employeeId);
    };
    // Resets state to initial state on close
    const close = () =>{
         setEmployee(employee);
    };

    const showSuccess = () =>{
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success!',
        });
        reset();
    };
    const showError = () =>{
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Unsuccessful!',
        });
        reset();
    };

    const submit = () => {
        confirmAlert({
        message: 'Are you sure?',
        buttons: [{
                label: 'Terminate',
                onClick: () => terminate()
            },
            {
                label: 'Cancel',
                onClick: () => close()
            }]
        });
    };

    return (
        <div className='profile-content'>
            {loading && <Preloader />}
            <Card className="card-user">
                <Card.Body>
                    <div className="author" >
                        <div id="center"> 
                            <img
                            alt="..."
                            className="avatar border-gray"
                            src={avatar}
                            />
                        </div>
                        <div id="center">
                            <h3 className="title">{firstName+" "+middleName+" "+lastName}</h3>
                        </div> 
                    </div>
                    <hr></hr>
                    <Form>
                            <div className='profile-main'>
                            <div>
                                <label htmlFor="gender">Gender:</label>
                                <input type="email" 
                                        name="gender"
                                        value={gender} disabled/>
                            </div>

                                <div>
                                <label htmlFor="gender">Phone Number:</label>
                                <input type="text" 
                                        name="phoneNumber"
                                        value={phoneNumber} disabled/>
                            </div>

                                <div>
                                <label htmlFor="gender">Date of Birth:</label>
                                <input type="text" 
                                        name="dateOfBirth"
                                        value={dateOfBirth} disabled/>
                            </div>

                            <div>
                                <label htmlFor="email">Work Email:</label>
                                <input type="email" 
                                        name="workEmail"
                                        value={workEmail}
                                        onChange={handleInputData("workEmail")}  />
                            </div>

                                <div>
                                <label htmlFor="department">Department:</label>
                                <input type="text" 
                                        name="department"
                                        value={department}
                                        onChange={handleInputData("department")} />
                            </div>

                            <div>
                                <label htmlFor="designation">Designation:</label>
                                <input type="text" 
                                        name="designation"
                                        value={designation}
                                        onChange={handleInputData("designation")} />
                            </div>

                            <div>
                                <label htmlFor="employeeStartDate">Start Date:</label>
                                <input type="text" 
                                        name="employeeStartDate"
                                        value={employeeStartDate}
                                        onChange={handleInputData("employeeStartDate")} />
                            </div>

                            <div>
                                <label htmlFor="employementStatus">Employment Status:</label>
                                <input type="text" 
                                        name="employementStatus"
                                        value={employmentStatus}
                                        onChange={handleInputData("employmentStatus")} />
                            </div>

                            <div>
                                <label htmlFor="employementStatus">Salary:</label>
                                <input type="text" 
                                        name="salary"
                                        value={salary}
                                        onChange={handleInputData("salary")} />
                            </div>
                        </div>

                            <div className="form-footer space-between">
                            <Button  style={{backgroundColor:"red"}} onClick={submit}>
                                Terminate
                            </Button>
                            <Button  onClick={saveFormData} >
                                Save
                            </Button>
                            <button onClick={close}>Reset</button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

EmployeeProfile.propTypes = {
    success: PropTypes.bool.isRequired,
    updateEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    success: state.employee.success,
    error: state.employee.error
});

export default connect(mapStateToProps, {updateEmployee, deleteEmployee, reset})(EmployeeProfile);
