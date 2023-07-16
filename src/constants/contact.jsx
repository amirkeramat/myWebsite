import {
  MailFilled,
  PhoneFilled,
  CommentOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

export const contactItems = {
  id: 1,
  title_1: "Get in touch",
  title_2: "Let's talk about your project",
  desc: [
    {
      id: 1,
      content:
        "Thinking about a new project, a problem to solve, or just want to connect? Let's do it!",
    },
    {
      id: 2,
      content: "Use the form on this page or get in touch by other means.",
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
      link: "#",
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
