import React from 'react';

const Skills = ({ skill }) => {
    const { title, Skills } = skill;
    return (
        <div>
            <div className="border my-4 p-4">
                <div className="mb-5">
                    <h3 className="mb-4 text-danger">{title}</h3>
                    <div className="row">
                        {
                            Skills.map((skill, index) => {
                                return (
                                    <div className="col mt-3">
                                        <div className="border text-center skill" key={index}>{skill}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;