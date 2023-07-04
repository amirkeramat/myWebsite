/* eslint-disable react/prop-types */
import { Container, TopSep, BottomSep } from "./layout.style";
const Layout = ({ children }) => {
  return (
    <Container>
      <TopSep />

      <div className="relative w-full max-w-screen-xl ">
        <div className="relative  bg-gradient-to-tr from-zinc-950 via-zinc-950 to-zinc-900  w-full lg:pt-4 xl:pt-8 h-screen rounded">
          {children}
        </div>
      </div>
      <div className="fixed  right-0 bottom-[25vh]  z-40 md:sticky md:h-[50vh] h-[50px] md:top-[25vh]  bg-gradient-to-tr from-zinc-950 via-zinc-950 to-zinc-900 md:w-[50px] w-full text-white ">
        dfgdfg
      </div>
      <BottomSep />
    </Container>
  );
};

export default Layout;
