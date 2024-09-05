import React from "react";
import { motion } from "framer-motion";
import LandingImage from "../../images/landingimage.webp";
import { Link } from "react-router-dom";
import { useLink } from "../LinkContext";
import { Helmet } from "react-helmet";
import "react-loading-skeleton/dist/skeleton.css";

const LandingCard = () => {
  const { setActiveLink } = useLink();

  const handleLinkClick = () => {
    setActiveLink("/tentang");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Edukasi Ceria - Praktik Psikologi</title>
        <meta
          name="description"
          content="Edukasi Ceria adalah layanan psikologi yang menyediakan jasa dalam rangka pencegahan, pengembangan, dan penyelesaian untuk anak-anak hingga dewasa."
        />
      </Helmet>
      <motion.div
        className="bg-lightblue py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-primary sm:py-28 py-14 w-4/5 mx-auto border-[1px] border-black rounded-xl sm:rounded-[50px]">
          <div className="w-4/5 mx-auto">
            <div className="flex justify-between gap-10 flex-col sm:flex-row">
              <motion.div
                className="items-center my-auto sm:w-3/4 w-full"
                variants={itemVariants}
              >
                <>
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E31E70]"
                    variants={itemVariants}
                  >
                    Edukasi Ceria
                  </motion.h1>
                  <motion.p
                    className="mt-5 text-base lg:text-lg"
                    variants={itemVariants}
                  >
                    Edukasi Ceria adalah layanan psikologi yang menyediakan jasa
                    dalam rangka pencegahan, pengembangan, dan penyelesaian
                    untuk anak-anak hingga dewasa.
                  </motion.p>
                  <Link to="/tentang" onClick={handleLinkClick}>
                    <motion.button
                      className="bg-[#0F83A8] font-medium text-white px-6 py-4 lg:px-8 lg:py-4 mt-5 xs:rounded-[12px] rounded-[5px] text-sm sm:text-base lg:text-lg hover:animate-pulse"
                      variants={itemVariants}
                    >
                      Tentang Kami
                    </motion.button>
                  </Link>
                </>
              </motion.div>
              <motion.div
                className="w-2/3 min-w-[224px] my-auto mx-auto sm:mx-0"
                variants={itemVariants}
              >
                <motion.img
                  src={LandingImage}
                  alt="Konsultasi Psikologi"
                  className="object-cover rounded-[30px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LandingCard;
