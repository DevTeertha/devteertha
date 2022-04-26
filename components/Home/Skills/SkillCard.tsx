import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ProgressProvider from "../../CircularProgressBar/ProgressProvider";
import { skillProps } from "../../interfaces/types";
const SkillCard = ({ skill, color }: skillProps) => {
  return (
    <div className="skill_card py-5">
      <ProgressProvider valueStart={0} valueEnd={skill.percentage}>
        {(value: any) => (
          <CircularProgressbarWithChildren
            styles={buildStyles({
              pathColor: `${color}`,
              textColor: `${color}`,
              backgroundColor: "#3e98c7",
            })}
            strokeWidth={4}
            text={value + "%"}
            value={value}
          />
        )}
      </ProgressProvider>
      <h5 className="text-xl text-gray-800 uppercase font-bold text-center mt-5">
        {skill.name}
      </h5>
    </div>
  );
};

export default SkillCard;
