import React from "react";
import imgSrc from "../../../../public/projects.jpg";
import Hero from "@/components/hero";

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} altTxt="Scale Image" content="">
      <div className="flex items-center justify-center m-4">
        <div className="text-white text-3xl m-10">Workforce</div>
        <div className="text-white text-3xl m-10">Transparent</div>
        <div className="text-white text-3xl m-10">EPRO</div>
        <div className="text-white text-3xl m-10">EPRO-Operation</div>
        <div className="text-white text-3xl m-10">BCRS</div>
      </div>
    </Hero>
  );
}
