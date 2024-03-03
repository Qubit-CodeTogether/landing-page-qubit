"use client";

import ChevronUpIcon from "@/components/icons/ChevronUpIcon";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import { useState } from "react";


const FAQ = [
  {
    title : "Who can join Qube IT?",
    content : "Qube IT is open to anyone passionate about technology, regardless of their level of expertise or background. Whether you're a seasoned professional or just starting out in your tech journey, ..."
  },
  {
    title: "Is there a cost to join Qube IT?",
    content : "Qube IT is open to anyone passionate about technology, regardless of their level of expertise or background. Whether you're a seasoned professional or just starting out in your tech journey, ..."
  },
  {
    title: "How can I get involved in Qube IT projects?",
    content : "Qube IT is open to anyone passionate about technology, regardless of their level of expertise or background. Whether you're a seasoned professional or just starting out in your tech journey, ..."
  },
  {
    title: "I'm new to coding/technology. Is Qube IT suitable for me?",
    content : "Qube IT is open to anyone passionate about technology, regardless of their level of expertise or background. Whether you're a seasoned professional or just starting out in your tech journey, ..."
  }
]
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
      className="flex flex-col gap-10  py-7 px-6 w-[784px] border rounded-md"
      onClick={() => setActive(!active)}>
      <div className="flex justify-between w-full">
        <p className="text-2xl">{title}</p>
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
