import React from 'react';
import { Card } from "react-bootstrap";

const Holidays = () => {
    return (
        <Card>
            <Card.Header>
                <Card.Title as="h4">
                    <i className="fas fa-box"></i>
                    ' My Holidays
                </Card.Title>
            </Card.Header>
            <hr></hr>
            <Card.Body>
              <p>No upcoming Holidays.</p>
            </Card.Body>

        </Card>
    );
};

export default Holidays
