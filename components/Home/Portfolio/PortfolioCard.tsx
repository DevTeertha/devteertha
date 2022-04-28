import React from "react";
import { portfolioProps } from "../../interfaces/types";

const PortfolioCard = ({ portfolio }: portfolioProps) => {
  return (
    <div className="portfolio_card">
      <img src={portfolio.images[0]} alt={portfolio.images[0]} />
      <div className="portfolio_card_overlay">
        <div className="portfolio_card_overlay_content">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h6 className="portfolio_card_overlay_heading">
                {portfolio.name}
              </h6>
              <p className="portfolio_card_overlay_p">
                {portfolio.description}
              </p>
            </div>
            <div>
              <div className="portfolio_card_overlay_icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
