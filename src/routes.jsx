import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
const routes = [
  { path: "myWebsite/", element: <Home /> },
  { path: "myWebsite/about", element: <About /> },
  { path: "myWebsite/services", element: <Services /> },
  { path: "myWebsite/projects", element: <Projects /> },
  { path: "myWebsite/contact", element: <Contact /> },
];

export default routes