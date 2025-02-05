"use client";
import { Tag, type TableColumnsType } from "antd";

export const ProjectsData = [
  {
    key: 1,
    name: "Workforce Connect",
    description:
      "Provide the company with a visual organizational structure website",
    company: "Fidelity Investment",
    time: "2023-05 to 2024-12",
    role: "Lead Software Engineer II",
    responsible: [
      "Be responsible for the establishment projects and the implementation of requirements",
      "Overall migration from Vue 2 to Vue 3, Role-Based Access Control (RBAC) permission control, and implementation of micro-frontends.",
      "Build a B2B project from scratch, and be responsible for the team's technology selection, framework upgrading, component development, performance optimization and code quality control.",
    ],
    technologies: [
      "TypeScript",
      "Vue2",
      "Vue3",
      "Vuex",
      "Pinia",
      "Vuetify",
      "Sass",
      "Webpack",
      "Vite",
      "Jest",
      "Vitest",
      "NestJS",
      "TypeORM",
      "GraphQL",
      "Oracle",
    ],
    achievements: [
      "Make the management of the company's organizational structure visualized, enabling Chapter Leaders, Product Leaders and personnel from other functional departments (such as Operation and Finance) to be able to configure and manage at the levels of Entity / Position / Employee.",
      "Enable departments at different levels to accurately view the distribution of their employees in different Squads and the technologies they master",
      "Upgrade the project from Vue2 to Vue3, simplify the amount of code, optimize the website speed and optimize the data relationships among different modules",
      "Develop and integrate micro-frontends in the way of Web Component.",
      "Develop company-level common components.",
      "Report bugs to the Vuetify community and provide solutions.",
    ],
  },
  {
    key: 2,
    name: "Transparency Plus",
    description: "Provide a visual platform for the company's cost accounting",
    company: "Fidelity Investment",
    time: "2022-05 to 2023-12",
    role: "Front-end Developer",
    responsible: [
      "Be responsible for the implementation of requirements",
      "Be responsible for integration micro front-end.",
      "Be responsible for complex form design and implementation.",
    ],
    technologies: [
      "TypeScript",
      "Angular",
      "Ngrx",
      "Material Design",
      "Sass",
      "Jasmine",
      "Karma",
      "Java Springboot",
      "GraphQL",
      "Oracle",
    ],
    achievements: [
      "Make the company's fiscal year budget and allocation visualized.",
      "Break down the company's goals from high to low and establish correlative relationships.",
      "Specify each goal into every Team and estimate costs according to the personnel.",
      "Integrate the micro-frontends developed by the Vue project into the Angular project.",
      "Saved 3% of the company's costs during the project operation period.",
    ],
  },
  {
    key: 3,
    name: "EPRO SaaS Platform",
    description:
      "Provide a centralized procurement SaaS platform for hospitals and suppliers;",
    company: "Beijing ViewHigh Technology Company",
    time: "2018-04 to 2021-04",
    role: "Senior Front-end Development Engineer",
    responsible: [
      "Responsible for the centralized procurement SaaS platform for hospitals and suppliers, the business lines of multiple hospital procurement projects, as well as the auditing and charging functions of the operation platform.",
      "Use Vue-Cli/create-react-app for customized development, be responsible for the engineering construction of the team, as well as the construction of the basic project scaffolding, component development, and business implementation",
      "Development of the bid selection process for different hospitals on the SaaS platform and display of the bid opening results",
      "An operation platform with functions of approving suppliers and charging.",
      "centralized procurement systems for multiple hospitals (West China Hospital in Sichuan, Guizhou Hospital of Traditional Chinese Medicine, Peking University Third Hospital, the Second People's Hospital of Guiyang, Guangdong Hospital of Traditional Chinese Medicine).",
    ],
    technologies: [
      "JavaScript",
      "Vue2",
      "Vuex",
      "Element-UI ",
      "React",
      "React-Redux",
      "Ant Design",
      "Webpack",
    ],
    achievements: [
      "Deliver the EPRO SaaS platform, with a total of 100 hospitals and 300 suppliers having registered on the platform.",
      "Support the diverse department configuration functions of different hospitals.",
      "Support the diverse bid evaluation, bid selection and bid opening processes of different hospitals.",
      "Win multiple awards at various medical centralized procurement conferences and generate revenue and profits for the company.",
    ],
  },
  {
    key: 4,
    name: "BCRS / SNCF / WAMS / OMM",
    description:
      "Provide services for different products to the IBM after-sales team",
    company: "IBM",
    time: "2012-03 to 2018-04",
    role: "Delivery Leader",
    responsible: [
      "Provide support for IBM Sales product services with multiple languages, in multiple countries and involving multiple processes, and work on the refactoring project (from version 17 to version 18).",
      "Write scripts on the WebSphere platform to support product services",
    ],
    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
      "jQuery",
      "Bootstrap",
      "WebSphere",
      "DB2",
    ],
    achievements: [
      "Develop and deliver the Global project of IBM Center that supports more than 10 countries based on the WebSphere platform.",
      "Develop different service processes for different IBM products.",
      "Due to the change in IBM website standards, upgrade the project from version 17 to version 18, with the amount of code being only one-tenth of that before.",
      "This project has been commended by the IBM Sale team on multiple occasions.",
      "Utilize the automated testing technology of Python + Selenium and complete the sample PPT for the testing team to improve efficiency.",
    ],
  },
  {
    key: 5,
    name: "YSPAY Core Accounting System ",
    description:
      "Provide membership card settlement functions for major shopping malls in Beijing",
    company: "Beijing YSPAY Company",
    time: "2011-06 to 2012-03",
    role: "System Development Engineer",
    responsible: [
      "Communicate with bank specialists to design the database structure and settlement process",
      "Provide different settlement solutions for different merchants.",
      "Business development and on-site customer support",
    ],
    technologies: ["JavaScript", "CSS", "HTML", "Java", "Oracle"],
    achievements: [],
  },
  {
    key: 6,
    name: "Microbial inspection / Financial information ",
    description:
      "Complete the inspection module functions for clients, build the financial system from scratch and finalize it",
    company: "Beijing YSPAY Company",
    time: "2008-09 to 2011-03",
    role: "Software Engineer",
    responsible: [
      "Requirements Analysis and Design",
      "Bug fixing and code optimization",
    ],
    technologies: [".Net", "WPF", "SQL Server", "WebService"],
    achievements: [],
  },
];

export interface DataType {
  key: React.Key;
  name: string;
  description: string;
  company: string;
  time: string;
  role: string;
  technologies: string[];
  achievements: string[];
  responsible: string[];
}

export const ProjectColumns: TableColumnsType<DataType> = [
  // { title: "ID", dataIndex: "id", key: "key" },
  { title: "Project Name", dataIndex: "name", key: "name" },
  { title: "Role", dataIndex: "role", key: "role" },
  {
    title: "Project Description",
    dataIndex: "description",
    key: "description",
  },
  { title: "Company", dataIndex: "company", key: "company" },
  { title: "Time Duration", dataIndex: "time", key: "time" },
  {
    title: "Technologies",
    dataIndex: "technologies",
    key: "technologies",
    render: (items: string[]) => {
      return (
        <div className="flex">
          {items.map((item) => {
            return (
              <div key={item}>
                <Tag key={item} className="text-white text-sm p-2">
                  {item}
                </Tag>
              </div>
            );
          })}
        </div>
      );
    },
  },
];
