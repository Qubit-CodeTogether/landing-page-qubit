"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/images/logo.png";

interface NavbarButton {
  hidden?: boolean;
}

interface UserComponentProps {
  extras?: NavbarButton;
  children?: React.ReactNode;
}

const NavbarButton: React.FC<UserComponentProps> = ({
  extras,
  children,
}) => (
  <div
    className={`cursor-pointer bg-transparent border-solid border-[1px] rounded-[12px] py-[0.25rem] px-[1rem] border-white ${
      extras?.hidden
        ? "hidden opacity-0"
        : "visible opacity-100"
    } transition-opacity`}>
    <p className="text-[1rem]">{children}</p>
  </div>
);

const NavbarText = (props: any) => (
  <p className="cursor-pointer text-[1rem] text-center">
    {props.children}
  </p>
);

const Navbar = () => {
  let timer: NodeJS.Timeout | null = null;
  const unScrolled =
    "z-50 fixed p-4 h-[80px] w-full flex flex-row justify-between items-center bg-transparent text-white";
  const scrolled =
    "z-50 fixed p-4 h-[80px] w-full flex flex-row justify-between items-center bg-black text-white";
  const [scrolledProps, setScrolledProps] =
    useState(unScrolled);

  useEffect(() => {
    // Function to be called when component mounts
    const handleNavbar = () => {
      if (timer) clearTimeout(timer);
      if (window.scrollY <= 80)
        setScrolledProps(unScrolled);

      timer = setTimeout(() => {
        if (window.scrollY > 0) setScrolledProps(scrolled);
      }, 150);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleNavbar);

    // Function to clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-500 ${scrolledProps}`}>
      <div className="flex justify-start">
        <div className="flex flex-row">
          <Image
            height={720}
            width={1280}
            src={logo}
            alt="navbar-logo"
            className="w-[1.5rem] h-[1.5rem] mr-3"
          />
          <NavbarText>Qubit</NavbarText>
        </div>
      </div>
      <div className="flex space-x-10 justify-end items-center">
        <NavbarText>About Us</NavbarText>
        <NavbarText>Project</NavbarText>
        <NavbarText>Testimonial</NavbarText>
        <NavbarButton>Join us</NavbarButton>
      </div>
    </div>
  );
};

export default Navbar;
