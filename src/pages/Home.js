import React from "react";
import LandingCard from "../components/HomeComponents/LandingCard";
import Card from "../components/HomeComponents/Card";
import CarouselImages from "../components/HomeComponents/Carousel";
import BookLanding from "../components/HomeComponents/BookLanding";

const Home = () => {
  return (
    <div className="font-roboto">
      <section>
        <LandingCard />
      </section>
      <section>
        <Card />
      </section>
      <section>
        <CarouselImages />
      </section>
      <section>
        <BookLanding />
      </section>
    </div>
  );
};

export default Home;
