import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ContactSkeleton = () => {
  return (
    <div className="bg-darkgreen py-16">
      <div className="w-11/12 md:w-4/5 mx-auto bg-[#8CEDC3] rounded-[30px] p-6 sm:p-12 shadow-custom">
        <div className="text-center mb-5">
          <Skeleton width={200} height={40} />
        </div>
        <div className="text-center mb-6">
          <Skeleton width={300} height={20} />
          <Skeleton width={400} height={60} className="mt-4" />
        </div>

        <div className="w-56 sm:w-64 h-[2px] bg-black mx-auto mb-10">
          <Skeleton width="100%" height="2px" />
        </div>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="flex flex-col justify-between p-6 bg-[#B2E0B4] rounded-xl border border-black mb-6 sm:mb-0 sm:mr-4 sm:w-3/4 text-sm md:text-base">
            <div className="font-medium">
              <div className="flex items-center my-3">
                <Skeleton
                  width={24}
                  height={24}
                  circle={true}
                  className="mr-2"
                />
                <Skeleton width={100} height={20} />
              </div>
              <div className="flex items-center my-3">
                <Skeleton
                  width={24}
                  height={24}
                  circle={true}
                  className="mr-2"
                />
                <Skeleton width={200} height={20} />
              </div>
              <div className="flex items-start my-3">
                <Skeleton
                  width={24}
                  height={24}
                  circle={true}
                  className="mr-3"
                />
                <div>
                  <Skeleton width={100} height={20} />
                  <Skeleton width={150} height={20} className="mt-2" />
                </div>
              </div>
              <div className="items-center my-2">
                <div className="flex items-center">
                  <Skeleton
                    width={24}
                    height={24}
                    circle={true}
                    className="mr-3"
                  />
                  <Skeleton width={250} height={40} />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Skeleton width={24} height={24} circle={true} className="mr-3" />
              <Skeleton width={24} height={24} circle={true} />
            </div>
          </div>
          <div className="w-full sm:my-auto">
            <Skeleton width="100%" height={200} borderRadius={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;
