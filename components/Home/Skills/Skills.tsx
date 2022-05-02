import React from "react";
import skills from "../../../FakeDB/skills.json";
import { randomColor } from "../../Custom/random";
import { skillsI } from "../../interfaces/interfaces";
import SkillCard from "./SkillCard";

const Skills = () => {
  const colorArr: string[] = [
    "#6f34fe",
    "#3f396d",
    "#fca61f",
    "#56cbbd",
    "#07003b",
    "#dc2626",
    "#ea580c",
    "#0284c7",
    "#db2777",
    "#6366f",
  ];
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
              const color = randomColor(colorArr);
              return <SkillCard skill={skill} key={key} color={color} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
