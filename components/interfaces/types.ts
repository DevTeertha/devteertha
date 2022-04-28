import { portfolioI, serviceI, skillsI } from "./interfaces";

export type serviceProps = {
  service: serviceI;
  key: number;
};
export type skillProps = {
  skill: skillsI;
  key: number;
  color: string;
};
export type portfolioProps = {
  portfolio: portfolioI;
  key: number;
};
