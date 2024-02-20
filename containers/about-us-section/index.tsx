import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import React from "react";

const AboutUsSection = () => {
  return (
    <div className="w-full">
      <div className="p-10">
        <h2 className="mb-8 text-xl font-medium">{"< About Us >"}</h2>
        <div className="flex gap-[200px]">
          <div className="w-1/2 space-y-8">
            <div className="space-y-6">
              <p className="text-[40px] font-semibold">
                {`Unity isn't just a goal, it's our culture`}
              </p>
              <p className="text-xl leading-relaxed">
                More than just a coding community. Here, we forge unbreakable
                bonds among fellow tech enthusiasts.
              </p>
            </div>
            <button className="px-5 py-4 bg-black text-white text-xl font-medium rounded-full flex gap-2">
            <span>See More</span> <ArrowRightIcon fill="white" />
            </button>
          </div>
          <div className="w-1/2 gap-10 flex">
            <div className="w-1/2">
              <p className="text-[40px] font-medium mb-8">Member</p>
              <p className="font-medium text-[80px] mb-4">50+</p>
              <p className="text-xl">Members have already joined us</p>
            </div>
            <div className="w-1/2">
              <p className="text-[40px] font-medium mb-8">Projects</p>
              <p className="font-medium text-[80px] mb-4">20+</p>
              <p className="text-xl">Projects have been completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
