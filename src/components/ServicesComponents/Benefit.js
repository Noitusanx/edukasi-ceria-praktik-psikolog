import React, { useEffect, useState } from "react";
import Services from "../../data/Services";
import { useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet";

const Benefit = () => {
  const { slug } = useParams();
  const service = Services.find((service) => service.slug === slug);

  const controls = useAnimation();
  const [ref, setRef] = useState(null);

  const onScreen = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      controls.start("visible");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onScreen, {
      threshold: 0.1,
    });

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>
          Manfaat - {service.title} - Praktik Psikolog Edukasi Ceria
        </title>
        <meta
          name="description"
          content={`Dapatkan manfaat dari layanan ${service.title} di Praktik Psikolog Edukasi Ceria. Kami menyediakan solusi psikologis yang dirancang untuk kebutuhan Anda.`}
        />
      </Helmet>
      <div className="bg-darkgreen border-t-[1px] border-black p-6 md:p-12">
        <section className="w-11/12 sm:w-4/5 mx-auto">
          <motion.div
            className="flex flex-col xl:flex-row bg-[#A7E7D7] p-6 sm:p-10 border-black border-[1px] rounded-xl"
            ref={setRef}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <img
              src={service.benefit_image}
              alt="Gambar manfaat layanan di Edukasi Ceria"
              className="rounded-2xl mb-4 mx-auto w-full xs:w-3/5 md:w-1/2 lg:w-2/5 border-[1px] border-gray-400 xl:mr-6 h-full xl:my-auto"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl sm:text-3xl xl:text-4xl text-center">
                Manfaat dari Kegiatan
              </h1>
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 mt-6 md:mt-8 mx-4 md:gap-x-6">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className={`flex gap-4 ${
                      index % 2 === 0 ? "md:mr-2 mr-0" : "md:ml-2 ml-0"
                    }`}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                  >
                    <div>
                      <h1 className="font-bold text-lg">{benefit.title}</h1>
                      <p>{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-black"></div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Benefit;
