import React from "react";
import logo from "../../images/logo.webp";
import { Link } from "react-router-dom";
import { useLink } from "../LinkContext";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
};

const BookLanding = () => {
  const { setActiveLink } = useLink();

  const handleLinkClick = () => {
    setActiveLink("/pesan");
  };

  return (
    <>
      <Helmet>
        <title>Pesan Layanan Psikolog Profesional - Edukasi Ceria</title>
        <meta
          name="description"
          content="Pesan layanan konsultasi psikolog di Edukasi Ceria. Dapatkan bantuan profesional untuk mengatasi masalah emosional Anda baik untuk anak-anak maupun dewasa."
        />
      </Helmet>
      <motion.div
        className="bg-orange py-10 border-t-[1px] border-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row w-3/4 mx-auto border-[1px] border-black rounded-[10px]">
          <motion.div
            className="bg-[#F2EADD] border-b sm:border-b-0 border-black rounded-t-[10px] flex items-center md:w-1/2 sm:order-2 sm:rounded-tl-none sm:rounded-br-[10px]"
            variants={imageVariants}
          >
            <img
              src={logo}
              alt="Logo Praktik Psikolog Edukasi Ceria"
              className="mx-auto w-44 xs:w-64"
            />
          </motion.div>
          <motion.div
            className="bg-[#C8E6C9] w-full md:w-2/3 sm:p-8 px-5 pb-7 p-6 rounded-b-[10px] md:order-1 sm:border-r-black sm:border-[1px] sm:rounded-tl-[10px] sm:rounded-br-none"
            variants={textVariants}
          >
            <h1 className="font-bold text-3xl md:text-4xl">Pesan</h1>
            <p className="sm:mt-3 mt-1 lg:text-lg xs:text-base text-sm">
              Apakah Anda membutuhkan bantuan psikologis atau ingin
              berkonsultasi mengenai kesehatan mental Anda? Jangan ragu untuk
              memesan sesi konsultasi dengan psikolog kami. Kami siap membantu
              Anda mengatasi berbagai masalah emosional dan memberikan dukungan
              yang Anda butuhkan. Pesan sesi konsultasi sekarang dan ambil
              langkah awal menuju kesehatan mental yang lebih baik.
            </p>
            <Link to="/pesan" onClick={() => handleLinkClick()}>
              <button
                type="button"
                className="mt-4 font-medium px-5 py-2.5 sm:px-8 sm:py-3 bg-[#0F83A8] text-white xs:rounded-[12px] rounded-[5px] text-sm sm:text-base md:px-10 hover:animate-pulse md:py-3.5 transition duration-300 "
              >
                Pesan
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default BookLanding;
