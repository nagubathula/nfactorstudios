// pages/index.js
"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollGallery from "./ScrollGallery";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white ">
      {/* <Navbar /> */}

      <div className="relative  flex   pb-16">
        <div className="w-[90%] flex flex-col h-screen justify-around  mx-auto relative z-10">
          <div>
            Logo
          </div>
          <div className="max-w-xl flex flex-col mt-24   mb-8">
            <Image
              src="/main.jpeg"
              alt="Satya Sai"
              width={640}
              height={640}
              className="rounded-full h-24 w-24 mb-4"
            />
            <h1 className=" text-5xl w-full flex flex-auto   opacity-60 leading-tight ">
              Hey I{"'"}m Satya Sai
            </h1>
            <h1 className=" text-5xl   leading-tight ">
              Just a Product Designer from India.
            </h1>
          </div>
          <ScrollGallery />
         
        </div>
      </div>
    </div>
  );
}
