import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './Projects.scss';


const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}




const ProjectCard = ({ project }) => {
    const { name, description, features, technology, live, client, server, img1, img2, img3 } = project;
    return (
        <div className="mb-5 card-background">
            <StyleRoot>
                <div style={styles.fadeIn} className="row p-4">
                    <div className="col-md-6">
                        <Carousel>
                            <div>
                                <img src={img1} />
                            </div>
                            <div>
                                <img src={img2} />
                            </div>
                            <div>
                                <img src={img3} />
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-md-6 p-3">
                        <h1 className="fw-bold text-main">{name}</h1>
                        <p> {description} </p>
                        <h4 className="text-main">Features: </h4>
                        <ul>
                            {
                                features.a && <li> {features.a} </li>
                            }
                            {
                                features.b && <li> {features.b} </li>
                            }
                            {
                                features.c && <li> {features.c} </li>
                            }
                        </ul>
                        <div>
                            <h4 className="text-main">Technology: </h4>
                            <ul>
                                {technology.map((t,index) => (
                                    <h5 className="d-inline-block mt-4">
                                        <span style={{borderRadius: '0.3em'}} className="text-center bg-secondary py-1 px-2 me-2 text-white" key={index}>{t}</span>
                                    </h5>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {
                                live && <a className="btn btn-outline-info ms-3" target="_blank" href={live}>Live</a>
                            }
                            {
                                client && <a className="btn btn-outline-info ms-3" target="_blank" href={client}>Client</a>
                            }
                            {
                                server && <a className="btn btn-outline-info ms-3" target="_blank" href={server}>Server</a>
                            }
                        </div>
                    </div>
                </div>
            </StyleRoot>
        </div>
    );
};

export default ProjectCard;