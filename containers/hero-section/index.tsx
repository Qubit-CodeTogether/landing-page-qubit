import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Image from "next/image";
import React, { Fragment } from "react";
import cx from "classnames";
import Marquee from "react-fast-marquee";
import SnowFlakeIcon from "@/components/icons/SnowFlakeIcon";
import { HERO_SECTION } from "@/constants/global";
import logo from "@/public/images/logo b&w big.png";
const HeroSection = () => {
  const services: string[] = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Software Development",
  ];

  return (
    <div>
      <section
        id={HERO_SECTION}
        className={cx(
          "w-full relative flex px-5 md:px-0 flex-col gap-6 md:gap-8 items-center justify-center min-h-screen",
          "bg-[url('/images/hero-image.webp')] bg-cover bg-black text-white text-center",
          "*:relative *:z-10",
          "after:absolute after:w-full after:h-screen after:-z-0 after:bg-[#151516] after:opacity-[80%]"
        )}>
        <Image
          src={logo}
          width={60}
          height={60}
          alt="Code Bracket"
        />
        <h1 className="text-[36px] md:text-6xl font-semibold text-center">
          Small Coder’s Make
          <br /> Something Bigger
        </h1>
        <p className="text-base md:text-xl max-w-[843px]">
          Step into our vibrant community and immerse
          yourself in a world of innovation, collaboration,
          and growth.
        </p>
        <button
          className={cx(
            "flex items-center text-xl font-medium gap-2 border-2 bg-white text-black rounded-full md:rounded-2xl p-5",
            "transition-all duration-300 ease-linear",
            "hover:bg-opacity-60 hover:border-white hover:border-opacity-100"
          )}>
          <span>Let's Code</span> <ArrowRightIcon />
        </button>
      </section>
      <Marquee className="text-7xl font-semibold h-[240px] bg-[#f4f4f4]">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex gap-8 mr-8">
            <h1>{service}</h1>
            <SnowFlakeIcon />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HeroSection;
