import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CarouselHomeSkeleton = () => {
  const skeletonItems = Array(3).fill(null);

  return (
    <section id="trending" className="bg-pink py-10">
      <div className="container mx-auto w-4/5 relative">
        <div className="flex justify-center">
          {skeletonItems.map((_, index) => (
            <div key={index} className="w-4/5 ss:w-2/3 lg:w-1/3 mx-2">
              <div className="w-full h-64">
                <Skeleton height="100%" width="100%" className="rounded-lg" />
              </div>
            </div>
          ))}
        </div>
        <div className="custom-navigation flex justify-center items-center ss:w-1/2 sm:w-1/3 lg:w-1/5 mx-auto mt-4">
          <div className="custom-swiper-button-prev text-2xl text-gray-700 cursor-pointer">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <div className="custom-swiper-pagination flex justify-center items-center mx-4">
            <Skeleton width={100} height={20} />
          </div>
          <div className="custom-swiper-button-next text-2xl text-gray-700 cursor-pointer">
            <Skeleton circle={true} height={40} width={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselHomeSkeleton;
