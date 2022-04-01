
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadEmployee } from "../../appStore/actions/AuthAction";
import { Container, Row, Col } from "react-bootstrap";
import Task from "../../components/Dashboard/Task/Task";
import Holidays from "../../components/Dashboard/Holidays";
import Anniversary from "../../components/Dashboard/Anniversary/Anniversary";


function Dashboard({loggedEmployee, loadEmployee}) {

  useEffect(()=>{
    loadEmployee();
    // eslint-disable-next-line
  });

  return (
    <Container fluid>
      <section id="dashboard-welcome">
        <span>
            Welcome, {loggedEmployee?.firstName} <i className="fas fa-user" />
        </span>
      </section>

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

const mapStateToProps = state =>({
  loggedEmployee: state.auth.loggedEmployee
});

export default connect(mapStateToProps, {loadEmployee}) (Dashboard);
