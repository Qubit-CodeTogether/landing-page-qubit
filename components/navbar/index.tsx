"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.png";
import {
  ABOUT_US_SECTION,
  HERO_SECTION,
  PROJECT_SECTION,
  TESTIMONIAL_SECTION,
} from "@/constants/global";

interface NavbarButtonExtendedProps {
  hidden?: boolean;
}

interface NavbarText {
  children?: React.ReactNode;
  onClick?: () => void;
}

interface NavbarButton {
  extended?: NavbarButtonExtendedProps;
  children?: React.ReactNode;
  onClick?: () => void;
}

const handleScrollGoTo = (arg: string) => {
  document.getElementById(arg)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

const NavbarButton: React.FC<NavbarButton> = ({
  extended,
  children,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer bg-transparent border-solid border-[1px] rounded-[12px] py-[0.25rem] px-[1rem] border-white ${
      extended?.hidden
        ? "hidden opacity-0"
        : "visible opacity-100"
    } transition-opacity`}>
    <p className="text-[1rem]">{children}</p>
  </div>
);

const NavbarText: React.FC<NavbarText> = ({
  children,
  onClick,
}) => (
  <p
    onClick={onClick}
    className="cursor-pointer text-[1rem] text-center">
    {children}
  </p>
);

const Navbar = () => {
  let timer: NodeJS.Timeout | null = null;
  const logoProps = {
    height: 720,
    width: 1280,
  };
  const unScrolled = "bg-transparent";
  const scrolled = "bg-black";
  const [scrolledProps, setScrolledProps] =
    useState(unScrolled);

  useEffect(() => {
    const handleNavbar = () => {
      if (timer) clearTimeout(timer);
      if (window.scrollY <= 80)
        setScrolledProps(unScrolled);

      timer = setTimeout(() => {
        if (window.scrollY > 0) setScrolledProps(scrolled);
      }, 150);
    };

    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-500 z-50 fixed p-4 h-[80px] w-full flex flex-row justify-between items-cente text-white ${scrolledProps}`}>
      <div className="cursor-pointer flex justify-start">
        <div
          onClick={() => handleScrollGoTo(HERO_SECTION)}
          className="flex flex-row">
          <Image
            height={logoProps.height}
            width={logoProps.width}
            src={logo}
            alt="navbar-logo"
            className="w-[1.5rem] h-[1.5rem] mr-3"
          />
          <NavbarText>Qubit</NavbarText>
        </div>
      </div>
      <div className="flex space-x-10 justify-end items-center">
        <NavbarText
          onClick={() =>
            handleScrollGoTo(ABOUT_US_SECTION)
          }>
          About Us
        </NavbarText>
        <NavbarText
          onClick={() => handleScrollGoTo(PROJECT_SECTION)}>
          Project
        </NavbarText>
        <NavbarText
          onClick={() =>
            handleScrollGoTo(TESTIMONIAL_SECTION)
          }>
          Testimonial
        </NavbarText>
        <NavbarButton
          onClick={() => alert("Tambahin link buat join")}>
          Join us
        </NavbarButton>
      </div>
    </div>
  );
};

export default Navbar;
