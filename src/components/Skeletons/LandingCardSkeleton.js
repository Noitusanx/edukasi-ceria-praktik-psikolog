import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LandingCardSkeleton = () => {
  return (
    <div className="bg-lightblue py-8">
      <div className="bg-primary sm:py-28 py-14 w-4/5 mx-auto border-[1px] border-black rounded-xl sm:rounded-[50px]">
        <div className="w-4/5 mx-auto">
          <div className="flex justify-between gap-10 flex-col sm:flex-row">
            <div className="items-center my-auto sm:w-3/4 w-full">
              <Skeleton height={50} width="60%" />
              <Skeleton height={20} width="80%" style={{ marginTop: "1rem" }} />
              <Skeleton height={40} width={150} style={{ marginTop: "2rem" }} />
            </div>
            <div className="w-2/3 min-w-[224px] my-auto mx-auto sm:mx-0">
              <Skeleton height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCardSkeleton;
