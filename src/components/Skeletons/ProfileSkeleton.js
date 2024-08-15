import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileSkeleton = () => {
  return (
    <div className="bg-orange py-14 border-black border-y-[1px]">
      <div className="w-3/4 mx-auto">
        <div className="mb-4 text-center">
          <Skeleton width={200} height={40} />
        </div>

        <div className="text-center mb-6">
          <Skeleton width={300} height={20} />
          <Skeleton width={400} height={60} className="mt-4" />
        </div>

        <div className="w-56 sm:w-64 h-[2px] bg-black mx-auto mb-10">
          <Skeleton width="100%" height="2px" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-3/4 mx-auto">
          <div className="flex justify-center">
            <Skeleton width={150} height={200} borderRadius={8} />
          </div>
          <div className="flex justify-center sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2">
            <Skeleton width={150} height={200} borderRadius={8} />
          </div>
          <div className="flex justify-center">
            <Skeleton width={150} height={200} borderRadius={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
