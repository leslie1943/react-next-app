import React from "react";
import homeSrc from "../../../public/home.jpg";
import Hero from "@/components/hero";
import { Metadata } from "next";
import { GoArrowUpRight, GoDownload } from "react-icons/go";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGitee } from "react-icons/si";
import { GrBlog } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Home",
  description: "Leslie's Blog",
};

export default function Page() {
  return (
    <>
      <Hero imgUrl={homeSrc} altTxt="Home Image" content="">
        {/* Description */}
        <div>
          <img
            className="w-12 h-12 rounded-full mx-auto"
            src="/leslie-avatar.jpg"
            alt=""
            width="124"
            height="124"
          />
          <div className="text-white flex justify-center items-center">
            <div className="w-75">
              <div>
                <span>
                  Hello, I'm <span className="text-green-300">Leslie Su</span>.
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
              <div>Contact Me</div>
              <GoArrowUpRight className="ml-2" />
            </div>
          </button>

          <button className="ml-4 pl-10 h-10 px-6 rounded-md bg-sky-400 text-white">
            <div className="flex items-center">
              <div>Download CV</div>
              <GoDownload className="ml-2" />
            </div>
          </button>
        </div>

        {/* Links */}
        <div className="flex justify-center mt-16 text-white">
          <FaSquareGithub className="w-6 h-6 rounded bg-black mx-4"></FaSquareGithub>
          <SiGitee className="w-6 h-6 rounded bg-black mx-4"></SiGitee>
          <GrBlog className="w-6 h-6 rounded bg-black mx-4"></GrBlog>
          <FaLinkedin className="w-6 h-6 rounded bg-black mx-4"></FaLinkedin>
        </div>

        <div className="flex justify-center mt-8 text-white text-xs">
          Build with Next.js & Tailwind CSS
        </div>
      </Hero>
    </>
  );
}
