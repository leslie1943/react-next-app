"use client";
import React from "react";
import homeSrc from "../../../public/home.jpg";
import Hero from "@/components/hero";
// import { Metadata } from "next";
import Image from "next/image";
import { GoArrowUpRight, GoDownload } from "react-icons/go";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeFooterPage from "@/components/home-footer";

export default function Page() {
  const pathName = usePathname();

  return (
    <>
      <Hero imgUrl={homeSrc} altTxt="Home Image" content="">
        {/* Description */}
        <div>
          <Image
            className="w-12 h-12 rounded-full mx-auto"
            src="/leslie-avatar.jpg"
            alt=""
            width="120"
            height="120"
          />
          <div className="text-white flex justify-center items-center">
            <div className="w-75">
              <div>
                <span>
                  Hello, I&apos;m
                  <span className="text-green-300 pl-1">Leslie Su</span>.
                </span>
                <span className="pl-2">
                  I am a <span className="text-green-300 pr-1">full-stack</span>
                  developer with{" "}
                  <span className="text-green-300 pr-1">10+ years</span> of
                  experience.
                </span>
              </div>
              <div className="mt-2">
                <span className="pr-1 ">
                  I enjoy building web sites & apps.
                </span>
                <span>
                  My expertise is
                  <span className="pl-1 pr-1 underline text-green-300">
                    VueJs
                  </span>
                  and
                  <span className="pl-1 underline text-green-300">
                    React(Next.js)
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-white flex items-center justify-center mt-20">
          <button className="h-10 px-6 font-semibold rounded-md bg-indigo-500 border-e-indigo-500 text-white">
            <div className="flex items-center">
              <Link
                href="/contact"
                className={pathName === "/contact" ? "text-yellow-500" : ""}
              >
                <div className="flex items-center">
                  <div>Contact Me</div>
                  <GoArrowUpRight className="ml-2" />
                </div>
              </Link>
            </div>
          </button>

          <button className="ml-4 pl-10 h-10 px-6 rounded-md bg-sky-400 text-white">
            <div className="flex items-center">
              <a
                href="/Web Developer-Su Zhen.docx"
                download="Web Developer-Su Zhen"
              >
                <div className="flex items-center">
                  <div>Download CV</div>
                  <GoDownload className="ml-2" />
                </div>
              </a>
            </div>
          </button>
        </div>

        <HomeFooterPage></HomeFooterPage>
      </Hero>
    </>
  );
}
