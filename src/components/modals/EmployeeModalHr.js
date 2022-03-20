import React, { useState, useEffect } from 'react';
import "../../assets/styles/modal.css";
import PropTypes from "prop-types";
import Swal from 'sweetalert2';
import { connect } from "react-redux";
import { updateEmployee, deleteEmployee, clearError, resetSuccess } from '../../appStore/actions/EmployeeAction';
import { Card, Form, Button } from 'react-bootstrap';
import M from 'materialize-css/dist/js/materialize.min.js';

const EmployeeModalHr = ({employee, error, clearError, success, resetSuccess, updateEmployee, deleteEmployee}) => {

    //state for form data
    const [employeeUpdate, setEmployee] = useState(employee);
    useEffect(()=>{
        setEmployee(employee)
    }, [employee]);

    const { employeeId, avatar, firstName, middleName, lastName, gender, dateOfBirth, 
            phoneNumber, workEmail, designation, department, employeeStartDate, 
            employmentStatus, salary } = employeeUpdate;
    
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
        updateEmployee(employeeUpdate);
    };
    // Sends employee id to delte employee action and reset state to initial state
    const terminate = () =>{
        deleteEmployee(employeeId);
        if(success){
            M.toast({html: `${firstName} ${lastName} was successfully terminated!`})
        }
    };
    // Resets state to initial state on close
    const close = () =>{
         setEmployee(employee);
    };

    if(success){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Update Successful!',
        });
        resetSuccess();
    };

    if(error!==null){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Update was not successful!',
        });
        clearError();
    };

    return (
        <div id="employee-modal" className="modal">
            <div className="modal-content">
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
                            <div id="modal-form">

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
                                <Button className="modal-close" style={{backgroundColor:"red"}} onClick={terminate}>
                                    Terminate
                                </Button>
                                <Button className="modal-close" onClick={saveFormData} >
                                    Save
                                </Button>
                                <button className="modal-close btn-flat" onClick={close}>Close</button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

EmployeeModalHr.propTypes = {
    employee: PropTypes.object.isRequired,
    success: PropTypes.bool.isRequired,
    updateEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired,
    resetSuccess: PropTypes.func.isRequired
};

const mapStateToProps = state =>({
    employee: state.employee.employee,
    success: state.employee.success,
    error: state.employee.error
});

export default connect(mapStateToProps, {updateEmployee, deleteEmployee, clearError, resetSuccess})(EmployeeModalHr);
