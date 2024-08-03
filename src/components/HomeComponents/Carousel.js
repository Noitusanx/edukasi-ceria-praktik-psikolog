import React from "react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import carousel1 from "../../images/kegiatan1.jpg";
import carousel2 from "../../images/kegiatan2.jpg";
import carousel3 from "../../images/kegiatan3.jpg";
import carousel4 from "../../images/kegiatan4.jpg";
import carousel5 from "../../images/kegiatan5.jpg";
import carousel6 from "../../images/kegiatan6.jpg";

const images = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
];

const CarouselImages = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="trending" className="bg-pink py-10">
      <div className="container mx-auto w-4/5 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ el: ".custom-swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="trending-slide">
                  <div className="trending-slide-img w-full h-64 flex justify-center items-center">
                    <img
                      src={image}
                      alt={`Trending ${index}`}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="custom-navigation flex justify-center items-center ss:w-1/2 sm:w-1/3 lg:w-1/5 mx-auto">
          <div className="custom-swiper-button-prev text-2xl text-gray-700 cursor-pointer">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="custom-swiper-pagination flex justify-center items-center"></div>
          <div className="custom-swiper-button-next text-2xl text-gray-700 cursor-pointer">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselImages;
