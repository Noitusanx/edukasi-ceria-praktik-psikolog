import React from "react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Helmet } from "react-helmet";

import carousel1 from "../../images/kegiatan1.webp";
import carousel2 from "../../images/kegiatan2.webp";
import carousel3 from "../../images/kegiatan3.webp";
import carousel4 from "../../images/kegiatan4.webp";
import carousel5 from "../../images/kegiatan5.webp";
import carousel6 from "../../images/kegiatan6.webp";

const images = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
];

const CarouselImages = () => {
  return (
    <>
      <Helmet>
        <title>Kegiatan Psikologi - Edukasi Ceria untuk Anak dan Dewasa</title>
        <meta
          name="description"
          content="Edukasi Ceria menyediakan kegiatan psikologi menarik untuk anak-anak dan dewasa, seperti konsultasi, terapi, pelatihan, workshop, dan acara seperti Hari Anak Nasional."
        />
        <link rel="preload" href={carousel1} as="image" />
        <link rel="preload" href={carousel2} as="image" />
        <link rel="preload" href={carousel3} as="image" />
        <link rel="preload" href={carousel4} as="image" />
        <link rel="preload" href={carousel5} as="image" />
        <link rel="preload" href={carousel6} as="image" />
      </Helmet>
      <section id="trending" className="bg-pink py-10">
        <div className="container mx-auto w-4/5 relative">
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
                      alt={`Gambar ${
                        index + 1
                      } dari kegiatan psikologi di Edukasi Ceria`}
                      className="object-cover w-full h-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
    </>
  );
};

export default CarouselImages;
