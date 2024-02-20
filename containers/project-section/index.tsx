"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import byte from "@/public/images/byte.jpg";
import gemini from "@/public/images/Gemini.jpg";
import newtimes from "@/public/images/newtimes.jpg";
import xiyu from "@/public/images/xiyu.jpg";
import { useRouter } from "next/navigation";

const ProjectSection = () => {
  const router = useRouter;
  return (
    <div className="p-10 flex flex-col gap-20">
      <div className="space-y-8 text-center flex flex-col items-center">
        <p className="font-medium text-xl">{`< Projects >`}</p>
        <h2 className="max-w-[466px] text-[40px] font-semibold">
          Building innovation is our passion
        </h2>
        <button className="px-5 py-4 bg-black text-white text-xl font-medium rounded-full">
          Explore all works
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-20 gap-y-10">
        <div className="space-y-8">
          <button onClick={() => router.push("/mobile")} className="block w-full">
            <div className="bg-red-200 h-[440px] relative rounded-[32px] overflow-hidden">
              <Image
                src={byte}
                alt="Byte-Social Media Apps"
                width={640}
                height={440}
                className="w-full h-full object-cover"
              />
              <div className="w-full flex gap-5 px-10 pb-10 absolute bottom-0 left-0 right-0">
                <Link
                  href={"mobile"}
                  className="px-4 py-2  bg-white font-light text-xl rounded-full"
                >
                  Mobile App
                </Link>
              </div>
            </div>
          </button>

          <Link href={"mobile"} className="font-medium text-[40px] block">
            Byte - Social Media App{" "}
          </Link>
        </div>
        <div className="space-y-8">
          <button onClick={() => router.push("/mobile")} className="block w-full">
            <div className="bg-red-200 h-[440px] relative rounded-[32px] overflow-hidden">
              <Image
                src={newtimes}
                alt="New Times - News Mobile App"
                width={640}
                height={440}
                className="w-full h-full object-cover"
              />
              <div className="w-full flex gap-5 px-10 pb-10 absolute bottom-0 left-0 right-0">
                <Link
                  href={"mobile"}
                  className="px-4 py-2  bg-white font-light text-xl rounded-full"
                >
                  Mobile App
                </Link>
                <Link
                  href={"mobile"}
                  className="px-4 py-2  bg-white font-light text-xl rounded-full"
                >
                  UI/UX
                </Link>
              </div>
            </div>
          </button>

          <Link href={"mobile"} className="font-medium text-[40px] block">
            New Times - News Mobile App
          </Link>
        </div>
        <div className="space-y-8">
          <button onClick={() => router.push("/mobile")} className="block w-full">
            <div className="bg-red-200 h-[440px] relative rounded-[32px] overflow-hidden">
              <Image
                src={gemini}
                alt="Gemini - Company Profile"
                width={640}
                height={440}
                className="w-full h-full object-cover"
              />
              <div className="w-full flex gap-5 px-10 pb-10 absolute bottom-0 left-0 right-0">
                <Link
                  href={"mobile"}
                  className="px-4 py-2  bg-white font-light text-xl rounded-full"
                >
                  Website
                </Link>
              </div>
            </div>
          </button>

          <Link href={"mobile"} className="font-medium text-[40px] block">
            Gemini - Company Profile
          </Link>
        </div>
        <div className="space-y-8">
          <button onClick={() => router.push("/mobile")} className="block w-full">
            <div className="bg-red-200 h-[440px] relative rounded-[32px] overflow-hidden">
              <Image
                src={xiyu}
                alt="XiYu - Health Mobile App"
                width={640}
                height={440}
                className="w-full h-full object-cover"
              />
              <div className="w-full flex gap-5 px-10 pb-10 absolute bottom-0 left-0 right-0">
                <Link
                  href={"XIyu"}
                  className="px-4 py-2  bg-white font-light text-xl rounded-full"
                >
                  Mobile App
                </Link>
              </div>
            </div>
          </button>
          <Link href={"mobile"} className="font-medium text-[40px] block">
            XiYu - Health Mobile App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
