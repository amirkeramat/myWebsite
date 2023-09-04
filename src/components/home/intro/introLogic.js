import { useContext } from "react";
import { LangContext } from "../../../contexts/LangContext";
const introLogic = () => {
  const { lang } = useContext(LangContext);
  
  return [lang]
};

export default introLogic