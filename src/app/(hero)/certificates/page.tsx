"use client";
import React from "react";
import imgSrc from "../../../../public/cert.jpg";
import Hero from "@/components/hero";
import { List } from "antd";
import { SiKubernetes, SiVorondesign, SiCodesignal } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { PiTrademarkRegisteredBold } from "react-icons/pi";
import { GrGraphQl } from "react-icons/gr";

export default function Page() {
  const certs = [
    {
      name: "GraphQL Certificates",
      date: "2024-09",
      icon: <GrGraphQl color="pink" size={42} />,
    },
    {
      name: "CKAD Certificate",
      date: "2023-10",
      icon: <SiKubernetes color="teal" size={42} />,
    },
    {
      name: "AWS Certified Developer - Associate",
      date: "2022-09",
      icon: <FaAws color="yellow" size={42} />,
    },
    {
      name: "Obtained national patents during the period of Neusoft Viewhigh.",
      date: "2020-05",
      icon: <PiTrademarkRegisteredBold color="green" size={42} />,
    },
    {
      name: "Architecture Team Solution Design",
      date: "2017-12",
      icon: <SiVorondesign color="#FF8800" size={42} />,
    },

    {
      name: "Architecture Design Thinking",
      date: "2016-11",
      icon: <SiCodesignal color="cyan" size={42} />,
    },
  ];
  return (
    <Hero imgUrl={imgSrc} altTxt="Scale Image" content="">
      <div className="flex justify-end">
        <List
          className="w-4/5"
          itemLayout="horizontal"
          dataSource={certs}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={
                  <span className="text-white">
                    <strong>{item.name}</strong>
                  </span>
                }
                description={
                  <span className="text-white">
                    <i>Obtained in {item.date}</i>
                  </span>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </Hero>
  );
}
