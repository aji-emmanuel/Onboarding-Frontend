
import React, { useState, useEffect } from 'react';
import "../../assets/styles/form.css";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import {connect } from "react-redux";
import Swal from 'sweetalert2';
import { addEmployee, reset } from '../../appStore/actions/EmployeeAction';
import { Form, Button } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';
import Preloader from '../../components/Preloader';
import 'react-confirm-alert/src/react-confirm-alert.css';

const AddEmployee = ({success, error, addEmployee, reset}) => {

    useEffect(()=>{
        if(success){showsuccess()};
        if(error){showError()};
        // eslint-disable-next-line
    }, [success, error]);

    const [loading, setLoading] = useState(false);
    // Initial state of form values
    const initialState = {
        userEmail: "",
        workEmail: "",
        designation: "",
        department: "",
        employmentStatus: "",
        employeeStartDate: "",
        salary: ""
    };
    //state for form data
    const [formData, setFormData] = useState(initialState);
    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: e.target.value
        }));
    };
    // Sends form data to add employee action and reset state to initial state
    const submitFormData = () =>{
        setLoading(true);
        addEmployee(formData);
    };
    // Resets form on cancel
    const cancel = () =>{
        setFormData(initialState);
    };
    //
    const showsuccess = () =>{
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Employee registration Successful',
        });
        reset();
        setFormData(initialState);
    };
    const showError = () => {
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Employee registration failed',
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
            onClick: () => cancel()
            }
        ]
        })
    };

    return (
        <div className='add-employee'>
            {loading && <Preloader />}
            <div className='form-header'>
                <h4>ADD NEW EMPLOYEE</h4>
            </div>
            <Form onSubmit={submit}>
                <div className='main'>
                    <div>
                        <div className='field'>
                            <label htmlFor="userEmail">Applicant Email:</label>
                            <input type="email" 
                                    name="userEmail"
                                    value={formData.userEmail}
                                    onChange={handleInputData("userEmail")} required />
                        </div>

                        <div className='field'>
                            <label htmlFor="department">Department:</label>
                            <input type="text" 
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputData("department")} required />
                        </div>

                        <div className='field'>
                            <label htmlFor="designation">Designation:</label>
                            <input type="text" 
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleInputData("designation")} required />
                        </div>

                        <div className='field'>
                            <label htmlFor="workEmail">Work Email:</label>
                            <input type="email" 
                                    name="workEmail"
                                    value={formData.workEmail}
                                    onChange={handleInputData("workEmail")} required />
                        </div>
                    </div>

                    <div>
                        <div className='field'>
                            <label htmlFor="employeeStartDate">Employee Start Date:</label>
                            <input type="date" 
                                    name="employeeStartDate"
                                    value={formData.employeeStartDate}
                                    onChange={handleInputData("employeeStartDate")} required />
                        </div>
                        
                        <div className='field'>
                            <label htmlFor="employmentStatus">Employment Status:</label>
                            <select name='employmentStatus'
                                        value={formData.employmentStatus}
                                        onChange={handleInputData("employmentStatus")} required>
                                
                                <option  defaultValue>Select status</option>
                                <option  value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>

                        <div className='field'>
                            <label htmlFor="salary">Salary:</label>
                            <input type="number" 
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleInputData("salary")} required />
                        </div>
                    </div>
                </div>

                <div className='space-between'>
                    <Button type='submit' disabled={!formData ? true : false}>
                        Submit
                    </Button>
                    <Link to="/hr/add_employee" className="btn-flat clear" onClick={cancel} >
                        Clear
                    </Link>
                </div>
                
            </Form>
        </div>
    );
};

AddEmployee.propTypes = {
    addEmployee: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired
};

const mapStateToProps = state =>({
    success: state.employee.success,
    error: state.employee.error
});

export default connect(mapStateToProps, {addEmployee, reset}) (AddEmployee);