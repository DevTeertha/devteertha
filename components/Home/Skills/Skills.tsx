import React from "react";
import skills from "../../../FakeDB/skills.json";
import { skillsI } from "../../interfaces/interfaces";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="py-16">
      <div className="skills_container">
        <div className="container mx-auto">
          <p className="category_text text-center">{skills.category}</p>
          <h3 className="heading_text sm:w-full md:w-7/12 mx-auto mt-5 text-center">
            {skills.heading}
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-9 my-11">
            {skills.skills.map((skill: skillsI, key: number) => {
              return <SkillCard skill={skill} id={key + 1} key={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
