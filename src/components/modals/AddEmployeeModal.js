
import React, { useState } from 'react';
import "../../assets/styles/modal.css";
import PropTypes from "prop-types";
import {connect } from "react-redux";
import { addEmployee } from '../../appStore/actions/EmployeeAction';
import { Form, Button } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const AddEmployeeModal = ({addEmployee}) => {
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
        addEmployee(formData);
        setFormData(initialState);
    };
    // Resets form on cancel
    const cancel = () =>{
        setFormData(initialState);
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
        });
    };

    return (
        <div id="add-employee-modal" className="modal">
            <div className="modal-content">
                <h4>Add New Employee</h4>
                <Form onSubmit={submit}>
                    <div>
                        <label htmlFor="userEmail">User Email:</label>
                        <input type="email" 
                                name="userEmail"
                                value={formData.userEmail}
                                onChange={handleInputData("userEmail")} required />
                    </div>

                    <div>
                        <label htmlFor="department">Department:</label>
                        <input type="text" 
                                name="department"
                                value={formData.department}
                                onChange={handleInputData("department")} required />
                    </div>

                    <div>
                        <label htmlFor="designation">Designation:</label>
                        <input type="text" 
                                name="designation"
                                value={formData.designation}
                                onChange={handleInputData("designation")} required />
                    </div>

                    <div>
                        <label htmlFor="workEmail">Work Email:</label>
                        <input type="email" 
                                name="workEmail"
                                value={formData.workEmail}
                                onChange={handleInputData("workEmail")} required />
                    </div>

                    <div>
                        <label htmlFor="employeeStartDate">Employee Start Date:</label>
                        <input type="date" 
                                name="employeeStartDate"
                                value={formData.employeeStartDate}
                                onChange={handleInputData("employeeStartDate")} required />
                    </div>

                    <div>
                        <label htmlFor="employmentStatus">Employment Status:</label>
                        <input type="text" 
                                name="employmentStatus"
                                value={formData.employmentStatus}
                                onChange={handleInputData("employmentStatus")} required />
                    </div>

                    <div>
                        <label htmlFor="salary">Salary:</label>
                        <input type="number" 
                                name="salary"
                                value={formData.salary}
                                onChange={handleInputData("salary")} required />
                    </div>

                     <div className='form-footer space-between'>
                        <Button className="modal-close" onClick={cancel} style={{backgroundColor:"red"}}>
                            Cancel
                        </Button>
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

AddEmployeeModal.propTypes = {
    addEmployee: PropTypes.func.isRequired
};

export default connect(null, {addEmployee}) (AddEmployeeModal);