import {
  MobileOutlined,
  MonitorOutlined,
  AppstoreOutlined,
  BugOutlined,
} from "@ant-design/icons";

export const serviceItems = {
  first: {
    eng: [
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
    per: [
      {
        id: 1,
        title: "طراحی اپلیکیشن وب و موبایل",
        icon: <MobileOutlined />,
        desc: "طراحی سایت های ریسپانسیو برای موبایل",
        list: [
          { id: 1, content: "استراتژی طراحی" },
          { id: 2, content: "طراحی اپلیکیشن وب و موبایل" },
          { id: 3, content: "توسعه فرانت اند" },
        ],
      },
      {
        id: 2,
        title: "استراتژی و توسعه پروژه",
        icon: <MonitorOutlined />,
        desc: "تعریف مسئله، شناسایی محدوده و در نهایت سازماندهی",
        list: [
          { id: 1, content: "پیدا کردن مشکلات" },
          { id: 2, content: "شناسایی محدوده مشکلات" },
          { id: 3, content: "برنامه ریزی" },
        ],
      },
    ],
  },
  second: {
    eng: [
      {
        id: 3,
        title: "UI/UX Design & Optimization",
        icon: <AppstoreOutlined />,
        desc: "Design modern Landing Pages,SPA Websites,and Optimized ones",
        list: [
          { id: 1, content: "Modern" },
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
    per: [
      {
        id: 3,
        title: "طراحی و بهینه سازی UI/UX",
        icon: <AppstoreOutlined />,
        desc: "طراحی صفحات لندیگ مدرن، وب سایت های  تک صفحه ای و بهینه شده ",
        list: [
          { id: 1, content: "مدرن " },
          { id: 2, content: "طراحی" },
          { id: 3, content: "بهینه " },
        ],
      },
      {
        id: 4,
        title: "پیدا کردن مشکلات پروژه",
        icon: <BugOutlined />,
        desc: "آمادگی لازم با روبه رو شدن با مشکلات پیش اومده در پروژه",
        list: [
          { id: 1, content: "پیدا کردن مشکل" },
          { id: 2, content: "مباره با مشکل" },
          { id: 3, content: "حل مشکل" },
        ],
      },
    ],
  },
};

export const myServicesItems = {
  title_1: {
    eng: "Services",
    per: "سرویس ها",
  },
  title_2: {
    eng: "My Expertise",
    per: "تخصص های من",
  },
  desc: [
    {
      id: 1,
      title: { eng: "Solving problems", per: "حل مشکلات" },
      content: {
        eng: "I design products that are more than pretty. I make them shippable and usable",
        per: "من محصولاتی را طراحی می کنم که بیش از زیبایی هستند. من آنها را قابل حمل و استفاده می کنم",
      },
    },
  ],
  list: [
    {
      id: 1,
      title: {
        eng: "What you can expect",
        per: "انتظاراتی که باید از من داشته باشید",
      },
      items: [
        { id: 1, content: { eng: "Clean Code", per: "کد نویسی تمیز" } },
        { id: 2, content: { eng: "Best Performance", per: "پرفورمنس بالا" } },
        { id: 3, content: { eng: "Smooth Design", per: "طراحی چشم نواز" } },
      ],
    },
    {
      id: 2,
      title: {
        eng: "Applications I'm fluent in",
        per: "تکنولوژی هایی که به ان ها مسلط هستم",
      },
      items: [
        { id: 1, content: { eng: "JS", per: "JS" } },
        { id: 2, content: { eng: "React JS", per: "React JS" } },
        { id: 3, content: { eng: "Redux", per: "Redux" } },
      ],
    },
  ],
};
