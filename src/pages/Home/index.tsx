import Hero from "../../components/hero";
import About from "../../components/about";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import Projects from "../../components/projects";
import Reccomend from "../../components/footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";





const Home = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: { duration: 0.4, ease: "easeInOut" },
      }}
    >
       <Helmet>
        <meta charSet="utf-8"/>
        <title>Dotvizion - סטודיו לעיצוב אתרים ואפליקציות: Designing with Precision, Innovation with Vision</title>
        <link rel="canonical" href="https://www.differeacting.com/" />
      </Helmet>
     
      <Hero />
      <About />
      <Projects />
      <Reccomend />
      <ScrollUp />
      <WhatsApp />
   
    </motion.div>
  );
};

export default Home;
