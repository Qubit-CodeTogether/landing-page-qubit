import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import { JOIN_US_SECTION } from "@/constants/global";
import Image from "next/image";
import React from "react";

const JoinUsSection = () => (
  <div
    id={JOIN_US_SECTION}  
    className="flex flex-col gap-12 items-center justify-center py-[100px] text-center">
    <h1 className="text-[40px] font-medium text-[#151516]">
      We Code and Collaborate, <br /> Together We Elevate
    </h1>
    <p className="text-[#444445]">
      Discover the synergy of our community and <br /> be a
      part of us
    </p>
    <button className="flex items-center justify-center gap-2 text-white bg-[#151516] hover:bg-[#5b5b60] rounded-[32px] px-[20px] py-[16px]">
      <span>Let’s Code with Us</span>
      <ArrowRightIcon fill="#ffffff" />
    </button>
    <Image
      className="rounded-[32px]"
      src={"/images/joinus-hero.webp"}
      width={500}
      height={300}
      alt="Join Us Hero Image"
    />
  </div>
);

export default JoinUsSection;
