import { menuItems } from "../../../constants/menuItems";
import { Container, Icon } from "./menu.style";
import { NavLink } from "react-router-dom";
import { MoreOutlined } from "@ant-design/icons";
import { useState, useContext } from "react";
import { LangContext } from "../../../contexts/LangContext";
const Menu = () => {
  const { lang } = useContext(LangContext);
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      {menuItems.map((item) => (
        <Icon
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          $exLink={item.exLink === 1}
          $language={lang === "ENG"}
          key={item.id}
          after-dynamic-value={item.title}
        >
          <NavLink
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
            className={({ isActive }) =>
              isActive
                ? "bg-lime-400 w-full h-full flex justify-center items-center"
                : " w-full h-full flex justify-center items-center"
            }
            to={item.href}
          >
            {item.icon}
          </NavLink>
        </Icon>
      ))}
      <i
        onClick={() => setToggle((prv) => !prv)}
        className="w-full flex md:hidden justify-center items-center h-full text-3xl"
      >
        <MoreOutlined />
      </i>

      <div
        className={`absolute bottom-12 ${
          lang === "ENG" ? "right-0" : "left-0"
        }  duration-500 ease-out bg-zinc-700  flex md:hidden flex-col items-center justify-center w-[50px] ${
          toggle ? "max-h-auto h-[130px]" : "max-h-0 h-0"
        } overflow-hidden`}
      >
        {menuItems
          .filter((item) => item.exLink === 1)
          .map((item) => (
            <i
              key={item.id}
              className="text-2xl w-full h-full flex  items-center justify-center"
            >
              <a target="_blank" href={item.href}>
                {" "}
                {item.icon}
              </a>
            </i>
          ))}
      </div>
    </Container>
  );
};

export default Menu;
