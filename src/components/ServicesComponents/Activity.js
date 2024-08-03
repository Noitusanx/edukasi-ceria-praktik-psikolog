import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Services from "../../data/Services";

const Activity = ({ slug }) => {
  const serviceSelected = Services.find((service) => service.slug === slug);
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

  if (!serviceSelected) {
    return <div>Service not found</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-orange p-6 md:p-12 border-t-[1px] border-black">
      <section className="w-11/12 sm:w-4/5 mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <motion.h1
            className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 md:mb-0 md:mr-4"
            ref={setRef}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            Kegiatan yang didapatkan
          </motion.h1>
          <motion.p
            className="max-w-full md:max-w-xs"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {serviceSelected.activity_description}
          </motion.p>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 my-6">
            {serviceSelected.activity.map((activity, index) => (
              <motion.div
                className="px-2 flex flex-col h-full"
                key={index}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
              >
                <div
                  className="pb-5 rounded-3xl border-[1px] border-black flex flex-col h-full"
                  style={{ backgroundColor: activity.bgColor }}
                >
                  <div>
                    <img
                      src={activity.image}
                      alt="Card Image"
                      className="w-full h-40 object-cover rounded-t-3xl"
                    />
                  </div>
                  <div className="mt-5 flex-grow flex flex-col px-5">
                    <h1 className="text-xl font-bold">{activity.title}</h1>
                    <p className="text-gray-700 flex-grow">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activity;
