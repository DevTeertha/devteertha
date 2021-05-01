import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { FileEarmarkPersonFill , Arrow90degRight } from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import myProfile from '../../../img/myProfile.jpg'

const Header = () => {
    return (
        <div>
            <div className="container header-container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-7">
                        <div className="header-content-container">
                            <div className="header-content">
                                <h1>
                                    Hello, <br />
                                    It's Me <span className="text-main">Tertha Dev Sarker</span>
                                </h1>
                                <h4>
                                    <Typewriter
                                        options={{
                                            strings: ['Web Developer', 'Programmer', 'Software Engineer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h4>
                                <p>I'm a JavaScript Developer.</p>
                                <div>
                                    <Link class="btn btn-primary me-3" to="/contact"> <Arrow90degRight/> Hire Me</Link>
                                    <a class="btn common-background text-white" target="_blank" href="https://drive.google.com/file/d/1mVxbsUsCWGqJW0Nh5fj1sPqmJJWkuqGg/view?usp=sharing"><FileEarmarkPersonFill /> Resume</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <div className="profileImage ps-5 py-5">
                            <img className="w-100 text-middle" src={myProfile} alt="DevTeertha" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;