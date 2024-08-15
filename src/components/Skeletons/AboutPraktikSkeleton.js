import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AboutPraktikSkeleton = () => {
  return (
    <div className="bg-lightblue py-14 relative">
      <div className="absolute top-0 right-0 w-1/3 sm:w-1/4">
        <Skeleton width="100%" height="100%" />
      </div>

      <div className="flex flex-col sm:flex-row w-3/4 mx-auto">
        <div className="flex justify-center sm:block sm:my-auto">
          <div className="w-3/4 sm:w-full flex justify-center items-center">
            <Skeleton circle={true} width="300px" height="300px" />
          </div>
        </div>

        <div className="mt-8 sm:ml-8 sm:mt-0 sm:w-full lg:w-2/3 sm:my-auto">
          <Skeleton width="60%" height="50px" className="my-4" />

          <Skeleton width="80%" height="80px" className="my-4" />
        </div>
      </div>
    </div>
  );
};

export default AboutPraktikSkeleton;
