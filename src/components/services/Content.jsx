import ServiceBox from "./serviceBox/ServiceBox";
import { serviceItems } from "../../constants/services";
import MyServices from "./myServices/MyServices";
import { useContext } from "react";
import {LangContext} from "../../contexts/LangContext"
const Content = () => {
  const {lang} = useContext(LangContext)
  return (
    <div className="w-full h-full p-8 grid gap-4 grid-cols-1 md:grid-cols-3">
      <MyServices />
      <div className="flex flex-col space-y-10">
        {lang === "ENG" ? (
          <>
            {serviceItems.first.eng.map((item) => (
              <ServiceBox key={item.id} item={item} />
            ))}
          </>
        ) : (
          <>
            {serviceItems.first.per.map((item) => (
              <ServiceBox key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
      <div className="flex flex-col space-y-10">
        {lang === "ENG" ? (
          <>
            {serviceItems.second.eng.map((item) => (
              <ServiceBox key={item.id} item={item} />
            ))}
          </>
        ) : (
          <>
            {serviceItems.second.per.map((item) => (
              <ServiceBox key={item.id} item={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
