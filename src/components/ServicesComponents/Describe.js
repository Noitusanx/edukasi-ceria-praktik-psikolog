import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import infinite from "../../images/infinite.webp";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";

const Describe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Layanan Psikologis: Konsultasi & Psikotes - Edukasi Ceria</title>
        <meta
          name="description"
          content="Dapatkan dukungan kesejahteraan mental Anda dengan layanan psikologis dari Edukasi Ceria. Konsultasi, Psikotes, Self-Growth, dan Workshops."
        />
      </Helmet>
      <div className="bg-lightblue py-12">
        <motion.section
          ref={ref}
          className="w-11/12 sm:w-4/5 mx-auto bg-primary p-6 sm:p-9 pb-10 sm:pb-16 rounded-[50px] border-black border-[1px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row">
            <div className="sm:flex sm:flex-col sm:justify-center sm:items-start text-2xl ss:text-3xl lg:text-4xl font-bold mb-1 mt-3 sm:mt-0 sm:mb-0">
              <img src={infinite} alt="Infinite" />
              <p className="sm:mt-5 mt-4">
                <TypeAnimation
                  cursor={false}
                  sequence={["Dapatkan Dukungan", 1000]}
                />
              </p>
              <p>
                <TypeAnimation
                  cursor={false}
                  className="ml-0 xl:ml-12"
                  sequence={["Kesejahteraan Mental Anda", 2000]}
                />
              </p>
            </div>
            <div className="sm:w-2/4 sm:ml-auto text-base md:text-lg mt-4 sm:mt-0">
              <p>
                Jelajahi layanan yang kami tawarkan untuk mendukung kesehatan
                mental dan emosional Anda. Dari konsultasi psikologis hingga tes
                kecerdasan dan terapi khusus, tim psikolog kami siap membantu
                Anda mengatasi berbagai tantangan.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Describe;
