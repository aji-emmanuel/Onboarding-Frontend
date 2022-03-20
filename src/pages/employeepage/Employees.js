import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import Search from '../../components/Search';
import { connect } from "react-redux";
import { searchEmployee, getEmployees, reset } from '../../appStore/actions/EmployeeAction';
import Employee from '../../components/employee/Employee';

const Employees = ({searchEmployee, getEmployees, reset}) => {

    useEffect(()=>{
        // Loads all employees
        getEmployees();
        reset();
    });

    return (
        <>
            <Search search={searchEmployee} placeholder="Search Employee" />
            <Employee />
        </>
    );
};

Employees.propTypes ={
    searchEmployee: PropTypes.func.isRequired,
    getEmployees: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

export default connect(null, {searchEmployee, getEmployees, reset})(Employees);
