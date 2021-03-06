import React from "react";
import portfolio from "../../../FakeDB/projects.json";
import PortfolioCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="portfolio_container py-16">
        <div className="container mx-auto">
          <h3 className="heading_text sm:w-full md:w-7/12 mx-auto mt-5 text-center">
            Check My <span>{portfolio.heading}</span>
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 my-11">
            {portfolio.portfolios.map((portfolio: any, key: number) => (
              <PortfolioCard portfolio={portfolio} id={key + 1} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
