import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Cards = () => {
  const [notes, setNotes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const fullname = formData.get("fullname");
    const age = formData.get("age");
    const service = formData.get("service");
    const illness = formData.get("illness");
    const notesValue = notes.trim() === "" ? "-" : notes;

    const message = `Halo, saya ingin memesan layanan berikut:\n\nNama Lengkap: ${fullname}\nUmur: ${age}\nTipe Layanan: ${service}\nKeluhan: ${illness}\nCatatan Tambahan: ${notesValue}\n\nKapan waktu yang tersedia untuk konsultasi? Terima kasih!`;

    const whatsappURL = `https://wa.me/6289647052277?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-darkgreen">
      <section className="mx-auto w-4/5 py-12">
        <motion.div
          className="bg-[#A7E7D7] border-black border-[1px] rounded-xl p-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-8">
            Pesan Layanan
          </h1>
          <form className="w-full md:w-5/6 mx-auto" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="fullname"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama Lengkap
              </label>
            </div>
            <div className="md:flex mb-6 sm:mb-2">
              <div className="relative z-0 w-full mb-5 group md:mr-4">
                <input
                  type="number"
                  name="age"
                  id="age"
                  min={1}
                  className="block pt-4 pb-1 px-0 w-full text-sm md:text-lg sm:text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="age"
                  className="peer-focus:font-medium absolute text-sm md:text-lg sm:text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Umur
                </label>
              </div>
              <div className="relative z-0 w-full md:mb-2 group">
                <select
                  name="service"
                  id="service"
                  className="block pt-4 pb-1 px-0 w-full text-sm md:text-lg sm:text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                  placeholder=" "
                  required
                >
                  <option disabled defaultValue="Pilih Tipe Layanan">
                    Pilih Tipe Layanan
                  </option>
                  <option value="konsultasi">Konsultasi</option>
                  <option value="tes kesiapaan sekolah">
                    Tes Kesiapan Sekolah
                  </option>
                  <option value="tes minat bakat">Tes Minat Bakat</option>
                  <option value="program terapi anak berkebutuhan khusus">
                    Program Terapi Anak Berkebutuhan Khusus
                  </option>
                  <option value="deteksi masalah akademik/kesulitan belajar">
                    Deteksi Masalah Akademik/Kesulitan Belajar
                  </option>
                  <option value="screening tumbuh kembang">
                    Screening Tumbuh Kembang
                  </option>
                  <option value="tes kecerdasan">Tes Kecerdasan</option>
                  <option value="konsultasi anak">Konsultasi Anak</option>
                  <option value="sharing class">Sharing Class</option>
                  <option value="psikoedukasi">Psikoedukasi</option>
                </select>
                <label
                  htmlFor="service"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 md:text-lg"
                >
                  Tipe Layanan
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                name="illness"
                id="illness"
                rows="4"
                className="block pt-4 pb-1 px-0 w-full text-sm md:text-lg sm:text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="illness"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 md:text-lg"
              >
                Keluhan
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <textarea
                name="notes"
                id="notes"
                rows="4"
                className="block pt-4 pb-1 px-0 w-full text-sm md:text-lg sm:text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <label
                htmlFor="notes"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 md:text-lg"
              >
                Catatan Tambahan
              </label>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#0F83A8] hover:opacity-70 sm:rounded-[12px] rounded-[5px] text-white sm:py-3 px-6 py-2 sm:px-10 transition duration-300 font-medium md:mt-6"
              >
                Pesan
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Cards;
