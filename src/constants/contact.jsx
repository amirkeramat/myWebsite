import {
  MailFilled,
  PhoneFilled,
  CommentOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

export const contactItems = {
  id: 1,
  title_1: { eng: "Get in touch", per: "ارتباط با من" },
  title_2: {
    eng: "Let's talk about your project",
    per: "بیایید در مورد پروژه شما صحبت کنیم",
  },
  desc: [
    {
      id: 1,
      content: {
        eng: "Thinking about a new project, a problem to solve, or just want to connect? Let's do it!",
        per: "به یک پروژه جدید فکر می کنید، مشکلی برای حل کردن، یا فقط می خواهید وصل شوید؟ بیایید آن را انجام دهیم!",
      },
    },
    {
      id: 2,
      content: {
        eng: "Use the form on this page or get in touch by other means.",
        per: "از فرم موجود در این صفحه استفاده کنید یا از راه های دیگر در تماس باشید.",
      },
    },
  ],
  links: [
    { id: 1, title: "Phone", desc: "+989146575303", icon: <PhoneFilled /> },
    {
      id: 2,
      title: "Email",
      desc: "amirkeramat.dev@gmail.com",
      icon: <MailFilled />,
      link: "mailto:amir_karamat@yahoo.com",
    },
    {
      id: 3,
      title: "Linkedin",
      desc: "amirkeramat",
      icon: <LinkedinFilled />,
      link: "https://www.linkedin.com/in/amir-keramat-8196b6298",
    },
    {
      id: 4,
      title: "Telegram",
      desc: "amirkeramat",
      icon: <CommentOutlined />,
      link: "https://t.me/amirkeramat",
    },
  ],
};
