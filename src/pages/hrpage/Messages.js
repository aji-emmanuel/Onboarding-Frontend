import React, { useState, useEffect } from 'react';
import "../../assets/styles/profile.css";
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Swal from 'sweetalert2';
import Preloader from "../../components/Preloader";
<<<<<<< HEAD
import { sendMail, mailEmployees, mailUsers, sendSlack, reset } from '../../appStore/actions/MessageAction';
=======
import { sendMail, mailEmployees, mailUsers, sendSlack, reset } from '../../redux/actions/MessageAction';
>>>>>>> 109b059a944d55d9116d83cabd30631f6179f8f5

const Messages = ({ success, messageError, sendMail, mailEmployees, mailUsers, sendSlack, reset }) => {

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
    // State for sending bulk mail to employees
    const initialEmployeeMail = {ccEmail:"", bccEmail:"", subject:"", body:""};
    const [employeeMail, setEmployeeMail] = useState(initialEmployeeMail);
    const handleEmployeeMail = input => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setEmployeeMail(prevState => ({
            ...prevState,
            [input]: e.target.value
        }));
    };

    // State for sending bulk mail to applicants
    const initialUsersMail = {ccEmail:"", bccEmail:"", subject:"", body:""};
    const [userMail, setUserMail] = useState(initialUsersMail);
    const handleUserMail = input => e => {
        //updating for data state taking previous state and then adding new value to create new object
        setUserMail(prevState => ({
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
    const submitEmployeeMail = (e) =>{
        e.preventDefault();
        setLoading(true);
        mailEmployees(employeeMail);
    };
    const submitUserMail = (e) =>{
        e.preventDefault();
        setLoading(true);
        mailUsers(userMail);
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
        setEmployeeMail(initialEmployeeMail);
        setUserMail(initialUsersMail);
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
                <button className={active === "employees" ? activeClasses : classes}
                            onClick={() => tabClick("employees")}>

                        <i className="fas fa-mail-bulk" />
                        Mail Employees
                </button>
                <button className={active === "users" ? activeClasses : classes}
                            onClick={() => tabClick("users")}>

                        <i className="far fa-mail-bulk" />
                        Mail Users
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
            : active==="employees" ?
                (<Card className='message-card'>
                    <div className='header'>
                        <h4>Mail Employees</h4>
                    </div>
                    <form onSubmit={submitEmployeeMail}>
                        <div>
                            <input type="email" 
                                    name="ccEmail"
                                    placeholder='Cc:'
                                    value={employeeMail.ccEmail}
                                    onChange={handleEmployeeMail("ccEmail")} />
                        </div>

                        <div>
                            <input type="email" 
                                    name="bccEmail"
                                    placeholder='Bcc:'
                                    value={employeeMail.bccEmail}
                                    onChange={handleEmployeeMail("bccEmail")} />
                        </div>

                        <div>
                            <input type="text" 
                                    name="subject"
                                    placeholder='Subject:'
                                    value={employeeMail.subject}
                                    onChange={handleEmployeeMail("subject")} required/>
                        </div>

                        <div>
                            <textarea type="text" 
                                    name="body"
                                    placeholder='Body:'
                                    value={employeeMail.body}
                                    onChange={handleEmployeeMail("body")} required/>
                        </div>
                         <div className='space-between'>
                            <button className='btn-custom send' type='submit'>
                                Send
                            </button>
                            <i className="fas fa-trash-alt" onClick={()=>setEmployeeMail(initialEmployeeMail)}></i>
                        </div>
                    </form>
                </Card>)
            : active==="users" ?
                (<Card className='message-card'>
                    <div className='header'>
                        <h4>Mail Applicants</h4>
                    </div>
                    <form onSubmit={submitUserMail}>
                        <div>
                            <input type="email" 
                                    name="ccEmail"
                                    placeholder='Cc:'
                                    value={userMail.ccEmail}
                                    onChange={handleUserMail("ccEmail")} />
                        </div>

                        <div>
                            <input type="email" 
                                    name="bccEmail"
                                    placeholder='Bcc:'
                                    value={userMail.bccEmail}
                                    onChange={handleUserMail("bccEmail")} />
                        </div>

                        <div>
                            <input type="text" 
                                    name="subject"
                                    placeholder='Subject:'
                                    value={userMail.subject}
                                    onChange={handleUserMail("subject")} required/>
                        </div>

                        <div>
                            <textarea type="text" 
                                    name="body"
                                    placeholder='Body:'
                                    value={userMail.body}
                                    onChange={handleUserMail("body")} required/>
                        </div>
                         <div className='space-between'>
                            <button className='btn-custom send' type='submit'>
                                Send
                            </button>
                            <i className="fas fa-trash-alt" onClick={()=>setUserMail(initialUsersMail)}></i>
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
    mailEmployees: PropTypes.func.isRequired,
    mailUsers: PropTypes.func.isRequired,
    sendSlack: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    success: state.message.success,
    messageError: state.message.messageError
});

export default connect(mapStateToProps, {sendMail, mailEmployees, mailUsers, sendSlack, reset}) (Messages);
