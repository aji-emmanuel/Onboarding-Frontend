import React from 'react';
import Events from '../../components/Events';
import MyCalendar from '../../components/MyCalendar';
import { Row, Col } from "react-bootstrap";

const Calendar = () => {
    return (
        <div>
            <Row>
                <Col md="8">
                    <MyCalendar />
                </Col>
                <Col md="4">
                    <Events />
                </Col>
            </Row>
        </div>
    );
};

export default Calendar;
