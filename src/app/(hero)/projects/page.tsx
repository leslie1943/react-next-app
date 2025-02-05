"use client";
import React from "react";
import imgSrc from "../../../../public/projects.jpg";
import Hero from "@/components/hero";
import { List, Table, Tag } from "antd";
import { DataType, ProjectColumns, ProjectsData } from "@/const/project";

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} altTxt="Scale Image" content="">
      <div className="mx-2">
        <Table<DataType>
          bordered
          pagination={{ position: ["none"] }}
          columns={ProjectColumns}
          expandable={{
            expandedRowRender: (record) => (
              <div>
                <div className="flex">
                  {record.technologies.map((item) => {
                    return (
                      <div key={item}>
                        <Tag
                          color="#108ee9"
                          key={item}
                          className="text-white text-sm p-2"
                        >
                          {item}
                        </Tag>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-2"></div>
                <List
                  header={
                    <div>
                      <strong>Responsible:</strong>
                    </div>
                  }
                  bordered
                  dataSource={record.responsible}
                  renderItem={(item, index) => (
                    <List.Item>
                      {index + 1}: {item}
                    </List.Item>
                  )}
                />
                <div className="mt-2"></div>
                {record.achievements.length > 0 && (
                  <List
                    header={
                      <div>
                        <strong>Project achievements:</strong>
                      </div>
                    }
                    bordered
                    dataSource={record.achievements}
                    renderItem={(item, index) => (
                      <List.Item>
                        {index + 1}: {item}
                      </List.Item>
                    )}
                  />
                )}
              </div>
            ),
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={ProjectsData}
        />
      </div>
    </Hero>
  );
}
