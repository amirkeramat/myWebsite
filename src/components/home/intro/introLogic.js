import { useContext } from "react";
import { LangContext } from "../../../contexts/langContext";
const introLogic = () => {
  const { lang } = useContext(LangContext);
  
  return [lang]
};

export default introLogic