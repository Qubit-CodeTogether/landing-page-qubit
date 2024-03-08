"use client";
import Image from "next/image";
import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { projects } from "@/dummies/projects-dummy";

const ProjectSection: React.FC = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    isAtStart: true,
    isAtEnd: false,
  });
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (projectRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } =
          projectRef.current;
        setScrollState({
          isAtStart: scrollLeft === 0,
          isAtEnd:
            scrollLeft + clientWidth >= scrollWidth - 1,
        });
      }
    };

    projectRef.current?.addEventListener(
      "scroll",
      handleScroll
    );
    return () => {
      projectRef.current?.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollBy = (direction: -1 | 1) => {
    const scrollAmount =
      projectRef.current?.clientWidth || 0;
    const elementWidth =
      projectRef.current?.firstElementChild?.clientWidth ||
      0;
    const elementsInView = Math.floor(
      scrollAmount / elementWidth
    );
    projectRef.current?.scrollTo({
      left:
        projectRef.current.scrollLeft +
        direction * (elementsInView * elementWidth),
      behavior: "smooth",
    });
  };

  const handleScrollLeft = () => scrollBy(-1);
  const handleScrollRight = () => scrollBy(1);
  return (
    <div
      id={PROJECT_SECTION}
      className="p-5 lg:p-10 flex flex-col gap-20">
      <div className="flex flex-col-reverse gap-[60px] lg:flex-row">
        <div className="h-fit lg:h-full w-full lg:w-1/2 flex flex-col lg:mt-auto">
          <div className="">
            {" "}
            <div className="flex gap-[60px]">
              <button
                onClick={handleScrollLeft}
                disabled={scrollState.isAtStart}>
                <ArrowRoundedLeftIcon
                // fill={
                //   scrollState.isAtStart
                //     ? "#cfcfcf"
                //     : undefined
                // }
                />
              </button>
              <button
                onClick={handleScrollRight}
                disabled={scrollState.isAtEnd}>
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
        <div className="space-y-8 w-full lg:w-1/2 flex flex-col lg:items-end">
          <p className="font-medium text-xl">{`< Projects >`}</p>
          <h2 className="max-w-[238px] lg:max-w-[466px] text-[32px] font-semibold lg:text-end">
            Building innovation is <br /> our passion
          </h2>
          <button className="px-5 py-4 max-w-[250px] bg-black text-white text-xl font-medium rounded-full flex flex-row-reverse lg:flex-row gap-2">
            <div className=" lg:rotate-180">
              <ArrowRightIcon fill="white" />
            </div>
            <span>Explore all works</span>{" "}
          </button>
        </div>
      </div>
      <div
        className="flex  overflow-x-auto gap-x-10 no-scrollbar"
        ref={projectRef}>
        {projects.map((project) => (
          <button
            key={project.title}
            onClick={() => router.push("/")}
            className="block w-full">
            {" "}
            <div className="bg-red-200 group h-[240px] lg:h-[480px] aspect-[4/3] relative rounded-[18px] md:rounded-[32px] overflow-hidden">
              <Image
                src={project.image}
                alt="Byte-Social Media Apps"
                width={640}
                height={440}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <div className="w-full flex flex-col gap-5 px-5 pb-5 md:px-10 md:pb-10 absolute bottom-0 left-0 right-0">
                <div className="w-full flex gap-4">
                  {project.category.map((category) => (
                    <Link
                      key={category.name}
                      href={category.link}
                      className="md:px-4 md:py-2 py-1 px-2 text-[9px] md:text-base bg-white font-light rounded-full hover:scale-105"
                      onClick={(e) => e.stopPropagation()}>
                      {category.name}
                    </Link>
                  ))}
                </div>
                <div className="w-full flex">
                  <Link
                    href={project.link}
                    className="px-3 py-2 md:px-6 md:py-4 w-full text-sm flex items-center justify-between font-medium  bg-white lg:text-2xl rounded-full"
                    onClick={(e) => e.stopPropagation()}>
                    <span>{project.title}</span>
                    <ArrowRightIcon fill="black"  />
                  </Link>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
