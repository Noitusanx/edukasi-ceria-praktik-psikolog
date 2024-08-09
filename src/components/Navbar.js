import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import whatsapp from "../images/whatsapp.svg";
import instagram from "../images/instagram.svg";
import { Link, useLocation } from "react-router-dom";
import { useLink } from "../components/LinkContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [slideClass, setSlideClass] = useState("");
  const { activeLink, setActiveLink } = useLink();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/layanan")) {
      setActiveLink("/layanan");
    } else if (location.pathname.startsWith("/artikel")) {
      setActiveLink("/artikel");
    } else {
      setActiveLink(location.pathname);
    }
  }, [activeLink, location.pathname, setActiveLink]);

  const handleToggle = () => {
    if (toggle) {
      setAnimationClass("circle-collapse");
      setSlideClass("slide-down");
      setTimeout(() => {
        setToggle(false);
      }, 500);
    } else {
      setAnimationClass("circle-expand");
      setSlideClass("slide-top");
      setToggle(true);
    }
  };

  const handleClickLink = (path) => {
    setActiveLink(path);
    setAnimationClass("circle-collapse");
    setSlideClass("slide-down");
    setTimeout(() => {
      setToggle(false);
    }, 500);
  };

  const email = "ceriaedukasi@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <nav className="font-roboto">
      <div className="bg-primary py-10 sm:pb-6 sm:pt-5 px-7 border-b-[1px] border-black">
        <div className="hidden sm:flex justify-between items-center px-10 bg-white rounded-3xl w-full md:w-11/12 mx-auto border-[1px] border-black">
          <img src={logo} alt="Logo" className=" w-24" />
          <div className="flex items-center space-x-5">
            <ul className="flex space-x-6 sm:text-base md:text-lg md:space-x-8 lg:space-x-14">
              <li>
                <Link
                  to="/"
                  className={`font-semibold hover:text-[#E31E70] ${
                    activeLink === "/" ? "text-[#E31E70]" : "text-black"
                  }`}
                  onClick={() => setActiveLink("/")}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang"
                  className={`font-semibold hover:text-[#E31E70] ${
                    activeLink === "/tentang" ? "text-[#E31E70]" : "text-black"
                  }`}
                  onClick={() => setActiveLink("/tentang")}
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan"
                  className={`font-semibold hover:text-[#E31E70] ${
                    activeLink === "/layanan" ? "text-[#E31E70]" : "text-black"
                  }`}
                  onClick={() => setActiveLink("/layanan")}
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  to="/acara"
                  className={`font-semibold hover:text-[#E31E70] ${
                    activeLink === "/acara" ? "text-[#E31E70]" : "text-black"
                  }`}
                  onClick={() => setActiveLink("/acara")}
                >
                  Acara
                </Link>
              </li>
              <li>
                <Link
                  to="/artikel"
                  className={`font-semibold hover:text-[#E31E70] ${
                    activeLink === "/artikel" ? "text-[#E31E70]" : "text-black"
                  }`}
                  onClick={() => setActiveLink("/artikel")}
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  to="/pesan"
                  className={`font-semibold hover:text-[#E31E70] ${
                    activeLink === "/pesan" ? "text-[#E31E70]" : "text-black"
                  }`}
                  onClick={() => setActiveLink("/pesan")}
                >
                  Pesan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-screen bg-primary transition-all duration-500 ease-in-out ${
          toggle ? "opacity-100 z-40" : "opacity-0 -z-10"
        } ${animationClass}`}
      >
        <div className="fixed top-4 right-4">
          <button
            onClick={handleToggle}
            className="focus:outline-none bg-gray-800 text-white p-3 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {toggle ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="w-28 mb-5 ml-3" />
          <ul
            className={`xs:text-3xl text-2xl space-y-6 mt-24 ml-8 ${
              toggle ? `opacity-100 ${slideClass}` : "opacity-0"
            }`}
          >
            <li>
              <Link
                to="/"
                className={`font-bold hover:text-[#E31E70] ${
                  activeLink === "/" ? "text-[#E31E70]" : "text-black"
                }`}
                onClick={() => handleClickLink("/")}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                className={`font-bold hover:text-[#E31E70] ${
                  activeLink === "/tentang" ? "text-[#E31E70]" : "text-black"
                }`}
                onClick={() => handleClickLink("/tentang")}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/layanan"
                className={`font-bold hover:text-[#E31E70] ${
                  activeLink === "/layanan" ? "text-[#E31E70]" : "text-black"
                }`}
                onClick={() => handleClickLink("/layanan")}
              >
                Layanan
              </Link>
            </li>
            <li>
              <Link
                to="/acara"
                className={`font-bold hover:text-[#E31E70] ${
                  activeLink === "/acara" ? "text-[#E31E70]" : "text-black"
                }`}
                onClick={() => handleClickLink("/acara")}
              >
                Acara
              </Link>
            </li>
            <li>
              <Link
                to="/artikel"
                className={`font-bold hover:text-[#E31E70] ${
                  activeLink === "/artikel" ? "text-[#E31E70]" : "text-black"
                }`}
                onClick={() => handleClickLink("/artikel")}
              >
                Artikel
              </Link>
            </li>
            <li>
              <Link
                to="/pesan"
                className={`font-bold hover:text-[#E31E70] ${
                  activeLink === "/pesan" ? "text-[#E31E70]" : "text-black"
                }`}
                onClick={() => handleClickLink("/pesan")}
              >
                Pesan
              </Link>
            </li>
            <div className="text-[16px] ss:text-[20px]">
              <p className="text-slate-500">Kontak</p>
              <div className="flex">
                <p className="text-slate-800 mt-1">ceriaedukasi@gmail.com</p>
                <svg
                  className="w-10"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => copyToClipboard()}
                >
                  <path
                    d="M20.5264 24.1117C20.5264 21.9488 20.5264 20.8673 21.1983 20.1954C21.8702 19.5234 22.9517 19.5234 25.1146 19.5234H27.4087C29.5716 19.5234 30.6531 19.5234 31.325 20.1954C31.997 20.8673 31.997 21.9488 31.997 24.1117V27.9352C31.997 30.0981 31.997 31.1795 31.325 31.8515C30.6531 32.5234 29.5716 32.5234 27.4087 32.5234H25.1146C22.9517 32.5234 21.8702 32.5234 21.1983 31.8515C20.5264 31.1795 20.5264 30.0981 20.5264 27.9352V24.1117Z"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M19.3777 29.4737C18.0645 29.4737 17 28.4092 17 27.096V22.3406C17 19.3516 17 17.8571 17.9286 16.9286C18.8571 16 20.3516 16 23.3406 16H26.5108C27.824 16 28.8885 17.0645 28.8885 18.3777"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="flex space-x-4 ml-2 mt-3">
                <button
                  type="button"
                  className="border-2 border-[#FFC36C] bg-white p-2 rounded-full"
                >
                  <a
                    href="https://wa.me/6289647052277"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={whatsapp} alt="Whatsapp" className="w-6 h-6" />
                  </a>
                </button>
                <button
                  type="button"
                  className="border-2 border-[#FFC36C] bg-white p-2 rounded-full"
                >
                  <a
                    href="https://www.instagram.com/edukasiceria8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="Instagram" className="w-6 h-6 " />
                  </a>
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div className="fixed top-4 z-50 right-4 sm:hidden">
        <button
          onClick={handleToggle}
          className="focus:outline-none bg-gray-800 text-white p-3 rounded-full"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {toggle ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
