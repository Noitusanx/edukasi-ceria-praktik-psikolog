import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import layanans from "../../data/Services";
import { Link } from "react-router-dom";
import { useLink } from "../LinkContext";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Card = (path) => {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-darkgreen py-16 border-[1px] border-black slider-container">
      <Slider {...settings} className="w-3/4 mx-auto">
        {layanans.map((service, index) => (
          <Link
            key={index}
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
                  className="pb-5 rounded-3xl border-[1px] border-black flex flex-col h-full"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <div>
                    <img
                      src={service.image}
                      alt="Card Image"
                      className="w-full h-40 object-cover rounded-t-3xl"
                    />
                  </div>
                  <div className="mt-5 flex-grow flex flex-col px-5">
                    <h1 className="text-xl font-bold">{service.title}</h1>
                    <p className="text-gray-700 flex-grow">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
