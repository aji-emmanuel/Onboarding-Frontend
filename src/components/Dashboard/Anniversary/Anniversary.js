import React from 'react';
import { Card } from "react-bootstrap";

const Anniversary = () => {
    return (
        <Card>
            <Card.Header>
                <Card.Title as="h4">
                    <i className="fas fa-birthday-cake"></i>
                    ' Anniversaries
                </Card.Title>
            </Card.Header>
            <hr></hr>
            <Card.Body>
              <p>No upcoming Anniversary.</p>

            </Card.Body>

        </Card>
    );
};

export default Anniversary
