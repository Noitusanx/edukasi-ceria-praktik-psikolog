import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../../data/Services";
import { useLink } from "../LinkContext";
import arrowback from "../../images/back.webp";
import { Helmet } from "react-helmet";

const DetailService = () => {
  const { slug } = useParams();
  const service = services.find((service) => service.slug === slug);
  const navigate = useNavigate();

  const { setActiveLink } = useLink();

  const handleLinkClick = () => {
    setActiveLink("/pesan");
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>{service.title} - Praktik Psikolog Edukasi Ceria</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <div className="bg-lightblue">
        <section className="w-11/12 sm:w-4/5 mx-auto py-12">
          <div className="mb-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center bg-[#DDF2FD] space-x-2 py-2 px-4 rounded-lg border-[1px] border-black hover:opacity-60"
            >
              <img src={arrowback} alt="Arrow Back" className="w-6 h-6" />
            </button>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col sm:flex-row bg-[#DDF2FD] p-6 sm:p-10 border-black border-[1px] rounded-xl"
          >
            <motion.img
              src={service.image}
              alt={`Gambar layanan ${service.title} di Edukasi Ceria`}
              className="rounded-2xl mb-4 mx-auto w-full xs:w-3/5 sm:w-2/5 border-[1px] border-gray-400 sm:mr-6"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            />
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold lg:mt-3">
                {service.title}
              </h1>
              <p className="text-base mt-3 md:w-4/5 lg:text-lg">
                {service.description}
              </p>
              <Link to="/pesan" onClick={() => handleLinkClick()}>
                <motion.button
                  type="button"
                  className="bg-[#0F83A8] hover:animate-pulse xs:rounded-[12px] rounded-[5px] text-white lg:py-3.5 py-2.5 lg:px-12 px-10 transition duration-300 font-medium md:mt-6 mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Pesan
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default DetailService;
