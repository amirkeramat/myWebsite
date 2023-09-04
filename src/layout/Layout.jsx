/* eslint-disable react/prop-types */
import layOutLogic from "./layoutLogic";
import {
  Container,
  TopSep,
  BottomSep,
  RouterContainer,
  Router,
  LangSwitch
} from "./layout.style";
import Menu from "../components/layout/menu/Menu";
const Layout = ({ children }) => {
  const {lang, setLanguage } = layOutLogic();
  return (
    <Container>
      <LangSwitch $language={lang === "ENG"}>
        <button onClick={() => setLanguage("ENG")}>EN</button>
        <button onClick={() => setLanguage("PER")}>PER</button>
        <div
          className={`absolute ${lang === 'ENG' ? 'left-0':'left-[50%]' } duration-700 top-0 bottom-0  bg-[#84cc16] w-[50%]`}
        ></div>
      </LangSwitch>
      <TopSep />
      <RouterContainer>
        <Router>{children}</Router>
      </RouterContainer>
      <Menu />
      <BottomSep />
    </Container>
  );
};

export default Layout;
