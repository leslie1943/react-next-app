"use client";
import React, { useState } from "react";
import imgSrc from "../../../../public/skills.jpg";
import Hero from "@/components/hero";
import { Skills } from "@/components/skill";

const ViewOptions = (props: { emitChange: (e: number) => void }) => {
  const [value, setValue] = useState(1);

  const onChange = (value: number) => {
    setValue(value);
    props.emitChange(value);
  };

  return (
    <div className="flex justify-center">
      <div
        className={`border-2 cursor-pointer border-solid rounded-md border-white p-2 ${
          value === 1 ? "bg-green-500 text-white" : "bg-white text-green-500"
        }`}
        onClick={() => onChange(1)}
      >
        Card View
      </div>
      <div
        className={`border-2 cursor-pointer border-solid rounded-md border-white p-2 ml-2 ${
          value === 2 ? "bg-green-500 text-white" : "bg-white text-green-500"
        }`}
        onClick={() => onChange(2)}
      >
        Text View
      </div>
    </div>
  );
};

export default function Page() {
  const [viewOption, setViewOption] = useState(1);
  const viewOnChange = (value: number) => {
    setViewOption(value);
  };

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
      <div className="-mt-2 flex justify-center">
        <ViewOptions emitChange={viewOnChange}></ViewOptions>
      </div>
      {viewOption === 1 ? (
        <>
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
        </>
      ) : (
        <div className="flex justify-center mt-10">
          <div className="text-white border-2 border-solid rounded-lg p-14">
            <div className="mt-2">
              Fundamental:
              <i className="ml-2 text-lime-200">
                JavaScript, TypeScript, CSS3/Sass/Scss/Tailwind
              </i>
            </div>
            <div className="mt-2">
              Web Framework:
              <i className="ml-2 text-orange-500">
                Vue2 / Vue3, React,Next.js,Angular
              </i>
            </div>
            <div className="mt-2">
              Multi-Platform:
              <i className="ml-2 text-indigo-400">
                Uni-app, Weex, Taro, Flutter
              </i>
            </div>
            <div className="mt-2">
              Node Framework:
              <i className="ml-2 text-red-300">NestJs, Koa, Egg, TypeORM</i>
            </div>
            <div className="mt-2">
              API Framework:
              <i className="ml-2 text-pink-500">GraphQL, Java SpringBoot</i>
            </div>
            <div className="mt-2">
              Build Tools:
              <i className="ml-2 text-fuchsia-400">Webpack, Vite, Rollup</i>
            </div>
            <div className="mt-2">
              Test Framework:
              <i className="ml-2 text-purple-400">Jest, Vitest, Cypress</i>
            </div>
            <div className="mt-2">
              Visualization Framework:
              <i className="ml-2 text-teal-300">Apache Echarts, Chart.js</i>
            </div>
            <div className="mt-2">
              Version Control: <i className="ml-2 text-green-400">Git</i>
            </div>
            <div className="mt-2">
              DevOps: <i className="ml-2 text-blue-400">Kubernetes, Jenkins</i>
            </div>
            <div className="mt-2">
              Others:
              <i className="ml-2 text-yellow-200">
                Common Design Patterns ,Basic algorithm,Markdown
              </i>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center m-2"></div>
    </Hero>
  );
}
