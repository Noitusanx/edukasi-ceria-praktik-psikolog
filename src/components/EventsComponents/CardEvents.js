import React, { useState } from "react";
import Events from "../../data/Events";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

const CardEvents = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Acara Psikologi & Edukasi - Edukasi Ceria</title>
        <meta
          name="description"
          content="Edukasi Ceria menyelenggarakan acara psikologi dan edukasi untuk anak-anak dan dewasa, termasuk Hari Anak Nasional, Educational Play, dan Parent-Kids' Day."
        />
      </Helmet>
      <div className="bg-[#C8E6C9] border-t-[1px] border-black p-4 sm:p-8 lg:p-12">
        <section className="mx-auto w-full sm:w-4/5">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8">
            Acara Lalu
          </h1>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-6">
            {Events.map((card) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              return (
                <motion.div
                  key={card.id}
                  className="px-2 flex flex-col h-full"
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="rounded-3xl border-[1px] border-black flex flex-col h-full cursor-pointer"
                    onClick={() => openModal(card)}
                  >
                    <div>
                      <img
                        src={card.image}
                        alt={`Foto acara ${card.title}`}
                        className="w-full h-32 sm:h-40 object-cover rounded-t-3xl"
                      />
                    </div>
                    <div className="py-4 sm:py-5 flex px-4 sm:px-6 h-full bg-white rounded-b-3xl">
                      <div className="mr-4 sm:mr-6 mt-2">
                        <p className="text-[#3D37F1] font-bold text-lg sm:text-xl">
                          {card.date}
                        </p>
                      </div>
                      <div>
                        <h1 className="text-lg sm:text-xl font-bold">
                          {card.title}
                        </h1>
                        <p className="text-gray-700 flex-grow mt-2 text-xs sm:text-sm line-clamp-[8]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
        <AnimatePresence>
          {modalContent && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
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
                <h2 className="text-lg sm:text-xl font-bold mb-4">Kegiatan</h2>
                <p>{modalContent.modalContent}</p>
                <h2 className="text-lg sm:text-xl font-bold my-2">Aktivitas</h2>
                <ul className="list-disc list-inside mb-4">
                  {modalContent.listActivity &&
                    modalContent.listActivity.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                </ul>
                <h2 className="text-lg sm:text-xl font-bold mb-2">Benefit</h2>
                <ul className="list-disc list-inside">
                  {modalContent.listBenefit &&
                    modalContent.listBenefit.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CardEvents;
