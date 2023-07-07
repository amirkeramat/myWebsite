/* eslint-disable react/prop-types */
import {
  Container,
  TopSep,
  BottomSep,
  RouterContainer,
  Router,
} from "./layout.style";
import Menu from "../components/layout/menu/menu";
const Layout = ({ children }) => {
  return (
    <Container>
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
