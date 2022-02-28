import React from 'react';
import { connect } from "react-redux";
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => {

    return (
        <Route {...rest} render ={props=>
            !isLoggedIn ? (
                <Redirect to='/login' />
            ) : (
                <Component {...props} />
            )}
        />
    )
};

const mapStateToProps = state =>({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, {}) (PrivateRoute);