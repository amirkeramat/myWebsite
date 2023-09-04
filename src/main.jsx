import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import LangContextProvider from "./contexts/langContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </HashRouter>
);
