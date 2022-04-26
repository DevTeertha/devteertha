import React from "react";
import { serviceProps } from "../../interfaces/types";

const ServiceCard = ({ service }: serviceProps) => {
  return (
    <div className="service_card py-5">
      <div className="flex items-center justify-between">
        <div className="service_icon">
          <img src={service.icon} alt="icon"></img>
        </div>
        <div className="ml-7">
          <h2 className="mb-3">{service?.title}</h2>
          <p>{service?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
