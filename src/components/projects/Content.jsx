import ProjectBox from "./projectBox/ProjectBox";
import { projectItems, latestProjectsItems } from "../../constants/projects";
import LatestProjects from "./latestProjects/LatestProjects";
import { useContext } from "react";
import { LangContext } from "../../contexts/LangContext";
const Content = () => {
  const { lang } = useContext(LangContext);
  return (
    <div className="p-10 space-y-10 h-full">
      <h1 className="text-3xl text-zinc-100">
        {lang === "ENG" ? "My Open-Source Projects" : "پروژه های متن باز من"}
      </h1>
      <p className="text-xl text-zinc-400">
        {lang === "ENG"
          ? "Discover my most popular open-source projects on Github."
          : "محبوب ترین پروژه های منبع باز من در Github را کشف کنید."}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectItems.map((item) => (
          <ProjectBox key={item._id} item={item} />
        ))}
      </div>
      <h1 className="text-3xl text-zinc-100">
        {lang === "ENG" ? "Latest Projects" : "اخرین نمونه کار های من"}
      </h1>
      <p className="text-xl text-zinc-400">
        {lang === "ENG"
          ? "I have transformed ideas into remarkable digital products."
          : "من ایده ها را به محصولات دیجیتالی قابل توجه تبدیل کرده ام."}
      </p>
      {latestProjectsItems.map((item) => (
        <LatestProjects key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Content;
