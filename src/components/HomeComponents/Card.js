/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import layanans from "../../data/Services";
import { Link } from "react-router-dom";
import { useLink } from "../LinkContext";
import { Helmet } from "react-helmet";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Card = () => {
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { setActiveLink } = useLink();

  const handleLinkClick = () => {
    setActiveLink("/layanan");
  };

  return (
    <>
      <Helmet>
        <title>Layanan - Edukasi Ceria</title>
        <meta
          name="description"
          content="Edukasi Ceria menawarkan layanan psikologi, termasuk konsultasi, terapi, dan pelatihan untuk anak-anak dan dewasa. Dapatkan bantuan profesional di sini."
        />
      </Helmet>
      <div className="bg-darkgreen py-16 border-y-[1px] border-black slider-container relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            620: {
              slidesPerView: 2,
            },
            1060: {
              slidesPerView: 3,
            },
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".customs-swiper-button-next",
            prevEl: ".customs-swiper-button-prev",
          }}
          className="w-3/4 mx-auto"
        >
          {layanans.map((service, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/layanan/${service.slug}`}
                onClick={() => {
                  ScrollTop();
                  handleLinkClick();
                }}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ once: true }}
                  className="flex hover:animate-pulse"
                >
                  <div className="px-2 flex flex-col h-full">
                    <div
                      className="pb-5 rounded-3xl border-[1px] border-black flex flex-col sm:min-h-[330px] min-h-[330px] ss:min-h-[400px] md:min-h-[360px] lg:min-h-[340px] xl:min-h-[310px]"
                      style={{ backgroundColor: service.bgColor }}
                    >
                      <div className="h-40 overflow-hidden rounded-t-3xl">
                        <img
                          src={service.image}
                          alt={`Gambar layanan ${service.title} di Edukasi Ceria`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-5 flex-grow flex flex-col px-5">
                        <h1 className="text-xl font-bold">{service.title}</h1>
                        <p className="text-gray-700 flex-grow mt-1">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute left-0 right-0 flex justify-between items-center md:w-4/5 top-1/2 transform -translate-y-1/2 mx-auto w-11/12">
          <div className="customs-swiper-button-prev text-black text-2xl">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="customs-swiper-button-next text-black text-2xl">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
        <div className="swiper-pagination flex justify-center items-center my-6"></div>
      </div>
    </>
  );
};

export default Card;
