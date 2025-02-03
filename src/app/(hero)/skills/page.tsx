"use client";
import React from "react";
import imgSrc from "../../../../public/perf.jpg";
import Hero from "@/components/hero";
import { Skills } from "@/components/skill";

export default function Page() {
  const skill_set_1 = [
    { id: 1, name: "JavaScript", ability: 5, bgColor: "bg-teal-600" },
    { id: 2, name: "TypeScript", ability: 5, bgColor: "bg-purple-600" },
    { id: 3, name: "Vue2", ability: 5, bgColor: "bg-lime-500" },
    { id: 4, name: "Vue3", ability: 5, bgColor: "bg-cyan-700" },
    { id: 5, name: "React", ability: 5, bgColor: "bg-blue-600" },
    { id: 6, name: "Angular", ability: 3, bgColor: "bg-indigo-600" },
  ];

  const skill_set_2 = [
    { id: 7, name: "NestJs", ability: 4, bgColor: "bg-violet-600" },
    { id: 8, name: "Koa.js", ability: 4, bgColor: "bg-fuchsia-400" },
    { id: 9, name: "Egg.js", ability: 4, bgColor: "bg-pink-600" },
    { id: 10, name: "TypeORM", ability: 4, bgColor: "bg-rose-500" },
    { id: 11, name: "GraphQL", ability: 4, bgColor: "bg-teal-600" },
    { id: 12, name: "Springboot", ability: 3, bgColor: "bg-blue-600" },
  ];

  const skill_set_3 = [
    { id: 13, name: "Webpack", ability: 4, bgColor: "bg-fuchsia-400" },
    { id: 14, name: "Vite", ability: 4, bgColor: "bg-slate-500" },
    { id: 15, name: "Rollup", ability: 4, bgColor: "bg-emerald-600" },
    { id: 16, name: "Jest", ability: 4, bgColor: "bg-stone-600" },
    { id: 17, name: "Vitest", ability: 4, bgColor: "bg-amber-600" },
    { id: 118, name: "Cypress", ability: 3, bgColor: "bg-zinc-600" },
  ];

  const skill_set_4 = [
    { id: 19, name: "Apache Echarts", ability: 4, bgColor: "bg-yellow-600" },
    { id: 20, name: "Chart.js", ability: 4, bgColor: "bg-neutral-600" },
    { id: 21, name: "Git", ability: 4, bgColor: "bg-lime-600" },
    { id: 22, name: "Kubernetes", ability: 4, bgColor: "bg-cyan-600" },
    { id: 23, name: "Jenkins", ability: 4, bgColor: "bg-teal-600" },
    { id: 24, name: "基础算法", ability: 3, bgColor: "bg-green-600" },
  ];

  return (
    <Hero imgUrl={imgSrc} altTxt="Performance Image" content="">
      <div className="flex justify-between items-center m-8 border-solid">
        <Skills key={1} skills={skill_set_1}></Skills>
      </div>

      <div className="flex justify-between items-center m-8 border-solid">
        <Skills key={2} skills={skill_set_2}></Skills>
      </div>

      <div className="flex justify-between items-center m-8 border-solid">
        <Skills key={3} skills={skill_set_3}></Skills>
      </div>

      <div className="flex justify-between items-center m-8 border-solid">
        <Skills key={4} skills={skill_set_4}></Skills>
      </div>

      <div className="flex justify-between items-center m-2"></div>
    </Hero>
  );
}
