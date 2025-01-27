import React from "react";
import imgSrc from "../../../../public/scale.jpg";
import Hero from "@/components/hero";

export default function Page() {
  return <Hero imgUrl={imgSrc} altTxt="Scale Image" content="Projects"></Hero>;
}
