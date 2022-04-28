import React from "react";
import portfolio from "../../../FakeDB/portfolio.json";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio_container py-16">
        <div className="container mx-auto">
          <p className="category_text text_white text-center">
            {portfolio.category}
          </p>
          <h3 className="heading_text text_white sm:w-full md:w-7/12 mx-auto mt-5 text-center">
            {portfolio.heading}
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-9 my-11">
            {portfolio.portfolios.map((portfolio: any, key: number) => (
              <PortfolioCard portfolio={portfolio} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
