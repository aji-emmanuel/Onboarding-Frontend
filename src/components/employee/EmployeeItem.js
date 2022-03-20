import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getEmployee } from '../../appStore/actions/EmployeeAction';
import { Card, Col, Button } from "react-bootstrap";

const EmployeeItem = ({ employee, getEmployee }) => {

    const loadEmployee = () =>{
        getEmployee(employee);
    };

    const { firstName, lastName, designation, avatar } = employee;
    var path;
    let roles = localStorage.getItem('role');
    if (roles.includes('HR')){
        path = "/hr/employee";
    } else {
        path = "/employee/employee";
    };

    return (
        <Col lg="3" sm="4" xs="6">
            <Card className="card-user">
                <Card.Body>
                    <Link to={path}  onClick={loadEmployee}>
                        <div className="author">
                            <div style={{height:"100px"}}>
                                <img alt="..."
                                    className="avatar border-gray"
                                    src={avatar}
                                />
                            </div>
                            <div id="name-box">
                                <h5 className="title">{firstName+" "+lastName}</h5>
                            </div>
                            <span>{designation}</span>
                        </div>
                        <hr></hr>
                    </Link>
                    <div id="center">
                        <div className='btn-simple btn-icon'>
                            <Button
                                className="btn-simple btn-icon btn-facebook"
                                href="#!"
                                onClick={(e) => e.preventDefault()}
                                variant="link"
                            >
                                <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                                className="btn-simple btn-icon btn-twitter"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="link"
                            >
                                <i className="fab fa-twitter"></i>
                            </Button>
                            <Button
                                className="btn-simple btn-icon btn-google"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                variant="link"
                            >
                                <i className="fab fa-google-plus-square"></i>
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default connect(null, {getEmployee})(EmployeeItem);
