import React from "react";
import { motion } from "framer-motion";
import smile from "../../images/smile.png";
import pesawat from "../../images/pesawat.png";
import arrows from "../../images/arrows.png";
import about_praktik from "../../images/rounded_about.png";

const AboutPraktik = () => {
  return (
    <div className="bg-lightblue py-14 relative">
      <motion.img
        src={arrows}
        alt="Tail Arrow Images"
        className="absolute top-0 right-0 w-1/3 sm:w-1/4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className="flex flex-col sm:flex-row w-3/4 mx-auto">
        <motion.div
          className="flex justify-center sm:block sm:my-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={about_praktik}
            alt="Profil Praktik Psikolog Edukasi Ceria"
            className="w-3/4 sm:w-full"
          />
        </motion.div>
        <div className="mt-8 sm:ml-8 sm:mt-0 sm:w-full lg:w-2/3 sm:my-auto">
          <motion.div
            className="flex justify-center sm:justify-between mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={smile} alt="Smile Images" className="w-1/4 md:w-auto" />
          </motion.div>
          <motion.h1
            className="font-bold text-3xl sm:text-5xl md:mt-10 text-center sm:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Praktik Psikolog Edukasi Ceria
          </motion.h1>
          <motion.p
            className="text-center sm:text-left my-3 sm:my-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Praktik Psikolog Edukasi Ceria adalah sebuah praktik yang bergerak
            di bidang psikologi. Kami menyediakan berbagai macam layanan
            psikologi yang dapat disesuaikan dengan kebutuhan Anda.
          </motion.p>
          <motion.div
            className="flex justify-center sm:justify-start w-1/2 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img src={pesawat} alt="Plane Images" className="w-1/3 md:w-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPraktik;
