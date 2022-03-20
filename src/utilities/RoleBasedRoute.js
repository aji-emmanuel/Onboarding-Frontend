import React from 'react';
import { connect } from "react-redux";
import {Route, Redirect} from 'react-router-dom';

const grantPermission = (requestedRoles) => {
    let roles = localStorage.getItem('role');
    if(roles.includes(requestedRoles)){
        return true;
    };
    return false;
};

const RoleBasedRoute = ({ component: Component, isLoggedIn, role, ...rest }) => {

    return (
        <Route {...rest} render ={props=>
            !isLoggedIn ?
            (
                <Redirect to='/login' />
            ) 
            : 
            isLoggedIn && grantPermission(role) ?
            (
                <Component {...props} />
            )
            :
            (
                <Redirect to='/unauthorized' />
            )
            }
        />
    );
};

const mapStateToProps = state =>({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, {}) (RoleBasedRoute);