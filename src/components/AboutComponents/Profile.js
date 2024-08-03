import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profilepsikolog1 from "../../images/profil_psikolog1.png";
import profilepsikolog2 from "../../images/profil_psikolog2.png";
import profilepsikolog3 from "../../images/profil_psikolog3.png";

const Profile = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-orange py-14 border-black border-y-[1px]">
      <div className="w-3/4 mx-auto">
        <motion.h1
          ref={headerRef}
          className="font-extrabold sm:font-bold md:text-5xl text-3xl mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -50 }}
          transition={{ duration: 0.3 }}
        >
          PROFIL PSIKOLOG
        </motion.h1>
        <motion.p
          ref={headerRef}
          className="md:text-[18px] text-center sm:w-2/3 mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: headerInView ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Edukasi Ceria adalah praktik psikolog yang berdedikasi untuk
          memberikan pelayanan terbaik dalam bidang kesehatan mental dan
          pendidikan. Kami memiliki tim psikolog berpengalaman yang siap
          membantu Anda dalam mengatasi berbagai permasalahan psikologis,
          memberikan bimbingan, dan mendukung perkembangan pribadi serta
          profesional Anda.
        </motion.p>
        <motion.div
          ref={headerRef}
          className="w-56 sm:w-64 h-[2px] bg-black mx-auto mb-10"
          initial={{ width: 0 }}
          animate={{ width: headerInView ? "100%" : 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        ></motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-3/4 mx-auto">
          <motion.div
            ref={sectionRef}
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: sectionInView ? 1 : 0,
              scale: sectionInView ? 1 : 0.8,
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <img
              src={profilepsikolog1}
              alt="Profile 1"
              className="xs:w-4/5 sm:w-full"
            />
          </motion.div>
          <motion.div
            ref={sectionRef}
            className="flex justify-center sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: sectionInView ? 1 : 0,
              scale: sectionInView ? 1 : 0.8,
            }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <img
              src={profilepsikolog2}
              alt="Profile 2"
              className="xs:w-4/5 sm:w-full"
            />
          </motion.div>
          <motion.div
            ref={sectionRef}
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: sectionInView ? 1 : 0,
              scale: sectionInView ? 1 : 0.8,
            }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <img
              src={profilepsikolog3}
              alt="Profile 3"
              className="xs:w-4/5 sm:w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
