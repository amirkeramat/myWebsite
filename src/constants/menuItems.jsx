import {
  HomeOutlined,
  UserOutlined,
  CreditCardOutlined,
  TrophyOutlined,
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export const menuItems = [
  { id: 1, title: "Home", icon: <HomeOutlined />, href: "/" },
  { id: 2, title: "About", icon: <UserOutlined />, href: "about" },
  { id: 3, title: "Services", icon: <CreditCardOutlined />, href: "services" },
  { id: 5, title: "Projects", icon: <TrophyOutlined />, href: "projects" },
  { id: 6, title: "Contact", icon: <MailOutlined />, href: "contact" },
  {
    id: 7,
    title: "GitHub",
    icon: <GithubOutlined />,
    href: "https://github.com/amirkeramat",
    exLink: 1,
  },
  {
    id: 8,
    title: "Linkedin",
    icon: <LinkedinOutlined />,
    href: "linkedin.com/in/amir-keramat-8196b6298",
    exLink: 1,
  },
  {
    id: 9,
    title: "Instagram",
    icon: <InstagramOutlined />,
    href: "https://www.instagram.com/amirkeramat1/",
    exLink: 1,
  },
];
