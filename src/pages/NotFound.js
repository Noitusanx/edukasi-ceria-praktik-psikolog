// components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-lightblue">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-4 font-medium">Halaman tidak ditemukan</p>
        <Link to="/" className="text-blue-500 underline font-semibold">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
