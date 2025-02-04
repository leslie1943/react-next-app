import React from "react";
import imgSrc from "../../../../public/experience.jpg";
import Hero from "@/components/hero";
import { Timeline } from "antd";

export default function Page() {
  const companies = [
    {
      label: <span className="text-white">From 05/2021 To 12/2024</span>,

      children: (
        <span className="text-white">
          <strong>Fidelity Investment</strong> - (Lead Software Engineer II)
        </span>
      ),
    },
    {
      label: <span className="text-white">From 04/2018 To 05/2021</span>,
      color: "pink",
      children: (
        <span className="text-white">
          <strong>Beijing Neusoft Viewhigh</strong> - (Senior Software Engineer)
        </span>
      ),
    },
    {
      label: <span className="text-white">From 05/2021 To 04/2018</span>,
      color: "blue",
      children: (
        <span className="text-white">
          <strong>IBM</strong> - (Delivery Leader)
        </span>
      ),
    },
    {
      label: <span className="text-white">From 06/2011 To 05/2012</span>,
      color: "yellow",
      children: (
        <span className="text-white">
          <strong>Beijing YSPAY</strong> - (System Engineer)
        </span>
      ),
    },
    {
      label: <span className="text-white">From 09/2008 To 04/2011</span>,
      color: "red",
      children: (
        <span className="text-white">
          <strong>Dalian Neusoft</strong> - (Software Engineer)
        </span>
      ),
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
