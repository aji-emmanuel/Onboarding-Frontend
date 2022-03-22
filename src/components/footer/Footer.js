import React from 'react';
var accesslogo = require('../../assets/images/logo/access-logo.jfif');

const Footer = () => {
    return (
        <footer>
            <div className='content-width space-out'>
                <div className='about'>
                    <img className="logo" alt="Access logo" src={accesslogo} />
                    <p>
                        Apt HR is an employee onboarding app that is used to streamline and automate human resource management and onboarding processes in an organisation.
                    </p>
                    <div className='social'>
                        <a href='#!' target='_blank' rel="noreferrer">
                            <i aria-label='Facebook' className='fab fa-facebook-f'></i>
                        </a>
                        <a href='#!' target='_blank' rel="noreferrer">
                            <i aria-label='Twitter' className='fab fa-twitter'></i>
                        </a>
                        <a href='#!' target='_blank' rel="noreferrer">
                            <i aria-label='Linkedin' className='fab fa-linkedin-in'></i>
                        </a>
                        <a href='#!' target='_blank' rel="noreferrer">
                            <i aria-label='Youtube' className='fab fa-youtube'></i>
                        </a>
                    </div>
                </div>
                <div className='links'>
                    <article>
                        <div>
                            <h4>Product</h4>
                        </div>
                        <ul>
                            <li>
                                <a href='#!'>Pricing</a>
                            </li>
                            <li>
                                <a href='#!' target='_blank' rel="noreferrer">Knowledge Base</a>
                            </li>
                            <li>
                                <a href='#!' target='_blank' rel="noreferrer" style={{textAlign:'left'}}>API</a>
                            </li>
                        </ul>
                         <div className='mobile'>
                            <a href='#!' target='_blank' rel="noreferrer">
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
                                <a href='#!' target='_blank' rel="noreferrer">Blog</a>
                            </li>
                            <li>
                                <a href='#!'>About Us</a>
                            </li>
                            <li>
                                <a href='#!'>Contact Us</a>
                            </li>
                        </ul>
                         <div className='mobile'>
                            <a href='#!' target='_blank' rel="noreferrer">
                                <div className='img-btn'>
                                    <div aria-label='Access HR in Google Play Store' className='google'></div>
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
               
                <div className='links second-links'>
                    
                    <article>
                        <ul>
                            <li>
                                <a href='#!'>Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </article>
                    <article>
                        <ul>
                            <li>
                                <a href='#!'>Privacy Policy</a>
                            </li>
                        </ul>
                    </article>
                   
                </div>
            </div>
        </footer>
    );
}

export default Footer;
