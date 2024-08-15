import React from "react";
import { Link } from "react-router-dom";
import articles from "../../data/Articles";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Main = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articles[0].title,
    image: articles[0].image,
    datePublished: articles[0].date,
    author: {
      "@type": "Person",
      name: "Edukasi Ceria",
    },
    description: articles[0].text,
  };

  return (
    <>
      <Helmet>
        <title>Artikel Psikologi - Edukasi Ceria</title>
        <meta
          name="description"
          content="Baca artikel psikologi dari Edukasi Ceria yang membahas kesehatan mental, emosional, dan perilaku. Temukan wawasan penting tentang psikologi di sini."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>
      <div className="bg-lightblue">
        <section className="w-11/12 sm:w-4/5 py-14 mx-auto hidden sm:block">
          <motion.div
            className="flex flex-col sm:flex-row"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="bg-[#DDF2FD] p-6 sm:pt-7 sm:px-10 sm:pb-5 sm:mr-7 border-[1px] border-black rounded-xl flex flex-col justify-between h-full mb-8 sm:mb-0 sm:w-3/5 hover:animate-pulse"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/artikel/${articles[0].slug}`}>
                <div>
                  <img
                    src={articles[0].image}
                    alt={`Gambar tentang ${articles[0].title}`}
                    className="mb-4 w-4/5 sm:w-1/2 mx-auto"
                  />
                  <h1 className="font-bold xl:text-[2.5rem] lg:text-3xl text-2xl my-3 sm:my-6">
                    {articles[0].title}
                  </h1>
                  <p className="lg:text-lg text-base line-clamp-6">
                    {articles[0].text}
                  </p>
                </div>
                <p className="text-[#6e6e6e] mt-5 sm:text-sm">
                  {articles[0].date}
                </p>
              </Link>
            </motion.div>
            <div className="flex flex-col sm:w-2/5 sm:text-sm my-auto">
              {articles.slice(1, 3).map((article, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to={`/artikel/${article.slug}`}>
                    <div className="bg-[#DDF2FD] p-6 sm:pt-6 sm:px-8 sm:pb-4 border-[1px] border-black rounded-lg md:mb-5 sm:mb-5 mb-3 hover:opacity-60">
                      <h1 className="font-bold xl:text-2xl lg:text-xl text-lg mb-2">
                        {article.title}
                      </h1>
                      <p className="text-sm sm:text-base lg:text-lg line-clamp-3">
                        {article.text}
                      </p>
                      <p className="text-[#6e6e6e] mt-4">{article.date}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <Link to="/artikel/konsultasi-psikologis">
                  <div className="bg-[#DDF2FD] sm:pt-6 sm:px-8 sm:pb-4 border-[1px] border-black rounded-lg mb-8 sm:hidden lg:block hover:opacity-60">
                    <h1 className="font-bold xl:text-2xl lg:text-xl text-lg mb-2">
                      Konsultasi Psikologis: Solusi Tepat untuk Masalah
                      Kesehatan Mental dan Emosional
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg line-clamp-3">
                      Kesehatan mental dan emosional merupakan bagian penting
                      dari kesejahteraan keseluruhan seseorang. Ketika
                      menghadapi tantangan dalam aspek ini, konsultasi
                      psikologis dapat menjadi langkah yang sangat bermanfaat.
                      Artikel ini membahas pentingnya konsultasi psikologis
                      untuk masalah kesehatan mental dan emosional, serta
                      bagaimana layanan ini dapat membantu individu mengatasi
                      berbagai isu yang mungkin mereka hadapi.
                    </p>
                    <p className="text-[#6e6e6e] mt-4">25 Juli 2024</p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Main;
