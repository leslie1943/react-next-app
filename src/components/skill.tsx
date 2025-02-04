"use client";
import { IoMdStar } from "react-icons/io";

export const Skills = (props: {
  skills: Array<{ id: number; name: string; ability: number; bgColor: string }>;
}) => {
  return props.skills.map((item) => {
    return (
      <div
        key={item.id + "_" + item.name}
        className={`border-2 border-solid border-white rounded-md p-8 text-white  text-center w-52 ${item.bgColor}`}
      >
        {item.name}
        <div className="flex justify-center">
          {Array.from(Array(item.ability), () => (
            <IoMdStar key={Math.random()}></IoMdStar>
          ))}
        </div>
      </div>
    );
  });
};
