import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const BookLandingSkeleton = () => {
  return (
    <div className="bg-orange py-10 border-t-[1px] border-black">
      <div className="flex flex-col sm:flex-row w-3/4 mx-auto border-[1px] border-black rounded-[10px]">
        <div className="bg-[#F2EADD] border-b sm:border-b-0 border-black rounded-t-[10px] flex items-center md:w-1/2 sm:order-2 sm:rounded-tl-none sm:rounded-br-[10px]">
          <Skeleton width={176} height={176} className="mx-auto" />
        </div>
        <div className="bg-[#C8E6C9] w-full md:w-2/3 sm:p-8 px-5 pb-7 p-6 rounded-b-[10px] md:order-1 sm:border-r-black sm:border-[1px] sm:rounded-tl-[10px] sm:rounded-br-none">
          <Skeleton width="60%" height={40} />
          <Skeleton width="100%" height={80} className="mt-3" />
          <Skeleton width="30%" height={40} className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default BookLandingSkeleton;
