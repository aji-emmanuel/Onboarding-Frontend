import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import NoContent from '../../components/announcement/NoContent';

const Anouncements = () => {

    useEffect(()=>{
        // Initailizes Materialize javascript
        M.AutoInit();
    });

    return (
        <>
            <NoContent />
        </>
    );
};

export default Anouncements;
