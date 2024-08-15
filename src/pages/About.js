import React, { Suspense, lazy } from "react";
import AboutPraktikSkeleton from "../components/Skeletons/AboutPraktikSkeleton";
import ProfileSkeleton from "../components/Skeletons/ProfileSkeleton";
import ContactSkeleton from "../components/Skeletons/ContactSkeleton";

const AboutPraktik = lazy(() =>
  import("../components/AboutComponents/AboutPraktik")
);
const Profile = lazy(() => import("../components/AboutComponents/Profile"));
const Contact = lazy(() => import("../components/AboutComponents/Contact"));

const About = () => {
  return (
    <div className="font-roboto">
      <Suspense fallback={<AboutPraktikSkeleton />}>
        <section>
          <AboutPraktik />
        </section>
      </Suspense>
      <Suspense fallback={<ProfileSkeleton />}>
        <section>
          <Profile />
        </section>
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <section>
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default About;
