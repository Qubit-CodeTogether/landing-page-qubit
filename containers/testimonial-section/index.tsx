"use client";
import React, { useRef, useState, useEffect } from "react";
import ArrowRoundedLeftIcon from "@/components/icons/ArrowRoundedLeftIcon";
import ArrowRoundedRightIcon from "@/components/icons/ArrowRoundedRightIcon";
import { testimonials } from "@/dummies/testimonials-dummy";
import Image from "next/image";
import { StarIcon } from "@/components/icons/StarIcon";
import { TESTIMONIAL_SECTION } from "@/constants/global";

const TestimonialSection: React.FC = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    isAtStart: true,
    isAtEnd: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (testimonialRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } =
          testimonialRef.current;
        setScrollState({
          isAtStart: scrollLeft === 0,
          isAtEnd:
            scrollLeft + clientWidth >= scrollWidth - 1,
        });
      }
    };

    testimonialRef.current?.addEventListener(
      "scroll",
      handleScroll
    );
    return () => {
      testimonialRef.current?.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollBy = (direction: -1 | 1) => {
    const scrollAmount =
      testimonialRef.current?.clientWidth || 0;
    const elementWidth =
      testimonialRef.current?.firstElementChild
        ?.clientWidth || 0;
    const elementsInView = Math.floor(
      scrollAmount / elementWidth
    );
    testimonialRef.current?.scrollTo({
      left:
        testimonialRef.current.scrollLeft +
        direction * (elementsInView * elementWidth),
      behavior: "smooth",
    });
  };

  const handleScrollLeft = () => scrollBy(-1);
  const handleScrollRight = () => scrollBy(1);
  return (
    <div
      id={TESTIMONIAL_SECTION}
      className="flex flex-col px-5 md:px-10 mt-[100px] py-[40px]">
      <h2 className="mb-8 text-2xl font-medium">
        {"< Testimonials >"}
      </h2>
      <div className="flex flex-col lg:flex-row gap-[60px] w-full lg:items-end justify-between">
        <h1 className="font-semibold text-[32px]">
          How is our members <br /> experience?
        </h1>
        <div className="flex gap-[60px]">
          <button
            onClick={handleScrollLeft}
            disabled={scrollState.isAtStart}>
            <ArrowRoundedLeftIcon
              fill={
                scrollState.isAtStart
                  ? "#cfcfcf"
                  : undefined
              }
            />
          </button>
          <button
            onClick={handleScrollRight}
            disabled={scrollState.isAtEnd}>
            <ArrowRoundedRightIcon
              fill={
                scrollState.isAtEnd ? "#cfcfcf" : undefined
              }
            />
          </button>
        </div>
      </div>
      <hr className="my-[80px]" />
      <div
        ref={testimonialRef}
        className="flex flex-nowrap overflow-x-hidden relative mb-10">
        {testimonials.map(
          (
            { name, avatar, message, rate, role },
            index
          ) => (
            <div
              key={index}
              className="flex flex-col gap-10 w-full md:w-1/2 px-0 md:px-8 flex-shrink-0">
              <div className="flex gap-4 items-center">
                <Image
                  alt="avatar"
                  src={`/images/${avatar}`}
                  width={80}
                  height={80}
                  blurDataURL="/data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  loading="lazy"
                />
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-medium">
                    {name}
                  </span>
                  <span className="text-xl text-[#151516] opacity-60">
                    {role}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                {Array.from(
                  { length: rate },
                  (_, index) => (
                    <span key={index}>
                      <StarIcon />
                    </span>
                  )
                )}
              </div>
              <div className="text-2xl md:text-3xl text-[#444445]">
                {message}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
