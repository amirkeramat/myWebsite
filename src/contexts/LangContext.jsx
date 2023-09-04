import { createContext, useState } from "react";

export const LangContext = createContext(null);

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("ENG");
  const value = {
    lang,
    setLang,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export default LangContextProvider;
