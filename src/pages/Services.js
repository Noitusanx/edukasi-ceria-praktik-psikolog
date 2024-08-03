import React from "react";
import Describe from "../components/ServicesComponents/Describe";
import Cards from "../components/ServicesComponents/Cards";

const services = () => {
  return (
    <div className="font-roboto">
      <section>
        <Describe />
      </section>
      <section>
        <Cards />
      </section>
    </div>
  );
};

export default services;
