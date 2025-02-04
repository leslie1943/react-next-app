import React from "react";
import imgSrc from "../../../../public/contact.jpg";
import Hero from "@/components/hero";
import { SiWechat } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaMobileRetro } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="flex items-center">
        <FaMobileRetro size={42} className="mr-4" />
        <div className="text-3xl">13478452949</div>
      </div>
      <div className="text-2xl mt-6 flex items-center">
        <SiWechat size={42} className="mr-4" />
        <div className="text-3xl">leslie_1943</div>
      </div>
      <div className="text-2xl mt-6 flex items-center">
        <MdEmail size={42} className="mr-4" />
        <div className="text-3xl">
          <a href="mailto:leslie43@sina.com">leslie43@sina.com</a>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return <Hero imgUrl={imgSrc} altTxt="Scale Image" content={Contact()}></Hero>;
}
