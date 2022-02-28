import React, { useState, useEffect } from 'react';
import "../../assets/styles/profile.css";
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Swal from 'sweetalert2';
import Preloader from "../../components/Preloader";
import { sendMail, sendSlack, reset } from '../../redux/actions/MessageAction';

const Messages = ({ success, messageError, sendMail, sendSlack, reset }) => {

    useEffect(()=>{
        if(success){showsuccess()}
        if(messageError){showError()}
    });
    // State for the active tab
    const [active, setActive] = useState("mail");
    const [loading, setLoading] = useState(false);
    // Sets the active tab
    const tabClick = (prop) => {
        setActive(prop);
    };
    // State for sending mail
    const initialMail = {toEmail:"", ccEmail:"", bccEmail:"", subject:"", body:"", attachments:[""]};
    const [mail, setMail] = useState(initialMail);
    const handleMail = input => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setMail(prevState => ({
            ...prevState,
            [input]: e.target.value
        }));
    };

    // State for sending message to slack channel
    const initialMessage = {channel:"", text:""};
    const [slack, setSlack] = useState(initialMessage);
    const handleSlack = input => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setSlack(prevState => ({
            ...prevState,
            [input]: e.target.value
        }));
    };

    // Form submit functions
    const submitMail = (e) =>{
        e.preventDefault();
        setLoading(true);
        sendMail(mail);
    };
    const submitSlackMessage = (e) =>{
        e.preventDefault();
        setLoading(true);
        sendSlack(slack);
    };
    // ------------------------
    // Shows alert for successful or unsuccessful message delivery
    const showsuccess = () =>{
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Message sent successfully!',
        });
        reset();
        setMail(initialMail);
        setSlack(initialMessage);
    };
    const showError = () => {
        setLoading(false);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Message was not sent!',
        });
        reset();
    };

    let classes = "profile-nav-button"
    let activeClasses = "profile-nav-button active"

    return (
        <div>
            {loading && <Preloader />}
            <div className="profile-nav" style={{justifyContent:"space-between"}}>
                <button className={active === "mail" ? activeClasses : classes}
                        onClick={() => tabClick("mail")}>

                        <i className="fas fa-envelope" />
                        Send Mail
                </button>
                <button className={active === "slack" ? activeClasses : classes}
                            onClick={() => tabClick("slack")}>

                        <i className="fab fa-slack" />
                        Slack Message
                </button>
            </div>

            { active==="mail" ? 
                (<Card className='message-card'>
                    <div className='header'>
                        <h4>New Email Message</h4>
                    </div>
                    <form onSubmit={submitMail}>
                        <div>
                            <input type="email" 
                                    name="toEmail"
                                    placeholder='To:'
                                    value={mail.toEmail} 
                                    onChange={handleMail("toEmail")}  required/>
                        </div>
                        <div>
                            <input type="email" 
                                    name="ccEmail"
                                    placeholder='Cc:'
                                    value={mail.ccEmail}
                                    onChange={handleMail("ccEmail")} />
                        </div>
                        <div>
                            <input type="email" 
                                    name="bccEmail"
                                    placeholder='Bcc:'
                                    value={mail.bccEmail}
                                    onChange={handleMail("bccEmail")} />
                        </div>
                        <div>
                            <input type="text" 
                                    name="subject"
                                    placeholder='Subject:'
                                    value={mail.subject}
                                    onChange={handleMail("subject")} required/>
                        </div>
                        <div>
                            <textarea type="text" 
                                    name="body"
                                    placeholder='Body:'
                                    value={mail.body}
                                    onChange={handleMail("body")} required/>
                        </div>
                         <div className='space-between'>
                            <button className='btn-custom send' type='submit'>
                                Send
                            </button>
                            <i className="fas fa-trash-alt" onClick={()=>setMail(initialMail)}></i>
                        </div>
                    </form>
                </Card>)
            :
                (<Card className='message-card'>
                    <div className='header'>
                        <h4>New Slack Message</h4>
                    </div>
                    <form onSubmit={submitSlackMessage}>
                        <div>
                            <label htmlFor="channel">Channel Name:</label>
                            <input type="text" 
                                    name="channel"
                                    placeholder='Channel:'
                                    value={slack.channel}
                                    onChange={handleSlack("channel")} required/>
                        </div>
                        <div>
                            <label htmlFor="text">Message:</label>
                            <textarea type="text" 
                                    name="text"
                                    placeholder='Message:'
                                    value={slack.text}
                                    onChange={handleSlack("text")} required/>
                        </div>
                        <div className='space-between'>
                            <button className='btn-custom send' type='submit'>
                                Send
                            </button>
                            <i className="fas fa-trash-alt" onClick={()=>setSlack(initialMessage)}></i>
                        </div>
                    </form>
                </Card>)
            }
       </div>
    );
};

Messages.propTypes = {
    success: PropTypes.bool.isRequired,
    sendMail: PropTypes.func.isRequired,
    sendSlack: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    success: state.message.success,
    messageError: state.message.messageError
});

export default connect(mapStateToProps, {sendMail, sendSlack, reset}) (Messages);
