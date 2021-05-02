import React from 'react';

const Skills = ({ skill }) => {
    const { title, Skills } = skill;
    return (
        <div>
            <div className="border my-4 p-4">
                <div className="mb-5">
                    <h3 className="mb-4 text-info">{title}</h3>
                        {
                            Skills.map((skill, index) => {
                                return (
                                    <h5 className="d-inline-block mt-4">
                                        <span className="text-center bg-secondary py-2 px-3 me-3 text-white" key={index}>{skill}</span>
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