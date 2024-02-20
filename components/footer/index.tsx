import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { FOOTER_SECTION } from "../../constants/global.js";

const Footer = () => (
  <div
    id={FOOTER_SECTION}
    className="p-10 bg-black space-y-10">
    <div className="flex justify-between items-center">
      <p className="text-[100px] font-extrabold text-white max-w-[430px] leading-none">
        TIME TO CODE
      </p>
      <Image
        src={logo}
        alt="logo"
        width={400}
        height={400}
        className="w-[225px] h-[149px]"
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
        <Link href={"mailto:"}>qubit@gmail.com</Link>
      </div>
    </div>
    <p className="text-white">
      Copyright © Qubit. All rights reserved. 2024
    </p>
  </div>
);

export default Footer;
