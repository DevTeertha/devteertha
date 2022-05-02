import React from "react";
import { skillProps } from "../../interfaces/types";
const SkillCard = ({ skill, id }: skillProps) => {
  return (
    <div
      data-aos={id % 2 === 0 ? "flip-right" : "flip-left"}
      className="skill_card py-5"
    >
      <img src={skill.icon} />
      <h5 className="text-base text-gray-800 uppercase font-bold text-center mt-5">
        {skill.name}
      </h5>
    </div>
  );
};

export default SkillCard;
