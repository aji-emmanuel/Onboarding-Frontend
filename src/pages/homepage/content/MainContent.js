import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import "./content-style.css"
import stepone from "../../../assets/images/steps/one.svg"
import steptwo from "../../../assets/images/steps/two.svg"
import stepthree from "../../../assets/images/steps/three.svg"
const Wanda = require("../../../assets/images/faces/Wando.png");
const Anna = require("../../../assets/images/faces/Anna.png");
const Alina = require("../../../assets/images/faces/Alina.jpg");
const welcome = require("../../../assets/images/welcome.jpg");
const orange = require("../../../assets/images/orange.png")


const MainContent = () => {

    useEffect(()=>{
        AOS.init({
            duration : 1000
        });
    }, []);

    return (

        <>
            <section className='intro'>
                <article>
                    <h4> Welcome to Apt HR! Creating amazing work-life experiences for our employees.</h4>
                </article>
                <div class="intro-waves">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <section className='productive-section'>
                <header>
                    <h4>We get productive instantly with a few simple steps</h4>
                </header>
                <div className='steps'>
                    <div className='step' data-aos="fade-left">
                        <div className='img ' style={{backgroundImage:`url(${stepone})`}}></div>
                        <h3>Onboard our employees</h3>
                        <p>With a few clicks, we're able to upload our employee database to our online staff directory.</p>
                    </div>
                    <div className='step' data-aos="fade-up">
                        <div className='img ' style={{backgroundImage:`url(${steptwo})`}}></div>
                        <h3>Automate our HR process</h3>
                        <p>We never worry about keeping track of random time-off and shift change requests.</p>
                    </div>
                    <div className='step' data-aos="fade-left">
                        <div className='img ' style={{backgroundImage:`url(${stepthree})`}}></div>
                        <h3>Get meaningful insights</h3>
                        <p>We use filters to create custom reports and data rich company graphs.</p>
                    </div>
                </div>
            </section>

            <section class="home-apt">
                <div class="apt-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path fill="#FFFFFF" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path fill="#FFFFFF" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path fill="#FFFFFF" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>

                    <div class="apt-content">
                        <div class="apt-text">
                            <h3>This is HR software with heart.</h3>
                            <p>
                                Our HR software collects and organizes all the information you gather 
                                throughout the employee life cycle, then helps you use it to achieve 
                                great things. Whether you’re hiring, onboarding, preparing compensation, 
                                or building culture, BambooHR gives you the time and insights to focus 
                                on your most important asset—your people.</p>
                        </div>
                        <div>
                            <img class="apt-img" src={orange} alt="orange bubble"/>
                        </div>
                </div>
            </section>

            <section class="home-onboarding">
                <div class="section-title">
                    <h2>Onboarding</h2>
                </div>
                <div class="section-content">
                    <div className='image-content' data-aos="fade-left">
                        <img class="onboarding-img" src={welcome} alt="Welcome" />
                    </div>
                    <div>
                        <p class="section-text" data-aos="fade-right">
                            After our interview, the onboarding process is the first real impression that we
                                make on our new employees. AptHR makes us an onboarding all-star, adding personality and 
                                personal touches while making quick work of necessary forms and formalities. 
                                With fewer compliance concerns and the confidence of onboarding checklists, we spend 
                                less time behind a screen and more time creating amazing first days for our talented hires.
                        </p>
                    </div>
                </div>
                <div class="testimonial-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <section className='testimonials'>
           
                <header>
                    <h4>OUR EMPLOYEES LOVES US</h4>
                </header>
                
                <div className='list'>
                    <div className='testimonial' data-aos="fade-up">
                        <img alt="Alina Roščina" src={Alina} />
                        <div className='full-name'>
                            Alina Roščina
                        </div>
                        <div className='position'>
                            VP Human Resources
                        </div>
                        <p>
                            First time I was impressed how powerful it is to automate our onboadring process, when our branch crew members provided 11,000 feedbacks to each other in just two weeks!
                        </p>
                    </div>
                    <div className='testimonial' data-aos="fade-up">
                        <img alt="Anna Jagric" src={Anna} />
                        <div className='full-name'>
                            Anna Jagric
                        </div>
                        <div className='position'>
                            Director of Operations
                        </div>
                        <p>
                            What I love about this firm's automated onboarding process is that you can add on modules as you grow.
                        </p>
                    </div>
                    <div className='testimonial' data-aos="fade-up">
                        <img alt="Wanda Barquero" src={Wanda} />
                        <div className='full-name'>
                            Wanda Barquero
                        </div>
                        <div className='position'>
                                Engineering Lead
                        </div>
                        <p>
                            Before automating our onboarding process, it was so complicated — you had to upload all sorts of information and it was a mess in the end.
                        </p>
                    </div>
                    <div className='testimonial' data-aos="fade-up">
                        <img alt="Anna Jagric" src={Anna} />
                        <div className='full-name'>
                            Anna Jagric
                        </div>
                        <div className='position'>
                            Director of Operations
                        </div>
                        <p>
                            What I love about this firm's automated onboarding process is that you can add on modules as you grow.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainContent;
