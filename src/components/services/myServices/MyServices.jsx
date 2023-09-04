import { myServicesItems } from "../../../constants/services";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../../../contexts/LangContext";
const MyServices = () => {
  const { lang } = useContext(LangContext);
  const { title_1, title_2, desc, list } = myServicesItems;
  return (
    <div className="space-y-5 p-2 flex flex-col ">
      <h6 className="text-zinc-100 text-4xl font-bold">
        {lang === "ENG" ? title_1.eng : title_1.per}
      </h6>
      <h5 className="text-transparent bg-clip-text bg-gradient-to-tr from-lime-300 via-lime-400 to-lime-500 text-4xl font-semibold">
        {lang === "ENG" ? title_2.eng : title_2.per}
      </h5>
      {desc.map((item) => (
        <div className="space-y-2" key={item.id}>
          <h4 className="text-2xl text-zinc-50">
            {" "}
            {lang === "ENG" ? item.title.eng : item.title.per}
          </h4>
          <p className="text-xl text-zinc-400">
            {lang === "ENG" ? item.content.eng : item.content.per}
          </p>
        </div>
      ))}
      {list.map((item) => (
        <div className="space-y-4" key={item.id}>
          <h4 className="text-2xl text-zinc-50">
            {lang === "ENG" ? item.title.eng : item.title.per}
          </h4>
          <ul className="list-disc marker:text-zinc-600 text-zinc-400 p-4">
            {item.items.map((i) => (
              <li key={i.id}>
                {lang === "ENG" ? i.content.eng : i.content.per}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <span className="w-[200px] h-[50px] relative bg-lime-500 ms-10 my-20 flex justify-center">
        <button className="bg-white w-[210px] h-[50px] text-gray-950 font-serif absolute bottom-2 right-2">
          <Link to={"/contact"}>
            {
            lang === "ENG" ? "Get a Free Price Quote" : "قیمت رایگان دریافت کنید"}
          </Link>
        </button>
      </span>
    </div>
  );
};

export default MyServices;
