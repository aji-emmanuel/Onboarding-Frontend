
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadUser, loadEmployee } from "../../appStore/actions/AuthAction";
import { getEmployees } from "../../appStore/actions/EmployeeAction";
import { Container, Row, Col } from "react-bootstrap";
import Task from "../../components/Dashboard/Task/Task";
import Statistics from "../../components/Dashboard/Statistics";
import Holidays from "../../components/Dashboard/Holidays";
import Anniversary from "../../components/Dashboard/Anniversary/Anniversary";


function Dashboard({loadUser, loadEmployee, getEmployees}) {

  useEffect(()=>{
    // Loads loggedIn user details
    loadUser();
    // Loads loggedIn employee details
    loadEmployee();
    // Loads all employees
    getEmployees();
    // eslint-disable-next-line
  });

  var loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

  return (
    <Container fluid>
      <section id="dashboard-welcome">
        <span>
            Welcome, {loggedUser?.firstName} <i className="fas fa-user" />
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

export default connect(null, {loadUser, loadEmployee, getEmployees}) (Dashboard);
