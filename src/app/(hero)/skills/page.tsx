"use client";
import React from "react";
import imgSrc from "../../../../public/perf.jpg";
import Hero from "@/components/hero";
import { Divider, List, Typography } from "antd";

export default function Page() {
  const data = ["Vue2.x", "Vue3.x", "React", "Next.js", "Angular"];
  return (
    <Hero imgUrl={imgSrc} altTxt="Performance Image" content="">
      <div className="flex justify-between items-center mx-10">
        <List
          className="w-80"
          header={<div className="text-white text-lg">Front end:</div>}
          // footer={<div className="text-white">Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text className="text-white">Strong</Typography.Text>
              <span className="text-white"> {item}</span>
            </List.Item>
          )}
        />

        <List
          className="w-80"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text className="text-white">[ITEM]</Typography.Text>
              <span className="text-white"> {item}</span>
            </List.Item>
          )}
        />

        <List
          className="w-80"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text className="text-white">[ITEM]</Typography.Text>
              <span className="text-white"> {item}</span>
            </List.Item>
          )}
        />
      </div>
    </Hero>
  );
}
