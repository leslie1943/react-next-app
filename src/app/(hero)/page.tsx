import React from "react";
import homeSrc from "../../../public/home.jpg";
import Hero from "@/components/hero";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description: "Leslie's Blog",
};

export default function Page() {
  return (
    <>
      <Hero
        imgUrl={homeSrc}
        altTxt="Home Image"
        content="Welcome to Leslie's Blog"
      >
        <div>aaaa</div>
      </Hero>
    </>
  );
}
