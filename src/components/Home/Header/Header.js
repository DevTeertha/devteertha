import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { FileEarmarkPersonFill, Arrow90degRight } from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import myProfile from '../../../img/myProfile.jpg';
import {ProfileDetails} from './../../../Info/Info'
import { fadeInRight , fadeInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const styles = {
    fadeInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
    },
    fadeInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
}


const Header = () => {
    const {name,description} = ProfileDetails;
    return (
        <div style={{height: '100%'}} className="d-flex align-items-center">
            <div className="container header-container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-7">
                        <div className="header-content-container">
                            <StyleRoot>
                            <div className="header-content text-white" style={styles.fadeInLeft}>
                                <h1>
                                    Hello, <br />
                                    It's Me <span className="text-danger fw-bold"> {name} </span>
                                </h1>
                                <h4 className="text-white">
                                    <Typewriter
                                        options={{
                                            strings: ['Web Developer', 'Programmer', 'Software Engineer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h4>
                                <p>{description}</p>
                                <div>
                                    <Link class="btn btn-danger me-3" to="/contact"> <Arrow90degRight /> Hire Me</Link>
                                    <a class="btn btn-success" target="_blank" href="https://drive.google.com/file/d/1mVxbsUsCWGqJW0Nh5fj1sPqmJJWkuqGg/view?usp=sharing"><FileEarmarkPersonFill /> Resume</a>
                                </div>
                            </div>
                            </StyleRoot>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <StyleRoot>
                            <div className="profileImage ps-5 py-5" style={styles.fadeInRight}>
                                <img className="profileImg w-100 text-middle" src={myProfile} alt="DevTeertha" />
                            </div>
                        </StyleRoot>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;