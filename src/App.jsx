import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Layout from "./layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  const router = useRoutes(routes);
  return (
    <Layout>
    {router}
    </Layout>
  );
}

export default App;
