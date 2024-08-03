import React from "react";
import AboutPraktik from "../components/AboutComponents/AboutPraktik";
import Profile from "../components/AboutComponents/Profile";
import Contact from "../components/AboutComponents/Contact";

const about = () => {
  return (
    <div className="font-roboto">
      <section>
        <AboutPraktik />
      </section>
      <section>
        <Profile />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default about;
