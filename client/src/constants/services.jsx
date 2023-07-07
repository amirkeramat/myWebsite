import {
  MobileOutlined,
  MonitorOutlined,
  AppstoreOutlined,
  BugOutlined,
} from "@ant-design/icons";

export const serviceItems = {
  first: [
    {
      id: 1,
      title: "Web and Mobile App Design",
      icon: <MobileOutlined />,
      desc: "Design Responsive Websites for Mobile",
      list: [
        { id: 1, content: "Design Strategy" },
        { id: 2, content: "Web and Mobile App Design" },
        { id: 3, content: "Front-end Development" },
      ],
    },
    {
      id: 2,
      title: "Project Strategy & Development",
      icon: <MonitorOutlined />,
      desc: "Defining the problem, identifying the scope and finally, organizing",
      list: [
        { id: 1, content: "Define Problems" },
        { id: 2, content: "Identify the Scope" },
        { id: 3, content: "Organization" },
      ],
    },
  ],
  second: [
    {
      id: 3,
      title: "UI/UX Design & Optimization",
      icon: <AppstoreOutlined />,
      desc: "Design modern Landing Pages,SPA Websites,and Optimized ones",
      list: [
        { id: 1, content: "Dream" },
        { id: 2, content: "Design" },
        { id: 3, content: "Optimize" },
      ],
    },
    {
      id: 4,
      title: "Application Audit & Debugging",
      icon: <BugOutlined />,
      desc: "Im here to fight against all bugs and ready to debug them",
      list: [
        { id: 1, content: "Find Bug" },
        { id: 2, content: "Fight" },
        { id: 3, content: "Debug" },
      ],
    },
  ],
};

export const myServicesItems = {
  title_1: "Services",
  title_2: "My Expertise",
  desc: [
    {
      id: 1,
      title: "Solving problems",
      content:
        "I design products that are more than pretty. I make them shippable and usable",
    },
  ],
  list: [
    {
      id: 1,
      title: "What you can expect",
      items: [
        { id: 1, content: "Clean Code" },
        { id: 2, content: "Best Performance" },
        { id: 3, content: "Smooth Design" },
      ],
    },
    {
      id: 2,
      title: "Applications I'm fluent in",
      items: [
        { id: 1, content: "JS" },
        { id: 2, content: "React JS" },
        { id: 3, content: "Redux" },
      ],
    },
  ],
};
