import React from 'react';
import {Button} from "react-bootstrap";

const MyButton = ({icon, text, href}) => {
    return (
        <Button className="btn-custom modal-trigger" href={href} 
                onClick={(e) => e.preventDefault()}
               >
            <i className={icon}></i>
            {text}
        </Button>
    );
};

export default MyButton
