import React from "react";
import Main from "../components/ArticlesComponents/Main";
import Cards from "../components/ArticlesComponents/Cards";

const articles = () => {
  return (
    <div className="font-roboto">
      <section>
        <Main />
      </section>
      <section>
        <Cards />
      </section>
    </div>
  );
};

export default articles;
