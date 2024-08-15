import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import LandingCardSkeleton from "../components/Skeletons/LandingCardSkeleton";
import CardHomeSkeleton from "../components/Skeletons/CardHomeSkeleton";
import CarouselHomeSkeleton from "../components/Skeletons/CarouselHomeSkeleton";
import BookLandingSkeleton from "../components/Skeletons/BookLandingSkeleton";

const LandingCard = lazy(() =>
  import("../components/HomeComponents/LandingCard")
);
const Card = lazy(() => import("../components/HomeComponents/Card"));
const CarouselImages = lazy(() =>
  import("../components/HomeComponents/Carousel")
);
const BookLanding = lazy(() =>
  import("../components/HomeComponents/BookLanding")
);

const Home = () => {
  return (
    <>
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Edukasi Ceria",
              url: "https://edukasi-ceria.com/",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "General Inquiry",
                email: "ceriaedukasi@gmail.com",
              },
            }),
          }}
        />
      </Helmet>
      <div className="font-roboto">
        <Suspense fallback={<LandingCardSkeleton />}>
          <section>
            <LandingCard />
          </section>
        </Suspense>

        <Suspense fallback={<CardHomeSkeleton />}>
          <section>
            <Card />
          </section>
        </Suspense>

        <Suspense fallback={<CarouselHomeSkeleton />}>
          <section>
            <CarouselImages />
          </section>
        </Suspense>

        <Suspense fallback={<BookLandingSkeleton />}>
          <section>
            <BookLanding />
          </section>
        </Suspense>
      </div>
    </>
  );
};

export default Home;
