import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
];

export default routes