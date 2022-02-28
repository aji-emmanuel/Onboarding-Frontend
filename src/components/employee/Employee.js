import React from 'react';
import EmployeeItem from './EmployeeItem';
import { connect } from "react-redux";
import Preloader from '../Preloader';
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Employee = ({employees, filtered, loading}) => {

     if(loading){
        return <Preloader />
    };

    return (
        <Row>
            {filtered.length !==0
                ? 
            (filtered.map(employee =>{
                return <EmployeeItem employee ={employee} key ={employee.employeeId} />
            }))
                :
             employees.length !==0
                ?
            (employees.map( employee =>{
                return <EmployeeItem employee ={employee} key ={employee.employeeId} />
            }))
                :
             (<Col sm="12"><h5 id='center'>No Employees to show..</h5></Col>)
            }
        </Row>
    );
};

Employee.propTypes = {
    employees: PropTypes.array.isRequired,
    filtered: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = state =>({
    employees: state.employee.employees,
    filtered: state.employee.filtered,
    loading: state.employee.loading
});

export default connect(mapStateToProps) (Employee);