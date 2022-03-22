import React from 'react';
import "./footer-style.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='space-out'>
                <div className='about'>
                    <h4>
                        Apt HR
                    </h4>
                    <p>
                        This is an employee onboarding app that is used to streamline and automate human
                         resource management and onboarding processes in an organisation.
                    </p>
                    <div className='social'>
                        <a href='#!' rel="noreferrer">
                            <i aria-label='Facebook' className='fab fa-facebook-f'></i>
                        </a>
                        <a href='#!' rel="noreferrer">
                            <i aria-label='Twitter' className='fab fa-twitter'></i>
                        </a>
                        <a href='#!' rel="noreferrer">
                            <i aria-label='Linkedin' className='fab fa-linkedin-in'></i>
                        </a>
                        <a href='#!' rel="noreferrer">
                            <i aria-label='Youtube' className='fab fa-youtube'></i>
                        </a>
                    </div>
                </div>
                <div className='links'>
                    <article>
                        <div>
                            <h4>Links</h4>
                        </div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Sign In</Link>
                            </li>
                            <li>
                                <a href='#!' rel="noreferrer" style={{textAlign:'left'}}>Privacy Policy</a>
                            </li>
                        </ul>
                         <div className='mobile'>
                            <a href='#!' rel="noreferrer">
                                <div className='img-btn'>
                                    <div aria-label='Access HR in Apple Store' className='apple'></div>
                                </div>
                            </a>
                        </div>
                    </article>
                    <article>
                        <div>
                            <h4>Company</h4>
                        </div>
                        <ul>
                            <li>
                                <a href='#!' rel="noreferrer">Blog</a>
                            </li>
                            <li>
                                <a href='#!'>About Us</a>
                            </li>
                            <li>
                                <a href='#!'>Contact Us</a>
                            </li>
                        </ul>
                         <div className='mobile'>
                            <a href='#!' rel="noreferrer">
                                <div className='img-btn'>
                                    <div aria-label='Team-Lion HR in Google Play Store' className='google'></div>
                                </div>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
            
            <div className='content-width space-out'>
                 <p className='copyright'>
                    © Copyright Apt HR,
                    2021
                </p>
            </div>
        </footer>
    );
}

export default Footer;
