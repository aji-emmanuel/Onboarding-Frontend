import React from 'react';
var spinner = require("../assets/images/spinner.gif");

const Preloader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt='Loading...'/>
        </div>
    );
};

export default Preloader;