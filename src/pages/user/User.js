import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NavBar from "../../components/navbar/NavBar";
import { loadUser } from '../../redux/actions/AuthAction';
const User = ({loadUser}) => {

    useEffect(()=>{
        loadUser();
        // eslint-disable-next-line
    });

    return (
        <>
            <NavBar />
            <div className='center-line'>
                <h3> You are not yet onboarded!</h3>
            </div>
        </>
    );
};

export default connect(null, {loadUser}) (User);
