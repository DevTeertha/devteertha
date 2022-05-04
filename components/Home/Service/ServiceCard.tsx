import React from "react";
import { serviceProps } from "../../interfaces/types";

const ServiceCard = ({ service }: serviceProps) => {
  return (
    <div data-aos="zoom-in" className="service_card py-5">
      <div>
        <div className="service_icon">
          <img className="w-100" src={service.icon} alt="icon"></img>
        </div>
        <div className="mt-5">
          <h2 className="mb-3">{service?.title}</h2>
          <p>{service?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
