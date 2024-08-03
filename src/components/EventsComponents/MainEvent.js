import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import warning from "../../images/warning.png";
import { Link } from "react-router-dom";
import { useLink } from "../LinkContext";
import { TypeAnimation } from "react-type-animation";

const MainEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setActiveLink } = useLink();

  const handleLinkClick = () => {
    setActiveLink("/pesan");
  };

  const event = null;

  // const event = {
  //   name: "Permainan Tradisional yang Sangat Panjang sekali ini adalah title yang sangat panjang",
  //   place: "Praktik Psikolog Edukasi Ceria",
  //   date: "22 Agustus 2024",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos minima, asperiores quas aperiam sequi nostrum, dolor molestias praesentium consectetur molestiae laborum inventore sapiente itaque reiciendis adipisci ullam commodi eum et!",
  // };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Variants for animations
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref: nameRef, inView: nameInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: placeRef, inView: placeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: dateRef, inView: dateInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
      {event ? (
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-4/5 mx-auto my-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-12">
            <motion.div
              ref={nameRef}
              initial="hidden"
              animate={nameInView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
              className="flex-1 relative z-0 mb-4 sm:mb-0 group border-b-2 border-gray-400"
            >
              <p className="text-sm sm:text-base md:text-lg">Nama Acara</p>
              <div className="flex items-end">
                <label
                  htmlFor="fullname"
                  className="block pt-2 pb-1 w-full text-sm sm:text-base md:text-xl text-gray-900 font-bold"
                >
                  Permainan Tradisional yang Sangat Panjang sekali ini adalah
                  title yang sangat panjang
                </label>
              </div>
            </motion.div>
            <motion.div
              ref={placeRef}
              initial="hidden"
              animate={placeInView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
              className="flex-1 relative z-0 mb-4 sm:mb-0 group border-b-2 border-gray-400"
            >
              <p className="text-sm sm:text-base md:text-lg">Tempat Acara</p>
              <div className="flex items-end">
                <label
                  htmlFor="place"
                  className="block pt-2 pb-1 w-full text-sm sm:text-base md:text-xl text-gray-900 font-bold"
                >
                  Praktik Psikolog Edukasi Ceria
                </label>
              </div>
            </motion.div>
            <motion.div
              ref={dateRef}
              initial="hidden"
              animate={dateInView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5 }}
              className="flex-1 relative z-0 group border-b-2 border-gray-400"
            >
              <p className="text-sm sm:text-base md:text-lg">Tanggal Acara</p>
              <div className="flex items-end">
                <label
                  htmlFor="date"
                  className="block pt-2 pb-1 w-full text-sm sm:text-base md:text-xl text-gray-900 font-bold"
                >
                  22 Agustus 2024
                </label>
              </div>
            </motion.div>
          </div>
          <p className="mt-4 mb-4 text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            minima, asperiores quas aperiam sequi nostrum, dolor molestias
            praesentium consectetur molestiae laborum inventore sapiente itaque
            reiciendis adipisci ullam commodi eum et!
          </p>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={openModal}
              className="bg-white hover:opacity-60 rounded py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-10 transition duration-300 font-medium border-[#0F83A8] border text-[#0F83A8] mr-4"
            >
              Detail
            </button>
            <Link to="/pesan" onClick={() => handleLinkClick()}>
              <button
                type="button"
                className="bg-[#0F83A8] hover:animate-pulse rounded py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-10 transition duration-300 font-medium text-white"
              >
                Pesan
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <motion.div
          ref={dateRef}
          initial="hidden"
          animate={dateInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-4/5 mx-auto my-auto text-center border-[2px] border-black flex flex-col items-center"
        >
          <div className="animate-pulse">
            <img
              src={warning}
              alt="Warning Icon"
              className=" w-12 mb-2 mx-auto"
            />
            <TypeAnimation
              className="text-2xl sm:text-3xl font-bold"
              cursor={false}
              speed={60}
              sequence={[
                "Mohon maaf, tidak ada acara yang berlangsung saat ini.",
              ]}
            />
          </div>
        </motion.div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/5 md:w-2/5 max-h-[90vh] overflow-y-auto relative">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4">Detail Kegiatan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              aspernatur placeat aliquid sunt porro repellat consequuntur
              aliquam ut corrupti facere repellendus, veniam impedit consectetur
              distinctio nostrum at, architecto hic? Nam quo voluptas sed quis
              rerum, expedita repudiandae veniam vitae praesentium omnis impedit
              fugit velit sit, porro vel. Vel, illum ex!
            </p>
            <div className="flex justify-end mt-8">
              <Link to="/pesan" onClick={() => handleLinkClick()}>
                <button
                  type="button"
                  className="bg-[#0F83A8] hover:animate-pulse rounded py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-10 transition duration-300 font-medium text-white"
                >
                  Pesan
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainEvent;
