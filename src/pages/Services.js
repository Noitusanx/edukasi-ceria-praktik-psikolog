import React from "react";
import Describe from "../components/ServicesComponents/Describe";
import Cards from "../components/ServicesComponents/Cards";
import { Helmet } from "react-helmet";

const services = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Psikologi",
    provider: {
      "@type": "Organization",
      name: "Edukasi Ceria",
      url: "https://edukasi-ceria.com/",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "General Inquiry",
        telephone: "+62 896 4705 2277",
        email: "ceriaedukasi@gmail.com",
      },
      sameAs: [
        "https://www.instagram.com/edukasiceria8",
        "https://wa.me/6289647052277",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Purnama Lr. T. Cut Ali No.288, Drien Rampak",
        addressLocality: "Johan Pahlawan",
        addressRegion: "Aceh Barat",
        postalCode: "23617",
        addressCountry: "ID",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Indonesia",
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>
      <div className="font-roboto">
        <section>
          <Describe />
        </section>
        <section>
          <Cards />
        </section>
      </div>
    </>
  );
};

export default services;
