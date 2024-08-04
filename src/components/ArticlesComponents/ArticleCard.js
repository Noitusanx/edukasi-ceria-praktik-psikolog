/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import articles from "../../data/Articles";
import arrowback from "../../images/back.png";
import { useLink } from "../LinkContext";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

const CardArticle = () => {
  const { slug } = useParams();
  const article = articles.find((article) => article.slug === slug);

  const { setActiveLink } = useLink();

  const handleLinkClick = () => {
    setActiveLink("/artikel");
  };

  if (!article) {
    return <div>Artikel tidak ditemukan</div>;
  }

  const filteredArticles = articles.filter((item) => item.slug !== slug);
  const randomArticles = shuffleArray(filteredArticles).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-[#C8E6C9]">
      <ScrollIndicator />
      <section className="mx-auto w-11/12 sm:w-4/5 py-12">
        <div className="mb-4">
          <Link to="/artikel" onClick={handleLinkClick}>
            <button className="flex items-center bg-[#A7E7D7] space-x-2 py-2 px-4 rounded-lg border-[1px] border-black hover:opacity-60">
              <img src={arrowback} alt="Back" className="w-6 h-6" />
            </button>
          </Link>
        </div>
        <div className="bg-[#A7E7D7] p-6 sm:p-10 border-black border-[1px] rounded-lg">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-7 text-center w-full md:w-4/5 mx-auto">
            {article.title}
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center mb-4 sm:mb-6">
            <hr className="border-t-2 border-gray-400 w-full sm:w-1/4 mr-0 sm:mr-3" />
            <p className="text-[#6e6e6e] text-center">{article.date}</p>
            <hr className="border-t-2 border-gray-400 w-full sm:w-1/4 ml-0 sm:ml-3" />
          </div>
          <img
            src={article.image}
            alt="Artikel"
            className="rounded-2xl mb-4 mx-auto w-full md:w-3/5 border-[1px] border-gray-400"
          />
          <div className="leading-relaxed w-full md:w-4/5 mt-8 mx-auto md:text-[18px] sm:text-[17px] text-base">
            {React.createElement(article.component)}
          </div>
        </div>
        <div className="bg-[#A7E7D7] mt-8 px-6 sm:px-10 border-[1px] border-black rounded-lg">
          <h1 className="text-2xl sm:text-3xl font-bold my-5">Baca Juga</h1>
          <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {randomArticles.map((article, index) => {
              const { ref, inView } = useInView({
                threshold: 0.1,
                triggerOnce: true,
              });

              return (
                <Link key={index} to={`/artikel/${article.slug}`}>
                  <div className="px-2">
                    <motion.div
                      ref={ref}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#B9ECFC] p-5 rounded-[10px] border-[1px] border-black h-full transition-transform duration-300 ease-in-out "
                    >
                      <div>
                        <img
                          src={article.image}
                          alt="Card Image"
                          className="w-full h-40 object-cover rounded-[10px]"
                        />
                      </div>
                      <div className="mt-5">
                        <h1 className="text-xl font-bold">{article.title}</h1>
                        <p className="line-clamp-3">{article.text}</p>
                        <p className="text-[#6e6e6e] mt-4">{article.date}</p>
                      </div>
                    </motion.div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardArticle;
