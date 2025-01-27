import React from "react";
import imgSrc from "../../../../public/perf.jpg";
import Hero from "@/components/hero";

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} altTxt="Performance Image" content="Skills"></Hero>
  );
}
