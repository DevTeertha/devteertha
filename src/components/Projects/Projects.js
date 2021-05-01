import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { ProjectDetails } from '../../Info/Info'
import ProjectCard from './ProjectCard';
import Footer from '../Footer/Footer'
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container py-5">
                <div className="project-header">
                    <h1 className="text-center fw-bold">My <span className="text-main">Projects</span></h1>
                </div>
                <div className="mt-5">
                    {
                        ProjectDetails.map((project , index)=><ProjectCard project={project} key={index}></ProjectCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;