import React from "react";
import imgSrc from "../../../../public/contact.jpg";
import Hero from "@/components/hero";
import { SiWechat } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaMobileRetro } from "react-icons/fa6";

const ContactHeader = () => {
  return (
    <div>
      <div className="flex items-center">
        <FaMobileRetro size={42} className="mr-4" />
        <div className="text-3xl">(+86) 13478452949</div>
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

const ContactDetail = () => {
  return (
    <div className="text-white text-sm">
      <div className="flex items-center justify-center m-8">
        <div className="w-2/5 border-2 border-solid border-white rounded-md p-4">
          <li className="mt-4">
            Having been engaged in front-end development for many years, I
            possess rich project experience ranging from native JavaScript to
            jQuery, and then to the series of frameworks like
            <span className="text-green-400"> Vue / React / Angular </span> as
            well as cross-platform applications.
          </li>
          <li className="mt-4">
            I maintain a <span className="text-green-400"> HIGH </span> level of
            sensitivity and attention to technologies, and will set up test
            environments for new functions so that they can be applied to
            existing projects more quickly
          </li>
          <li className="mt-4">
            I'm familiar with the product development process and have strong
            abilities in product planning, requirement analysis, team
            <span className="text-green-400"> Collaboration</span> and
            <span className="text-green-400"> Communication</span>.
          </li>
          <li className="mt-4">
            I have got promotion opportunities in different companies.
            <span className="text-green-400 p-1">Attitude</span> is everything.
          </li>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} altTxt="Scale Image" content={ContactHeader()}>
      <ContactDetail />
    </Hero>
  );
}
