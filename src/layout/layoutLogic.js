import { useEffect, useContext } from "react";
import { LangContext } from "../contexts/LangContext";
const layOutLogic = () => {
  const { lang, setLang } = useContext(LangContext);
  useEffect(() => {
    if (
      !localStorage.getItem("language") ||
      localStorage.getItem("language") === "ENG"
    ) {
      localStorage.setItem("language", "ENG");
      setLang("ENG");
       document.documentElement.dir = "ltr";
       document.documentElement.lang = "en";
    } else if (
      localStorage.getItem("language") === "ENG" ||
      localStorage.getItem("language") !== "PER"
    ) {
      localStorage.setItem("language", "ENG");
      setLang("ENG");
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }else{
      setLang(localStorage.getItem("language"))
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "per";
    }
    
  });
  const setLanguage = (language) => {
    setLang(language);
    localStorage.setItem("language", language);
    if (language === "ENG" || lang === "ENG") {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    } else if (language === "PER" || lang === "PER") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "per";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "per";
    }
  };

  return { lang, setLanguage };
};

export default layOutLogic;
