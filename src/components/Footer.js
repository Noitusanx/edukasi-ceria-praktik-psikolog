/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/logo.png";
import arrow from "../images/arrow.png";
import whatsapp from "../images/whatsapp.svg";
import instagram from "../images/instagram.svg";
import { Link } from "react-router-dom";
import { useLink } from "../components/LinkContext";

const Footer = () => {
  const { setActiveLink } = useLink();

  const handleLinkClick = (path) => {
    setActiveLink(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-primary py-8 relative border-black border-t-[1px]">
      <div className="container mx-auto w-4/5 border-b-[#D9D6D6] border-[1px]">
        <div className="flex flex-col sm:flex-row justify-between relative">
          <div className="w-40 mx-auto sm:mx-0">
            <img src={Logo} alt="Logo" className="mx-auto md:mx-0" />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-x-20 md:gap-x-36 md:text-lg mt-4 sm:mt-0 font-medium">
            <div className="flex flex-col gap-y-4">
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className="hover:text-[#E31E70]"
              >
                Beranda
              </Link>
              <Link
                to="/tentang"
                onClick={() => handleLinkClick("/tentang")}
                className="hover:text-[#E31E70]"
              >
                Tentang Kami
              </Link>
              <Link
                to="/layanan"
                onClick={() => handleLinkClick("/layanan")}
                className="hover:text-[#E31E70]"
              >
                Layanan
              </Link>
            </div>
            <div className="flex flex-col gap-y-4 mt-4 sm:mt-0">
              <Link
                to="/acara"
                onClick={() => handleLinkClick("/acara")}
                className="hover:text-[#E31E70]"
              >
                Acara
              </Link>
              <Link
                to="/artikel"
                onClick={() => handleLinkClick("/artikel")}
                className="hover:text-[#E31E70]"
              >
                Artikel
              </Link>
              <Link
                to="/pesan"
                onClick={() => handleLinkClick("/pesan")}
                className="hover:text-[#E31E70]"
              >
                Pesan
              </Link>
            </div>
          </div>
          <div className="flex sm:block justify-center sm:justify-end mt-4 sm:mt-0 relative ">
            <button
              type="button"
              className="p-4 rounded-full bg-orange absolute top-[-170px] right-[10px] sm:relative sm:top-0 sm:right-0 border-[1px] border-black hover:bg-[#FFC36C] transition duration-300"
              onClick={() => scrollTop()}
            >
              <img src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-4/5 mx-auto mt-5">
        <div className="flex gap-x-4 mx-auto sm:mx-0">
          <a href="https://wa.me/6289647052277" target="_blank">
            <img src={whatsapp} alt="Whatsapp" className="w-6" />
          </a>
          <a href="https://www.instagram.com/edukasiceria8" target="_blank">
            <img src={instagram} alt="Instagram" className="w-6" />
          </a>
        </div>
      </div>
      <div className="text-center mt-5">
        <p className="">© 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
