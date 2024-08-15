import React from "react";
import { useParams } from "react-router-dom";
import DetailService from "../components/ServicesComponents/DetailService";
import Activity from "../components/ServicesComponents/Activity";
import Benefit from "../components/ServicesComponents/Benefit";
import services from "../data/Services";
import { Link } from "react-router-dom";

const Service = () => {
  const { slug } = useParams();
  const service = services.find((service) => service.slug === slug);

  if (!service)
    return (
      <div className="flex items-center justify-center h-screen bg-lightblue">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 mx-3">
            Layanan tidak ditemukan
          </h1>
          <Link to="/layanan" className="text-blue-500 underline font-semibold">
            Kembali ke layanan
          </Link>
        </div>
      </div>
    );
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
