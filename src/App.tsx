import AOS from "aos";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Layout from "./layout";
import NotFound from "./pages/404";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
import DigitalPage from "./pages/DigitalPage";
import GraphicPage from "./pages/GraphicPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import ServerPage from "./pages/ServerPage";
import Posts from "./pages/Posts";
import Post from "./pages/Posts/post";
import Service from "./pages/Service";
import Login from "./pages/Login";

AOS.init();

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/digital" element={<DigitalPage />} />
            <Route path="/development" element={<DevelopmentPage />} />
            <Route path="/design" element={<GraphicPage />} />
            <Route path="/server" element={<ServerPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
