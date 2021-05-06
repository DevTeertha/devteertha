import React from 'react';

const Skills = ({ skill }) => {
    const { title, Skills } = skill;
    return (
        <div style={{borderLeft: `0.5em solid rgb(30, 182, 228)`}} className="card-background">
            <div className="border my-4 p-4">
                <div className="mb-5">
                    <h3 className="mb-4 text-info">{title}</h3>
                        {
                            Skills.map((skill, index) => {
                                return (
                                    <h5 className="d-inline-block mt-4">
                                        <span style={{borderRadius: '0.3em'}} className="text-center bg-secondary py-1 px-2 me-2 text-white" key={index}>{skill}</span>
                                    </h5>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    );
};

export default Skills;