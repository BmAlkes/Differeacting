import { useLocation } from "react-router-dom";
import OpenCards from "../../components/openCards";
import ScrollUp from "../../components/scrollup";
import { useEffect } from "react";
import { motion } from "framer-motion";

import WhatsApp from "../../components/whatsappscroll";
import Cursor from "../../components/cursoFollower";

const Projects = () => {
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
      <section className=" bg-[#000000]   mt-[96px] rel relative">
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1712766598/projectss_udibmm.jpg"
          alt=" services banner"
          className="h-[350px] object-cover md:h-auto lg:h-[700px] w-full"
        />

        <OpenCards />
      </section>
      <ScrollUp />
      <WhatsApp />
      <Cursor/>
    </motion.div>
  );
};

export default Projects;
