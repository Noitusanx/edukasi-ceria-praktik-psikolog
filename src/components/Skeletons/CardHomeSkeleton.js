import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardHomeSkeleton = () => {
  return (
    <div className="bg-darkgreen py-16 border-[1px] border-black slider-container relative">
      <div className="w-3/4 mx-auto">
        <div className="flex overflow-x-hidden gap-4 justify-center">
          <div className="flex-shrink-0 w-full ss:w-2/3 lg:w-1/3">
            <div className="pb-5 rounded-3xl border-[1px] border-black flex flex-col min-h-[330px]">
              <div className="h-40 overflow-hidden rounded-t-3xl">
                <Skeleton
                  height="100%"
                  width="100%"
                  className="rounded-t-3xl"
                />
              </div>
              <div className="mt-5 flex-grow flex flex-col px-5">
                <Skeleton height={30} width="80%" />
                <Skeleton height={20} width="60%" className="mt-1" />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full ss:w-2/3 lg:w-1/3">
            <div className="pb-5 rounded-3xl border-[1px] border-black flex flex-col min-h-[330px]">
              <div className="h-40 overflow-hidden rounded-t-3xl">
                <Skeleton
                  height="100%"
                  width="100%"
                  className="rounded-t-3xl"
                />
              </div>
              <div className="mt-5 flex-grow flex flex-col px-5">
                <Skeleton height={30} width="80%" />
                <Skeleton height={20} width="60%" className="mt-1" />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full ss:w-2/3 lg:w-1/3">
            <div className="pb-5 rounded-3xl border-[1px] border-black flex flex-col min-h-[330px]">
              <div className="h-40 overflow-hidden rounded-t-3xl">
                <Skeleton
                  height="100%"
                  width="100%"
                  className="rounded-t-3xl"
                />
              </div>
              <div className="mt-5 flex-grow flex flex-col px-5">
                <Skeleton height={30} width="80%" />
                <Skeleton height={20} width="60%" className="mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHomeSkeleton;
