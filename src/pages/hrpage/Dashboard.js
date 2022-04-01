
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadEmployee } from "../../appStore/actions/AuthAction";
import { getEmployees } from "../../appStore/actions/EmployeeAction";
import { Container, Row, Col } from "react-bootstrap";
import Task from "../../components/Dashboard/Task/Task";
import Statistics from "../../components/Dashboard/Statistics";
import Holidays from "../../components/Dashboard/Holidays";
import Anniversary from "../../components/Dashboard/Anniversary/Anniversary";


function Dashboard({loadEmployee, getEmployees}) {

  useEffect(()=>{
    // Loads loggedIn employee details
    loadEmployee();
    // Loads all employees
    getEmployees();
    // eslint-disable-next-line
  });

  var loggedEmployee = JSON.parse(localStorage.getItem('loggedEmployee'));

  return (
    <Container fluid>
      <section id="dashboard-welcome">
        <span>
            Welcome, {loggedEmployee?.firstName} <i className="fas fa-user" />
        </span>
      </section>

      <Statistics />

      <Row>
        <Col md="8">
          <Task />
        </Col>

        <Col md="4">
          <Anniversary />
          <Holidays />
        </Col>
      </Row>

    </Container>
  );
};

export default connect(null, {loadEmployee, getEmployees}) (Dashboard);
