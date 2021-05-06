import React from 'react';
import './About.scss'
import { Facebook, Github, Linkedin } from 'react-bootstrap-icons';
import profile from '../../img/Teertha.jpg';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Footer/Footer'
import { AboutEducation, AboutSkills } from '../../Info/Info';
import Skills from './Skills';
import Education from './Education';
import { flipInX, slideInUp, zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const styles = {
    flipInX: {
        animation: 'x 1s',
        animationName: Radium.keyframes(flipInX, 'flipInX')
    },
    slideInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInUp, 'slideInUp')
    },
    zoomIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
}



const About = () => {
    return (
        <div className="other-background">
            <div className="common-background">
                <Navbar></Navbar>
            </div>
            <div className="container py-5">
                <div className="about-header pb-5">
                    <h1 className="text-center text-main fw-bold">About</h1>
                </div>
                <div className="row card-background py-5">
                    <div className="col-md-4">
                        <div className="profile-image text-center">
                            <img style={{ height: '20em', width: '20em' }} className="border" src={profile} alt="" />
                        </div>
                    </div>

                    <div className="col-md-8">
                        <StyleRoot>
                            <div className="profile-text-content py-4" style={styles.flipInX}>
                                <h4>Hello, I'm <br /> <span className="text-main fw-bold">Tertha Dev Sarker</span></h4>
                                <p className="w-100">I'm Front End Developer.
                                But i know backend also.I like to learn new technology.
                                I'm currently studying in department of Computer Science, Ranada Prasad Shaha University.
                        </p>
                            </div>
                        </StyleRoot>
                        <div className="social-media">
                            <h5 className="mb-3">Connect With Me</h5>
                            <div className="social-media-icons">
                                <a className="mx-2" target="_blank" href="https://www.facebook.com/devteertha/">
                                    <Facebook className="icon" size={30}></Facebook>
                                </a>
                                <a className="mx-2" target="_blank" href="https://github.com/DevTeertha">
                                    <Github className="icon" size={30}></Github>
                                </a>
                                <a className="mx-2" target="_blank" href="https://www.linkedin.com/in/devteertha/">
                                    <Linkedin className="icon" size={30}></Linkedin>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <div className="py-3">
                        <div className="py-5">
                            <div className="my-skills-container">
                                <div className="skills-header my-4">
                                    <h1 className="text-center fw-bold">My <span className="text-main">Skills</span></h1>
                                </div>
                                <StyleRoot>
                                    <div style={styles.slideInUp}>
                                        {
                                            AboutSkills.map((skill, index) => <Skills key={index} skill={skill}></Skills>)
                                        }
                                    </div>
                                </StyleRoot>
                            </div>
                        </div>
                        <div className="education py-5">
                            <div className="my-skills-container">
                                <div className="skills-header my-4">
                                    <h1 className="text-center fw-bold ">My <span className="text-main">Education</span></h1>
                                </div>
                                <StyleRoot>
                                    <div className="skills-content" style={styles.zoomIn}>
                                        {
                                            AboutEducation.map((ed, index) => <Education key={index} ed={ed}></Education>)
                                        }
                                    </div>
                                </StyleRoot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;