import React from "react";
import imgSrc from "../../../../public/reliability.jpg";
import Hero from "@/components/hero";

export default function Page() {
  return (
    <Hero
      imgUrl={imgSrc}
      altTxt="Reliability Image"
      content="Experience..."
    ></Hero>
  );
}
