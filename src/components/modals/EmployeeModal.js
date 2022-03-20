import React from 'react';
import "../../assets/styles/modal.css";
import { Card, Form } from 'react-bootstrap';
var face = require("../../assets/images/faces/face-3.jpg");

const EmployeeModal = () => {
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
                                src={face}
                                />
                            </div>
                            <div id="center">
                                <h3 className="title">Mike Smith</h3>
                            </div> 
                        </div>
                        <hr></hr>
                        <Form>
                        <div id="modal-form">
                            <div>
                                <label htmlFor="email">Work Email:</label>
                                <input type="email" 
                                        name="email"
                                        defaultValue="{employee.email}" disabled />
                            </div>

                            <div>
                                <label htmlFor="designation">Designation:</label>
                                <input type="text" 
                                        name="designation"
                                        defaultValue="{employee.designation}" disabled/>
                            </div>

                            <div>
                                <label htmlFor="department">Department:</label>
                                <input type="text" 
                                        name="department"
                                        defaultValue="{formData.department}" disabled/>
                            </div>
                        </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>
    );
};

export default EmployeeModal;
