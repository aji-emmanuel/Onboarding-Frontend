import React, { useState } from 'react';
import "../../assets/styles/modal.css";
import { Form, Button } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const AddAnnoucement = () => {
    // Initial state of form values
    const initialState = {
        author:"name of loggedUser",
        title: "",
        body: "",
        notify: true
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
        //addAnnouncement(formData);
        setFormData(initialState);
    };
     // Confirms submission of form
    const submit = () => {
        confirmAlert({
        message: 'Are you sure?',
        buttons: [{
                label: 'publish',
                onClick: () => submitFormData()
            },
            {
                label: 'cancel',
                onClick: () => cancel()
            }]
        });
    };

    return (
        <div id="add-annoucement-modal" className="modal">
            <div className="modal-content">
                <h4>Add Announcement</h4>
                <Form>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" 
                                name="title"
                                value={formData.title}
                                onChange={handleInputData("title")} required/>
                    </div>

                    <div>
                        <label htmlFor="body">Body</label>
                        <textarea id="body"  data-length="200" required></textarea>
                    </div>

                    <div className='form-footer space-between'>
                        <Button className="modal-close" onClick={cancel} style={{backgroundColor:"red"}}>
                            Cancel
                        </Button>

                        <Button className="modal-close" type="submit" onClick={submit}>
                            Publish
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddAnnoucement;
