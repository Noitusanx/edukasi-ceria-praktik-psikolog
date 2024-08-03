import React from "react";
import { Link } from "react-router-dom";
import articles from "../../data/Articles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Cards = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-darkgreen py-12 border-t-[1px] border-black">
      <section className="w-11/12 sm:w-4/5 mx-auto">
        <motion.h1
          className="bg-[#A7E7D7] text-3xl sm:text-4xl font-bold text-center py-3 sm:py-5 rounded-full xs:w-4/5 md:w-2/3 mx-auto border-black border-[1px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Seluruh Artikel
        </motion.h1>
        <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-6 mt-11 mb-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={`/artikel/${article.slug}`}
              className="h-full"
            >
              <motion.div
                className="px-2 h-full"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#A7E7D7] p-5 rounded-[10px] border-[1px] border-black hover:opacity-70 flex flex-col h-full">
                  <div>
                    <img
                      src={article.image}
                      alt="Artikel Image"
                      className="w-full h-40 object-cover rounded-[10px]"
                    />
                  </div>
                  <div className="mt-5 flex-grow">
                    <h1 className="text-xl font-bold">{article.title}</h1>
                    <p className="line-clamp-3">{article.text}</p>
                  </div>
                  <div className="text-[#6e6e6e] mt-4">
                    <p>{article.date}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cards;
