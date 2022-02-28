import React, { useState } from 'react';
import "../../assets/styles/modal.css";
import { Form, Button } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const ScheduleMeeting = () => {

    // Initial state of form values
    const initialState = {
        author:"name of loggedUser",
        summary: "",
        startDate: "",
        endDate: "",
        attendees:[]
    };
    //state for form data
    const [formData, setFormData] = useState(initialState);
    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setFormData(state => ({
            ...state,
            [input]: e.target.value
        }));
    };
    // Resets state to initial value on cancel
    const cancel = () =>{
         setFormData(initialState);
    };
    // Sends form data to add employee action and reset state to initial state
    const submitFormData = () =>{
        //schedule meeting(formData);
        setFormData(initialState);
    };
     // Confirms submission of form
    const submit = () => {
        confirmAlert({
        message: 'Are you sure?',
        buttons: [{
                label: 'Yes',
                onClick: () => submitFormData()
            },
            {
                label: 'Cancel'
            }]
        });
    };

    return (
        <div id="meeting-modal" className="modal">
            <div className="modal-content">
                <h4>Schedule Meeting</h4>
                <Form>
                    <div>
                        <label htmlFor="title">Summary:</label>
                        <textarea type="text" 
                                name="summary"
                                value={formData.summary}
                                onChange={handleInputData("summary")} required/>
                    </div>
                    <div>
                        <label htmlFor="startDate">Start Date:</label>
                        <input type="date" 
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleInputData("startDate")} required/>
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date:</label>
                        <input type="date" 
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleInputData("endDate")} required/>
                    </div>
                     <div>
                        <label htmlFor="attendees">Attendees:</label>
                        <input type="text" 
                                name="attendees"
                                value={formData.attendees}
                                onChange={handleInputData("attendees")} required/>
                    </div>
                     <div className='form-footer space-between'>
                        <Button className="modal-close" onClick={cancel} style={{backgroundColor:"red"}}>
                            Cancel
                        </Button>

                        <Button className="modal-close" type="submit" onClick={submit}>
                            Schedule
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default ScheduleMeeting;
