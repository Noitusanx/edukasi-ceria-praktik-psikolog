import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Service from "./pages/Service";
import Events from "./pages/Events";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("");
  const [isNotFound, setIsNotFound] = useState(false);
  const location = useLocation();

  const validRoutes = [
    "/",
    "/tentang",
    "/layanan",
    "/artikel",
    "/artikel/:slug",
    "/pesan",
    "/layanan/:slug",
    "/acara",
  ];

  useEffect(() => {
    const path = location.pathname;

    const isValidRoute = validRoutes.some((route) => {
      const regex = new RegExp(
        `^${route.replace(/:[^\s/]+/g, "([^/]+)")}$`,
        "i"
      );
      return regex.test(path);
    });

    if (!isValidRoute) {
      setIsNotFound(true);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return;
    }

    setIsNotFound(false);
    setIsLoading(true);

    const pageName =
      path
        .split("/")
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ") || "Beranda";

    setCurrentPage(pageName);

    const isDetailPage =
      (path.startsWith("/artikel/") && path.split("/").length === 3) ||
      (path.startsWith("/layanan/") && path.split("/").length === 3);

    if (isDetailPage) {
      setIsLoading(false);
      return;
    }

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    const images = document.querySelectorAll("img");
    let loadedImagesCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedImagesCount++;
      } else {
        img.onload = () => {
          loadedImagesCount++;
          if (loadedImagesCount === images.length) {
            handleLoad();
          }
        };
      }
    });

    if (loadedImagesCount === images.length) {
      handleLoad();
    }

    return () => {
      images.forEach((img) => {
        img.onload = null;
      });
    };
  }, [location]);

  if (isLoading) {
    return <Loading page={isNotFound ? "Not Found" : currentPage} />;
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/layanan" element={<Services />} />
        <Route path="/artikel" element={<Articles />} />
        <Route path="/artikel/:slug" element={<Article />} />
        <Route path="/pesan" element={<Booking />} />
        <Route path="/layanan/:slug" element={<Service />} />
        <Route path="/acara" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => <Main />;

export default App;
