"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import byte from "@/public/images/byte.jpg";
import gemini from "@/public/images/Gemini.jpg";
import newtimes from "@/public/images/newtimes.jpg";
import xiyu from "@/public/images/xiyu.jpg";
import { PROJECT_SECTION } from "@/constants/global";
import { useRouter } from "next/navigation";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ArrowRoundedRightIcon from "@/components/icons/ArrowRoundedRightIcon";
import ArrowRoundedLeftIcon from "@/components/icons/ArrowRoundedLeftIcon";

const ProjectSection = () => {
  const router = useRouter();
  return (
    <div
      id={PROJECT_SECTION}
      className="p-10 flex flex-col gap-20">
      <div className="grid-cols-2 grid">
        <div className="h-full flex flex-col justify-end">
          <div className="">
            {" "}
            <div className="flex gap-[60px]">
              <button
              // onClick={handleScrollLeft}
              // disabled={scrollState.isAtStart}>
              >
                <ArrowRoundedLeftIcon
                // fill={
                //   scrollState.isAtStart
                //     ? "#cfcfcf"
                //     : undefined
                // }
                />
              </button>
              <button
              // onClick={handleScrollRight}
              // disabled={scrollState.isAtEnd}
              >
                <ArrowRoundedRightIcon
                // fill={
                //   scrollState.isAtEnd
                //     ? "#cfcfcf"
                //     : undefined
                // }
                />
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-8 flex flex-col items-end">
          <p className="font-medium text-xl">{`< Projects >`}</p>
          <h2 className="max-w-[466px] text-[32px] font-semibold text-end">
            Building innovation is <br /> our passion
          </h2>
          <button className="px-5 py-4 bg-black text-white text-xl font-medium rounded-full flex gap-2">
            <div className="rotate-180">
            <ArrowRightIcon
              fill="white"
            />
            </div>
            <span>Explore all works</span>{" "}
          </button>
        </div>
      </div>
      <div className="flex  overflow-x-auto gap-x-10 no-scrollbar">
        <button
          onClick={() => router.push("/")}
          className="block w-full">
          {" "}
          <div className="bg-red-200 h-[480px] aspect-[4/3] relative rounded-[32px] overflow-hidden">
            <Image
              src={byte}
              alt="Byte-Social Media Apps"
              width={640}
              height={440}
              className="w-full h-full object-cover"
            />
            <div className="w-full flex flex-col gap-5 px-10 pb-10 absolute bottom-0 left-0 right-0">
              <div className="w-full flex">
                <Link
                  href={"/"}
                  className="px-4 py-2  bg-white font-light rounded-full">
                  Mobile App
                </Link>
              </div>
              <div className="w-full flex">
                <Link
                  href={"/"}
                  className="px-6 py-4 w-full flex justify-between font-medium  bg-white text-2xl rounded-full">
                  <span>Byte - Social Media App </span>
                  <ArrowRightIcon fill="black" />
                </Link>
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={() => router.push("/")}
          className="block w-full">
          {" "}
          <div className="bg-red-200 h-[480px] aspect-[4/3] relative rounded-[32px] overflow-hidden">
            <Image
              src={newtimes}
              alt="New Times - News Mobile App"
              width={640}
              height={440}
              className="w-full h-full object-cover"
            />
            <div className="w-full flex flex-col gap-5 px-10 pb-10 absolute bottom-0 left-0 right-0">
              <div className="w-full flex gap-5">
                <Link
                  href={"/"}
                  className="px-4 py-2  bg-white font-light text-xl rounded-full">
                  Mobile App
                </Link>
                <Link
                  href={"/"}
                  className="px-4 py-2  bg-white font-light text-xl rounded-full">
                  UI/UX
                </Link>
              </div>
              <div className="w-full flex">
                <Link
                  href={"/"}
                  className="px-6 py-4 w-full flex justify-between font-medium  bg-white text-2xl rounded-full">
                  <span> New Times - News Mobile App</span>
                  <ArrowRightIcon fill="black" />
                </Link>
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={() => router.push("/")}
          className="block w-full">
          {" "}
          <div className="bg-red-200 h-[480px] aspect-[4/3] relative rounded-[32px] overflow-hidden">
            <Image
              src={gemini}
              alt="Gemini - Company Profile"
              width={640}
              height={440}
              className="w-full h-full object-cover"
            />
              <div className="w-full flex flex-col gap-5 px-10 pb-10 absolute bottom-0 left-0 right-0">
              <div className="w-full flex gap-5">
                <Link
                  href={"/"}
                  className="px-4 py-2  bg-white font-light text-xl rounded-full">
                  Website
                </Link>
              
              </div>
              <div className="w-full flex">
                <Link
                  href={"/"}
                  className="px-6 py-4 w-full flex justify-between font-medium  bg-white text-2xl rounded-full">
                  <span> Gemini - Company Profile</span>
                  <ArrowRightIcon fill="black" />
                </Link>
              </div>
            </div>
          </div>
        </button>

        <button
          onClick={() => router.push("/")}
          className="block w-full">
          {" "}
          <div className="bg-red-200 h-[480px] aspect-[4/3] relative rounded-[32px] overflow-hidden">
            <Image
              src={xiyu}
              alt="XiYu - Health Mobile App"
              width={640}
              height={440}
              className="w-full h-full object-cover"
            />
              <div className="w-full flex flex-col gap-5 px-10 pb-10 absolute bottom-0 left-0 right-0">
              <div className="w-full flex gap-5">
                <Link
                  href={"/"}
                  className="px-4 py-2  bg-white font-light text-xl rounded-full">
                  Mobile App
                </Link>
                
              </div>
              <div className="w-full flex">
                <Link
                  href={"/"}
                  className="px-6 py-4 w-full flex justify-between font-medium  bg-white text-2xl rounded-full">
                  <span>XiYu - Health Mobile App</span>
                  <ArrowRightIcon fill="black" />
                </Link>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
