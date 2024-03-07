"use client";

import ChevronUpIcon from "@/components/icons/ChevronUpIcon";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import { useState } from "react";

export default function Collapse({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [active, setActive] = useState(false);
  return (
    <button
      className="flex flex-col gap-10 px-5 py-7 md:px-6 w-full max-w-[784px] border rounded-md"
      onClick={() => setActive(!active)}>
      <div className="flex justify-between w-full items-center">
        <p className="text-base text-start md:text-2xl">{title}</p>
        <div className="">
          {active ? <ChevronUpIcon /> : 
          <ChevronDownIcon />}
        </div>
      </div>
      {active ? (
        <div
          className={`space-y-3 transition-all duration-500 ${
            active ? "opacity-100 h-fit" : "opacity-0 h-0"
          }`}>
          <p className="text-justify">{content}</p>
          <p className="text-blue-600 text-start">
            See More
          </p>
        </div>
      ) : null}
    </button>
  );
}
