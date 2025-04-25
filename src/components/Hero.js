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

      <div className="relative  flex items-center text-center pb-16">
        <div className="container flex flex-col h-screen justify-around items-center mx-auto px-6 sm:px-8 md:px-12 relative z-10">
          <div className="max-w-xl flex flex-col items-center text-center mb-8">
            <Image
              src="/main.jpeg"
              alt="Satya Sai"
              width={640}
              height={640}
              className="rounded-full h-24 w-24 mb-4"
            />
            <h1 className=" text-5xl w-full flex flex-auto items-center align-middle justify-center  font-semibold opacity-60 leading-tight ">
              Hey I{"'"}m Satya Sai
            </h1>
            <h1 className=" text-5xl  font-semibold leading-tight ">
              Just a Product Designer from India.
            </h1>
          </div>
          <ScrollGallery />
          <div>
            <h1 className="   font-semibold leading-tight mb-4">
              See Projects V
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
