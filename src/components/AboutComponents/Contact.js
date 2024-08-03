import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import call from "../../images/call.svg";
import email from "../../images/email.svg";
import address from "../../images/address.svg";
import calendar from "../../images/calendar.svg";
import map from "../../images/map.png";
import whatsapp from "../../images/whatsapp.svg";
import instagram from "../../images/instagram.svg";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div>
      <section className="bg-darkgreen py-16">
        <div className="w-11/12 md:w-4/5 mx-auto bg-[#8CEDC3] rounded-[30px] p-6 sm:p-12 shadow-custom">
          <motion.h1
            className="text-center text-3xl md:text-4xl font-bold mb-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            Informasi Kontak
          </motion.h1>
          <div className="flex flex-col sm:flex-row justify-center">
            <motion.div
              className="flex flex-col justify-between p-6 bg-[#B2E0B4] rounded-xl border border-black mb-6 sm:mb-0 sm:mr-4 sm:w-3/4 text-sm md:text-base"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className=" font-medium ">
                <div className="flex items-center my-3">
                  <img src={call} alt="Phone Icon" className="mr-2 w-6" />
                  <p>+62 896 4705 2277</p>
                </div>
                <div className="flex items-center my-3">
                  <img src={email} alt="Email Icon" className="mr-2 w-6" />
                  <p>ceriaedukasi@gmail.com</p>
                </div>
                <div className="flex items-start my-3">
                  <img
                    src={calendar}
                    alt="Calendar Icon"
                    className="mr-3 w-5"
                  />
                  <div>
                    <p>Buka:</p>
                    <p>08:30 - 16:00 WIB (Senin - Jumat)</p>
                    <p>09:00 - 14:00 WIB (Sabtu)</p>
                  </div>
                </div>
                <div className="items-center my-2">
                  <a
                    href="https://www.google.com/maps/place/Praktik+Psikolog+Edukasi+Ceria/@4.159922,96.1282997,15z/data=!4m6!3m5!1s0x303ec359c2959e4f:0x3b06118f4fed4810!8m2!3d4.159922!4d96.1282997!16s%2Fg%2F11kq7t8gw6?entry=ttu"
                    target="_blank"
                    className="flex hover:opacity-70"
                  >
                    <img
                      src={address}
                      alt="Address Icon"
                      className="mr-3 w-5"
                    />
                    <p>
                      Jl. Purnama Lr. T. Cut Ali No.288, Drien Rampak, Kec.
                      Johan Pahlawan, Kabupaten Aceh Barat, Aceh 23617
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="https://wa.me/6289647052277"
                  target="_blank"
                  className="hover:opacity-60"
                >
                  <img
                    src={whatsapp}
                    alt="Whatsapp Icon"
                    className="mr-3 w-5"
                  />
                </a>
                <a
                  href="https://www.instagram.com/edukasiceria8"
                  target="_blank"
                  className="hover:opacity-60"
                >
                  <img src={instagram} alt="Instagram Icon" className="w-5" />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="w-full sm:my-auto hover:opacity-70"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="https://www.google.com/maps/place/Praktik+Psikolog+Edukasi+Ceria/@4.159922,96.1282997,15z/data=!4m6!3m5!1s0x303ec359c2959e4f:0x3b06118f4fed4810!8m2!3d4.159922!4d96.1282997!16s%2Fg%2F11kq7t8gw6?entry=ttus"
                target="_blank"
              >
                <img
                  src={map}
                  alt="Map Praktik Psikolog Edukasi Ceria"
                  className="w-full border border-black rounded-xl"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
