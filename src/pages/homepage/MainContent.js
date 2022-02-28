import React from 'react'
import Header from "./Header";
import stepone from "../../assets/images/steps/one.svg"
import steptwo from "../../assets/images/steps/two.svg"
import stepthree from "../../assets/images/steps/three.svg"
import dashboardscreen from "../../assets/images/dashboard-screen.png"
import mobilepic from "../../assets/images/mobile-screen.png"
var homepageimage = require("../../assets/images/homepage-image.png");
var Wanda = require("../../assets/images/faces/Wando.png");
var Anna = require("../../assets/images/faces/Anna.png");
var Alina = require("../../assets/images/faces/Alina.jpg");


const MainContent = () => {
    return (
        <>
            <section className='intro'>
                <Header />
                <div className='content-width'>

                    <section className='home-intro'>
                        <article>
                            <h1> We create amazing work-life experiences for our employees.</h1>
                        </article>

                        <div className='main-image-wrap'>
                            <img className="main-image" alt="Before and after of using an automated HR system" src={homepageimage} />
                        </div>
                    </section>

                </div>
            </section>

            <div className='productive-content-block'>
                <div className='triangle-hack'>
                    <div></div>
                    <div></div>
                </div>
                <div className='content-width'>
                    <article>
                        <header>
                            <h2>Get productive instantly with a few simple steps</h2>
                        </header>
                    </article>
                    <div className='steps'>
                        <div className='step animated3x-delayed'>
                            <div className='img ' style={{backgroundImage:`url(${stepone})`}}></div>
                            <h3>Onboard your employees</h3>
                            <p>With a few clicks simply upload your employee database to your new online staff directory</p>
                        </div>
                        <div className='step animated3x-delayed'>
                            <div className='img ' style={{backgroundImage:`url(${steptwo})`}}></div>
                            <h3>Automate your HR process</h3>
                            <p>Never worry about keeping track of random time-off and shift change requests</p>
                        </div>
                        <div className='step animated3x-delayed'>
                            <div className='img ' style={{backgroundImage:`url(${stepthree})`}}></div>
                                <h3>Get meaningful insights</h3>
                                <p>Use filters to create custom reports and data rich company graphs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='complete-content-block skew-top'>
                    <div className='bg1'></div>
                    <div className='bg2'></div>
                    <div className='content-width'>
                        <header>
                            <h2>Complete HR solution</h2>
                        </header>
                        <div className='browser'>
                            <img className="browser" alt="Screenshot of the Sage HR dashboard on desktop" src={dashboardscreen} />
                            <div className='mobile'>
                                <img className="mobile" alt="A mobile phone with the Sage HR mobile app" src={mobilepic} />
                                <div className='cube'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='love-block skew-top-reverse-inside skew-bottom-reverse-inside smoke-bottom'>

                    <div className='content-width'>
                        <h4 id="center">FEATURES</h4>
                        <div className='features'>

                            <a className="item" href="#!"><div className='background'></div>
                                <div className='f'>
                                    <div className='icon-wrap'>
                                        <div className='icon'>
                                            <i className='fal fa-umbrella-beach'></i>
                                        </div>
                                    </div>
                                    <div className='text-wrap'>
                                        <h3>Leave management</h3>
                                        <p>Handle time off approvals digitally</p>
                                        <div className='link'>
                                            Leave management
                                            <i className='fal fa-long-arrow-right'></i>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="item" href="#!"><div className='background'></div>
                                <div className='f'>
                                    <div className='icon-wrap'>
                                        <div className='icon'>
                                            <i className='far fa-stopwatch'></i>
                                        </div>
                                    </div>
                                    <div className='text-wrap'>
                                        <h3>Timesheets</h3>
                                        <p>A fast, easy way to track overtime</p>
                                        <div className='link'>
                                            Timesheets
                                            <i className='fal fa-long-arrow-right'></i>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="item" href="#!"><div className='background'></div>
                                <div className='f'>
                                    <div className='icon-wrap'>
                                        <div className='icon'>
                                            <i className='fal fa-calendar-check'></i>
                                        </div>
                                    </div>
                                    <div className='text-wrap'>
                                        <h3>Shift scheduling</h3>
                                        <p>Flexible &amp; functional shift planning</p>
                                        <div className='link'>
                                            Shift scheduling
                                            <i className='fal fa-long-arrow-right'></i>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="item" href="#!"><div className='background'></div>
                                <div className='f'>
                                    <div className='icon-wrap'>
                                        <div className='icon'>
                                            <i className='far fa-chart-bar'></i>
                                        </div>
                                    </div>
                                    <div className='text-wrap'>
                                        <h3>Reporting</h3>
                                        <p>Instant, interactive HR reports</p>
                                        <div className='link'>
                                            Reporting
                                            <i className='fal fa-long-arrow-right'></i>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="item" href="#!"><div className='background'></div>
                                <div className='f'>
                                    <div className='icon-wrap'>
                                        <div className='icon'>
                                            <i className='far fa-mobile-android'></i>
                                        </div>
                                    </div>
                                    <div className='text-wrap'>
                                        <h3>Mobile</h3>
                                        <p>HR on-the-go with mobile apps</p>
                                        <div className='link'>
                                            Mobile
                                            <i className='fal fa-long-arrow-right'></i>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a className="item" href="#!"><div className='background'></div>
                                <div className='f'>
                                    <div className='icon-wrap'>
                                        <div className='icon'>
                                            <i className='far fa-clipboard-check'></i>
                                        </div>
                                    </div>
                                    <div className='text-wrap'>
                                        <h3>Onboarding</h3>
                                        <p>Organised onboarding process.</p>
                                        <div className='link'>
                                            Onboarding
                                            <i className='fal fa-long-arrow-right'></i>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>


                    <div className='content-width'>
                        <section className='testimonials'>
                            <header>
                                <h2>OUR EMPLOYEES LOVE US</h2>
                            </header>
                           
                            <div className='relative'>
                                <div className='list'>
                                    <div className='testimonial-block'>
                                        <div className='image'>
                                            <img alt="Alina Roščina" src={Alina} />
                                        </div>
                                        <div className='full-name'>
                                            Alina Roščina
                                        </div>
                                        <div className='position'>
                                            VP Human Resources
                                        </div>
                                        <p>
                                            First time I was impressed how powerful it is to automate our onboadring process, when our branch crew members provided 11,000 feedbacks to each other in just two weeks!
                                        </p>
                                        <a className="link" href="#!">
                                            <p>Read interview <i className="fa fa-long-arrow-right"></i></p>
                                        </a>
                                    </div>
                                    <div className='testimonial-block'>
                                        <div className='image'>
                                            <img alt="Anna Jagric" src={Anna} />
                                        </div>
                                        <div className='full-name'>
                                            Anna Jagric
                                        </div>
                                        <div className='position'>
                                            Director of Operations
                                        </div>
                                        <p>
                                            What I love about this firm's automated onboarding process is that you can add on modules as you grow.
                                        </p>
                                        <a className="link" href="#!">
                                            <p>Read interview <i className="fa fa-long-arrow-right"></i></p>
                                        </a>
                                    </div>
                                    <div className='testimonial-block'>
                                        <div className='image'>
                                            <img alt="Wanda Barquero" src={Wanda} />
                                        </div>
                                        <div className='full-name'>
                                            Wanda Barquero
                                        </div>
                                        <div className='position'>
                                             Engineering Lead
                                        </div>
                                        <p>
                                            Before automating our onboarding process, it was so complicated — you had to upload all sorts of information and it was a mess in the end.
                                        </p>
                                        <a className="link" href="#!">
                                            <p>Read interview <i className="fa fa-long-arrow-right"></i></p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>

            <div className='clients-block'>
                <div className='content-width'>
                   
                </div>
            </div>

            <div className='skew-bottom-inside skew-top-inside smoke-bottom smoke-top start-trial-block'>
                <article className='trial-block-width'>
                   

                </article>
            </div>

            <div className='smoke-bg for-partners-block'>
                <div className='partners-block'>
                    <div className='content-width'>
                        <article>
                            <header>
                                <h3>Trusted Human Resource Partners</h3>
                            </header>
                            <div className='marketplaces'>
                                <div aria-label='G2 4.5 stars' className='stars stars-32'></div>
                                <div aria-label='Trustpilot 4.5 stars' className='stars stars-33'></div>
                                <div aria-label='GetApp 4.5 stars' className='stars stars-34'></div>
                                <div aria-label='Capterra 4.5 stars' className='stars stars-35'></div>
                                <div aria-label='Crozdesk 4.5 stars' className='stars stars-36'></div>
                                <div aria-label='Software Advice 4.5 stars' className='stars stars-37'></div>
                            </div>
                            
                        </article>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainContent
