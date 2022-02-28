import React from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col } from "react-bootstrap";
import AgeChart from '../../components/charts/AgeChart';
import GenderChart from '../../components/charts/GenderChart';


const Reports = ({employees}) => {

    var noOfEmployees = employees.length;
    var retentionRate = Math.round(((noOfEmployees-1)/noOfEmployees)*100);
    var noOfFemales = (employees.filter((employee) => employee.gender === 'Female')).length;
    var noOfMales = (employees.filter(employee => employee.gender === 'Male')).length;

    return (
        <div>
            <p><b>Your Hr Reports</b></p>
            <p> The key metrics from your current data to give you real-time insights into the company</p>
        
            <Row>
                <Col lg="3" sm="6" xs="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <div className='header'>
                                <p><b>Total No. of employees</b></p>
                            </div>
                            <hr></hr>
                            <div id="center">
                                    <h4>{noOfEmployees}</h4>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
           
                <Col lg="3" sm="6" xs="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <div className='header'>
                                <p><b>Total hired in last 60 days</b></p>
                            </div>
                            <hr></hr>
                            <div id="center">
                                    <h4>{noOfEmployees}</h4>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>

                 <Col lg="3" sm="6" xs="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <div className='header'>
                                <p><b>Left/Fired in last 60 days</b></p>
                            </div>
                            <hr></hr>
                            <div id="center">
                                    <h4>1</h4>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg="3" sm="6" xs="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <div className='header'>
                                <p><b>Current retention rate</b></p>
                            </div>
                            <hr></hr>
                            <div id="center">
                                    <h4>{retentionRate}%</h4>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md="6" sm="12">
                    <Card>
                        <Card.Body>
                            <p><b>Gender Ratio</b></p>
                            <hr></hr>
                            <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
                                <GenderChart noOfMales={noOfMales} noOfFemales={noOfFemales} />
                            </div>
                            <div className="legend" id="center">
                                <i className="fas fa-circle text-info"></i>
                                Female 
                                <i className="fas fa-circle text-danger"></i>
                                Male 
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

               <Col md="6" sm="12">
                    <Card>
                        <Card.Body>
                            <p><b>Age Profile</b></p>
                            <hr></hr>
                            <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
                               <AgeChart />
                            </div>
                             <div className="legend" id="center">
                                <i className="fas fa-circle text-info"></i>
                                Employees
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                 <Col lg="3" sm="6" xs="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <div className='header'>
                                <p><b>Avg age of Employees</b></p>
                            </div>
                            <hr></hr>
                            <div id="center">
                                    <h4>34</h4>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
           
                <Col lg="3" sm="6" xs="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <div className='header'>
                                <p><b>Annual turnover rate</b></p>
                            </div>
                            <hr></hr>
                            <div id="center">
                                <h4>5</h4>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg="3" sm="6" xs="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <div className='header'>
                                <p><b>Annual turnover</b></p>
                            </div>
                            <hr></hr>
                            <div id="center">
                                    <h4>5</h4>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg="3" sm="6" xs="6">
                    <Card className="card-stats">
                        <Card.Body>
                            <div className='header'>
                                <p><b>Annual turnover</b></p>
                            </div>
                            <hr></hr>
                            <div id="center">
                                    <h4>5</h4>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProps = state =>({
  employees: state.employee.employees
});

export default connect(mapStateToProps, {}) (Reports);
