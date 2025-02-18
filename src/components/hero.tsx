import React, { JSX } from "react";
import Image, { StaticImageData } from "next/image";
interface IProps {
  imgUrl: StaticImageData;
  altTxt: string;
  content: string | JSX.Element;
  subContent?: string;
  children?: React.ReactNode;
}

export default function Page(props: IProps) {
  return (
    <div>
      <div className="h-screen relative">
        <div className="absolute inset-0 -z-10">
          <Image
            fill
            src={props.imgUrl}
            alt={props.altTxt}
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 "></div>
        </div>
        <div className="flex justify-center pt-36">
          <h1 className="text-white text-6xl">{props.content}</h1>
        </div>
        {props.children}
      </div>
    </div>
  );
}
