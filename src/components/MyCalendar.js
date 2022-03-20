import React, { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Card } from "react-bootstrap";


const MyCalendar = () => {

    const [date, setDate] = useState(new Date());

   const onChange = date => setDate({ date });

    return (

      <Card className="card-tasks">
        <Card.Body>
  
          <Calendar
            onChange={onChange}
            value={date}
          />

        </Card.Body>
      </Card>
    );
};

export default MyCalendar;
