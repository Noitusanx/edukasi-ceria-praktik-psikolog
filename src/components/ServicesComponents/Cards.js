import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import star from "../../images/star.png";
import smile from "../../images/smile.png";
import { Link } from "react-router-dom";
import Services from "../../data/Services";

const Cards = () => {
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-darkgreen py-12 border-t-[1px] border-black">
      <motion.section
        ref={ref}
        className="w-11/12 sm:w-4/5 mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
      >
        <h1 className="bg-[#FFC36C] text-3xl sm:text-4xl font-bold text-center py-3 md:py-5 rounded-full w-4/5 sm:w-2/3 mx-auto border-black border-[1px]">
          Seluruh Layanan
        </h1>
        <div className="flex justify-between my-8 md:my-12 md:relative">
          <img
            src={star}
            alt="Star"
            className="w-1/4 xs:w-auto md:absolute md:top-[-100px]"
          />
          <img
            src={smile}
            alt="Smile"
            className="w-1/4 xs:w-auto md:absolute md:right-0 md:top-[-80px]"
          />
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 my-6 ">
          {Services.map((service, index) => (
            <Link
              to={`/layanan/${service.slug}`}
              key={index}
              className="flex"
              onClick={() => ScrollTop()}
            >
              <div className="px-2 flex flex-col h-full hover:animate-pulse">
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
            </Link>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Cards;
