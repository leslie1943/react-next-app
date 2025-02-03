import React from "react";
import imgSrc from "../../../../public/reliability.jpg";
import Hero from "@/components/hero";
import { Timeline } from "antd";

export default function Page() {
  const companies = [
    {
      label: <span className="text-white text-2xl">05/2021 to 12/2024</span>,
      color: "green",

      children: (
        <span className="text-white text-2xl">Fidelity Investment</span>
      ),
    },
    {
      label: <span className="text-white text-2xl">04/2018 to 05/2021</span>,
      color: "pink",
      children: (
        <span className="text-white text-2xl">Beijing Neusoft Viewhigh</span>
      ),
    },
    {
      label: <span className="text-white text-2xl">05/2021 to 04/2018</span>,
      color: "blue",
      children: <span className="text-white text-2xl">IBM</span>,
    },
    {
      label: <span className="text-white text-2xl">06/2011 to 05/2012</span>,
      color: "yellow",
      children: <span className="text-white text-2xl">Beijing YSPAY</span>,
    },
    {
      label: <span className="text-white text-2xl">09/2008 to 04/2011</span>,
      color: "red",
      children: <span className="text-white text-2xl">Dalian Neusoft</span>,
    },
  ];
  return (
    <Hero imgUrl={imgSrc} altTxt="Reliability Image" content="Work Experience">
      <div className="flex items-center justify-center mt-10">
        <Timeline className="w-4/5" mode="left" items={companies} />
      </div>
    </Hero>
  );
}
