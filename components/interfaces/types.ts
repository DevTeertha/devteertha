import { portfolioI, serviceI, skillsI } from "./interfaces";

export type serviceProps = {
  service: serviceI;
  key: number;
};
export type skillProps = {
  skill: skillsI;
  key: number;
  id: number;
};
export type portfolioProps = {
  portfolio: portfolioI;
  key: number;
  id: number;
};
