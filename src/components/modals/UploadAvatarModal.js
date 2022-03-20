import React, { useState, useRef } from 'react';
import "../../assets/styles/profile.css";
import { Card, Button } from "react-bootstrap";
import { updateAvatar } from '../../appStore/actions/UserAction';
import { confirmAlert } from 'react-confirm-alert';
import { connect } from "react-redux";
import 'react-confirm-alert/src/react-confirm-alert.css';


const UploadAvatarModal = ({ updateAvatar, setShow }) => {

    const inputRef = useRef();
    const uploadedImageRef = useRef();
    //state for image
    const [Image, setImage] = useState(null);
    if(Image){
        uploadedImageRef.current.src = URL.createObjectURL(Image);
    };
    // Resets image to initial value on cancel
    const cancel = () =>{
        setImage(null);
        setShow(false);
    };
    // Sends image to updateAvatar action on submit
    const submitImage = () =>{
        let form_data = new FormData();
        form_data.append('Image', Image);
        updateAvatar(form_data);
    };
     // Confirms submission of image
    const submit = () => {
        confirmAlert({
        message: 'Are you sure?',
        buttons: [{
                label: 'Yes',
                onClick: () => submitImage()
            },
            {
                label: 'Cancel'
            }]
        });
    };

    return (
        <div className='center-line'>
            <Card>
                <h4 className='center'>Upload profile pic</h4>
                   <div className='select-image'>
                        <div className='selected-image'
                            onClick={() => inputRef.current.click()}>

                            <img className='image-preview' alt="..." ref={uploadedImageRef} />
                        </div>
                        Click to select image
                        
                        <input style={{display:"none"}}
                                type="file"
                                name="Image"
                                ref={inputRef}
                                accept="image/png, image/jpeg"
                                onChange={(event) => {
                                    setImage(event.target.files[0]);
                                }}
                        />
                    </div>

                    <div className='space-between upload'>
                        <Button onClick={cancel} style={{backgroundColor:"red"}}>
                            Cancel
                        </Button>

                        <Button type="submit" onClick={submit} disabled={!Image?true:false}>
                            Upload
                        </Button>
                    </div>
            </Card>
        </div>
    );
};

export default connect(null, {updateAvatar}) (UploadAvatarModal);