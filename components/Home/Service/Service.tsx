import React from "react";
import services from "../../../FakeDB/services.json";
import { serviceI } from "../../interfaces/interfaces";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section className="py-16">
      <div className="service_container">
        <div className="container mx-auto">
          <p className="category_text text-center">{services.category}</p>
          <h3 className="heading_text sm:w-full md:w-7/12 mx-auto mt-5 text-center">
            {services.heading}
          </h3>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-9 my-11">
            {services.services.map((service: serviceI, key: number) => (
              <ServiceCard service={service} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
