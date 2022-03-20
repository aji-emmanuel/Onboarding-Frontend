import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NavBar from "../../components/navbar/NavBar";
<<<<<<< HEAD
import { loadUser } from '../../appStore/actions/AuthAction';
=======
import { loadUser } from '../../redux/actions/AuthAction';
>>>>>>> 109b059a944d55d9116d83cabd30631f6179f8f5
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
