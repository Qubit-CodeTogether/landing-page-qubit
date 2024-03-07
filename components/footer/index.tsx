import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo b&w big.png";
import Link from "next/link";
import { FOOTER_SECTION } from "../../constants/global.js";

const Footer = () => (
  <div
    id={FOOTER_SECTION}
    className="p-5 py-10 md:p-10 bg-black space-y-10 gap-5">
    <div className="flex justify-between gap-5 flex-col md:flex-row md:items-center">
      <p className="text-[80px] md:text-[100px] font-extrabold text-white max-w-[430px] leading-none">
        TIME TO CODE
      </p>
      <Image
        src={logo}
        alt="logo"
        width={980}
        height={980}
        className="aspect-square w-auto h-auto max-w-[232px] max-h-[232px]"
      />
    </div>
    <div className="py-[73px] flex gap-[73px] border-y border-white">
      <div className="flex flex-col gap-4 text-white">
        <p className="font-bold">Social Media</p>
        <Link href={"#"}>Discord</Link>
        <Link href={"#"}>Instagram</Link>
        <Link href={"#"}>Youtube</Link>
      </div>
      <div className="flex flex-col gap-4 text-white">
        <p className="font-bold">Email</p>
        <Link href={"mailto:"}>CubeIT@gmail.com</Link>
      </div>
    </div>
    <p className="text-white">
      Copyright ©Cube IT. All rights reserved. 2024
    </p>
  </div>
);

export default Footer;
