import React from 'react';
import { Card } from "react-bootstrap";

const Events = () => {
    return (
        <Card>
            <Card.Header>
                <Card.Title as="h4">
                    <i className="fas fa-calendar-plus"></i>
                    Events
                </Card.Title>
            </Card.Header>
            <hr></hr>
            <Card.Body>
              <p>No upcoming Events.</p>

            </Card.Body>
        </Card>
    )
}

export default Events;
