import React from "react";
import { useParams } from "react-router-dom";
import DetailService from "../components/ServicesComponents/DetailService";
import Activity from "../components/ServicesComponents/Activity";
import Benefit from "../components/ServicesComponents/Benefit";

const Service = () => {
  const { slug } = useParams();

  return (
    <div className="font-roboto">
      <section>
        <DetailService slug={slug} />
      </section>
      <section>
        <Activity slug={slug} />
      </section>
      <section>
        <Benefit slug={slug} />
      </section>
    </div>
  );
};

export default Service;
