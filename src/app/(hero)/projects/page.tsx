"use client";
import React from "react";
import imgSrc from "../../../../public/projects.jpg";
import Hero from "@/components/hero";
import { List, Table } from "antd";
import { DataType, ProjectColumns, ProjectsData } from "@/const/project";

export default function Page() {
  return (
    <Hero imgUrl={imgSrc} altTxt="Scale Image" content="">
      <div className="mx-12">
        <Table<DataType>
          bordered
          pagination={{ position: ["none"] }}
          columns={ProjectColumns}
          expandable={{
            expandedRowRender: (record) => (
              <div>
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
