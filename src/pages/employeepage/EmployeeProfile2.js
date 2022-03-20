import React from 'react';
import "../../assets/styles/modal.css";
import { Card, Form } from 'react-bootstrap';

const EmployeeProfile = () => {

     var employee = JSON.parse(localStorage.getItem('employee'));

    const { avatar, firstName, middleName, lastName, gender, dateOfBirth, 
            phoneNumber, workEmail, designation, department, employeeStartDate, 
            employmentStatus } = employee;

    return (
        <div className='profile-content'>
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
                                        value={workEmail} disabled />
                            </div>

                                <div>
                                <label htmlFor="department">Department:</label>
                                <input type="text" 
                                        name="department"
                                        value={department} disabled />
                            </div>

                            <div>
                                <label htmlFor="designation">Designation:</label>
                                <input type="text" 
                                        name="designation"
                                        value={designation} disabled />
                            </div>

                            <div>
                                <label htmlFor="employeeStartDate">Start Date:</label>
                                <input type="text" 
                                        name="employeeStartDate"
                                        value={employeeStartDate} disabled />
                            </div>

                            <div>
                                <label htmlFor="employementStatus">Employment Status:</label>
                                <input type="text" 
                                        name="employementStatus"
                                        value={employmentStatus} disabled />
                            </div>
                        </div>  
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EmployeeProfile;
