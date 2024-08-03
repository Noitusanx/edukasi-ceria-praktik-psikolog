import React from "react";
import MainEvent from "../components/EventsComponents/MainEvent";
import CardEvents from "../components/EventsComponents/CardEvents";

const events = () => {
  return (
    <div className="font-roboto">
      <section>
        <MainEvent />
      </section>
      <section>
        <CardEvents />
      </section>
    </div>
  );
};

export default events;
