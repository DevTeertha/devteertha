import React from 'react';

const Education = ({ed}) => {
    const { title , institute , degree , year } = ed;
    return (
        <div style={{borderLeft: `0.5em solid rgb(30, 182, 228)`}} className="card-background">
            <div className="border my-4 p-4">
                <div className="mb-5">
                    <h3 className="text-info fw-bold">{title}</h3>
                    <h4>{institute}</h4>
                    <h5>{degree}</h5>
                    <h6>({year})</h6>
                </div>
            </div>
        </div>
    );
};

export default Education;