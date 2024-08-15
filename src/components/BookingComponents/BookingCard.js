import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Select from "react-select";
import { Helmet } from "react-helmet";

const Cards = () => {
  const [notes, setNotes] = useState("");
  const [selectedService, setSelectedService] = useState("Pilih Layanan");

  const childServices = [
    "Konsultasi Anak",
    "Screening Tumbuh Kembang",
    "Program Terapi Anak Berkebutuhan Khusus",
    "Tes Kesiapan Sekolah",
    "Play Therapy Program",
    "Montessori Program",
  ];

  const adultServices = [
    "Konsultasi",
    "Tes Kecerdasan (IQ)",
    "Tes Minat Bakat",
    "Tes Kepribadian",
    "Parenting Class",
  ];

  const institutionServices = ["Psikoedukasi"];

  const recruitmentServices = ["Recruitment & Selection"];

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const notesValue = notes.trim() === "" ? "-" : notes;

    const hours = formData.get("hours");
    const minutes = formData.get("minutes");

    let duration = "";

    if (hours && hours !== "0") {
      duration += `${hours} jam `;
    }
    if (minutes && minutes !== "0") {
      duration += `${minutes} menit`;
    }
    duration = duration.trim();

    const selectedService = formData.get("Layanan");
    let messageData;
    if (institutionServices.includes(selectedService)) {
      messageData = {
        Layanan: selectedService,
        Nama: formData.get("Nama"),
        Lembaga: formData.get("Lembaga"),
        "Tema kegiatan": formData.get("Tema kegiatan"),
        Durasi: duration,
        "Catatan tambahan": notesValue,
      };
    } else {
      messageData = {};
      formData.forEach((value, key) => {
        if (key !== "hours" && key !== "minutes" && key !== "notes") {
          messageData[key] = value;
        }
      });
      messageData["Catatan tambahan"] = notesValue;
    }

    const message = `Halo, saya ingin memesan layanan berikut:\n\n${Object.entries(
      messageData
    )
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")}\n\nTerima kasih!`;

    const whatsappURL = `https://wa.me/6281265375989?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const serviceOptions = [
    { label: "Pilih Layanan", value: "", isDisabled: true },
    ...childServices.map((service) => ({ label: service, value: service })),
    ...adultServices.map((service) => ({ label: service, value: service })),
    ...institutionServices.map((service) => ({
      label: service,
      value: service,
    })),
    ...recruitmentServices.map((service) => ({
      label: service,
      value: service,
    })),
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      borderBottom: "2px solid #b0bec5",
      boxShadow: "none",
      "&:hover": {
        borderBottom: "2px solid #0F83A8",
      },
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: "12rem",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "12rem",
    }),
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderFormFields = () => {
    if (childServices.includes(selectedService)) {
      return (
        <>
          <div className="md:flex mb-6 sm:mb-2">
            <div className="relative z-0 w-full mb-6 md:mb-0 group md:w-1/2 md:mr-4">
              <input
                type="text"
                name="Nama orang tua"
                id="parentName"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="parentName"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama Orang Tua
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group md:w-1/2">
              <input
                type="number"
                name="Umur"
                id="age"
                min={1}
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="age"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Umur
              </label>
            </div>
          </div>

          <div className="md:flex mb-6 sm:mb-2">
            <div className="relative z-0 w-full mb-6 md:mb-0 group md:w-1/2 md:mr-4">
              <input
                type="text"
                name="Pendidikan"
                id="education"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="education"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pendidikan
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group md:w-1/2">
              <input
                type="text"
                name="Pekerjaan"
                id="work"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="work"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pekerjaan
              </label>
            </div>
          </div>

          <div className="md:flex mb-6 sm:mb-2">
            <div className="relative z-0 w-full mb-6 md:mb-0 group md:w-1/2 md:mr-4">
              <input
                type="text"
                name="Nama anak"
                id="childName"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="childName"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama Anak
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group md:w-1/2">
              <input
                type="text"
                name="Tempat tanggal lahir"
                id="tempatTanggalLahir"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="tempatTanggalLahir"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Tempat Tanggal Lahir
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Alamat"
              id="alamat"
              className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="alamat"
              className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Alamat
            </label>
          </div>

          <div className="md:flex mb-6 sm:mb-2">
            <div className="relative z-0 w-full mb-6 md:mb-0 group md:w-1/2 md:mr-4">
              <input
                type="text"
                name="Kelas"
                id="kelas"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="kelas"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Kelas
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group md:w-1/2">
              <input
                type="text"
                name="Sekolah"
                id="sekolah"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="sekolah"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sekolah
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <textarea
              name="Keluhan"
              id="illness"
              rows="4"
              className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="illness"
              className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Keluhan
            </label>
          </div>
        </>
      );
    } else if (adultServices.includes(selectedService)) {
      return (
        <>
          <div className="md:flex mb-6 sm:mb-2">
            <div className="relative z-0 w-full mb-6 md:mb-0 group md:w-1/2 md:mr-4">
              <input
                type="text"
                name="Nama"
                id="fullName"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="fullName"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group md:w-1/2">
              <input
                type="text"
                name="Tempat tanggal lahir"
                id="tempatTanggalLahir"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="tempatTanggalLahir"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Tempat Tanggal Lahir
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Alamat"
              id="alamat"
              className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="alamat"
              className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Alamat
            </label>
          </div>
          <div className="md:flex mb-6 sm:mb-2">
            <div className="relative z-0 w-full mb-6 md:mb-0 group md:w-1/2 md:mr-4">
              <input
                type="text"
                name="Pendidikan"
                id="education"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="education"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pendidikan
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group md:w-1/2">
              <input
                type="text"
                name="Pekerjaan"
                id="work"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="work"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pekerjaan
              </label>
            </div>
          </div>
        </>
      );
    } else if (institutionServices.includes(selectedService)) {
      return (
        <>
          <div className="md:flex mb-6 sm:mb-2">
            <div className="relative z-0 w-full mb-6 group md:mr-4">
              <input
                type="text"
                name="Nama"
                id="name"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="Lembaga"
                id="lembaga"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="lembaga"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Lembaga
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Tema kegiatan"
              id="temaKegiatan"
              className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="temaKegiatan"
              className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tema Kegiatan
            </label>
          </div>
          <div className="mb-6">
            <label
              htmlFor="durasi"
              className="block text-sm sm:text-base md:text-lg text-gray-500 mb-1.5"
            >
              Durasi
            </label>
            <div className="flex space-x-4">
              <div className="relative z-0 w-full group">
                <input
                  type="number"
                  name="hours"
                  id="hours"
                  min="0"
                  max="12"
                  className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="hours"
                  className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Jam
                </label>
              </div>

              <div className="relative z-0 w-full group">
                <input
                  type="number"
                  name="minutes"
                  id="minutes"
                  min="0"
                  max="59"
                  className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="minutes"
                  className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Menit
                </label>
              </div>
            </div>
          </div>
        </>
      );
    } else if (recruitmentServices.includes(selectedService)) {
      return (
        <>
          <div className="md:flex mb-6 sm:mb-2">
            <div className="relative z-0 w-full mb-6 group md:mr-4">
              <input
                type="text"
                name="Nama"
                id="name"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="Lembaga"
                id="lembaga"
                className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="lembaga"
                className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Lembaga
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Posisi"
              id="posisi"
              className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="posisi"
              className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Posisi
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Tes yang diinginkan"
              id="tesYangDiinginkan"
              className="block pt-4 pb-1 px-0 w-full text-sm sm:text-base md:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="tesYangDiinginkan"
              className="peer-focus:font-medium absolute text-sm sm:text-base md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tes yang diinginkan
            </label>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Layanan Psikologis",
    provider: {
      "@type": "Organization",
      name: "Edukasi Ceria",
      url: "https://edukasi-ceria.com/",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "Harga layanan psikologi bervariasi",
      itemOffered: {
        "@type": "PsychologicalService",
        serviceType:
          "Berbagai layanan psikologi termasuk konseling, psikotes, self growth, dan workshop",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Pesan Layanan Psikolog - Edukasi Ceria</title>
        <meta
          name="description"
          content="Pesan berbagai layanan psikologi dari profesional di Edukasi Ceria untuk mendukung kesehatan mental Anda. Layanan berkualitas untuk anak-anak dan dewasa."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>
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
              <div className="relative w-full mb-6 group">
                <Select
                  name="Layanan"
                  id="service"
                  options={serviceOptions}
                  value={serviceOptions.find(
                    (option) => option.value === selectedService
                  )}
                  onChange={(selectedOption) =>
                    setSelectedService(selectedOption.value)
                  }
                  styles={customStyles}
                  className="text-sm sm:text-base md:text-lg text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-[#0F83A8] peer"
                  placeholder="Pilih Layanan"
                  classNamePrefix="react-select"
                  isSearchable
                  required
                />
                <label
                  htmlFor="service"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0F83A8] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 md:text-lg"
                >
                  Tipe Layanan
                </label>
              </div>
              {renderFormFields()}
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
                  className={`py-2.5 px-6 font-medium rounded-lg hover:opacity-70 ${
                    selectedService === "Pilih Layanan"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#0F83A8] text-white"
                  }`}
                  disabled={selectedService === "Pilih Layanan"}
                >
                  Pesan
                </button>
              </div>
            </form>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Cards;
