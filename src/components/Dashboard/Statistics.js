import React from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col } from "react-bootstrap";

const Statistics = ({employees}) => {

  var noOfEmployees = employees.length;
    return (
        <Row>
          <Col lg="3" sm="6" xs="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-users"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Employees</p>
                      <Card.Title as="h4">{noOfEmployees}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  No of Employees
                </div>
              </Card.Footer>
            </Card>
          </Col>
          
          <Col lg="3" sm="6" xs="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                     <i className="fas fa-user-friends"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Leave</p>
                      <Card.Title as="h4">0</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  On leave
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6" xs="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-user-plus"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Hired</p>
                      <Card.Title as="h4">{noOfEmployees}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  Hired in Last 60days.
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6" xs="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-user-minus"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Left</p>
                      <Card.Title as="h4">1</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  Left in Last 60days.
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
    );
};

const mapStateToProps = state =>({
  employees: state.employee.employees
});

export default connect(mapStateToProps,{}) (Statistics);
