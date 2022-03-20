import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import Search from '../../components/Search';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
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
            <div id="ends">
                <Search search={searchEmployee} placeholder="Search Employee" />
                <div className='btn-custom btn'>
                    <Link to="/hr/add_employee">
                        <i className='fas fa-user'></i>
                        Add Employee
                    </Link>
                </div>
            </div>
           
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
