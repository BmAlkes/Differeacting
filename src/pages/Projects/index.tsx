import { useLocation } from "react-router-dom";
import OpenCards from "../../components/openCards";
import ScrollUp from "../../components/scrollup";
import { useEffect } from "react";
import { motion } from "framer-motion";

import WhatsApp from "../../components/whatsappscroll";
import Cursor from "../../components/cursoFollower";
import { Tilt } from "react-tilt";

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
     <section className=" bg-[#030B0F] md:h-screen h:full  mt-[96px]">
        <div className="flex flex-col lg:flex-row lg:gap-30  h-full container w-full mx-auto">
          <div className="w-full h-full  flex flex-col justify-center max-w-[800px] z-50 mt-8 md:mt-5 ">
            <h2 className="text-[#f4f4f4] lg:text-[102px] md:text-5xl text-3xl  text-right font-bold z-10 [text-shadow:_0_10px_0_rgb(0_0_0_/_90%)]">
            פרויקטים מומלצים
            
            </h2>
            <p className="text-[#6FCFED] lg:text-2xl text-lg">
            בדוק את העבודות האחרונות שלנו.
            </p>

            {/* <p className="text-white lg:text-2xl font-normal lg:mt-[10px] mt-5 text-xl">
          המותג שלך צריך פיתוח בהתאמה אישית ובטכנולוגיות מתקדמות
          כגון:Wordpress, React, Google Analytics
        </p> */}
            <div className="flex gap-7 mt-[30px]"></div>
          </div>
          <Tilt>
            <img
              src={
               "https://res.cloudinary.com/landingpage2/image/upload/v1721405572/Remove-bg.ai_1721405473183_wtmvo4.png"
              }
              alt="background hero"
              className="lg:h-full  object-cover  md:max-w-[600px] mx-auto  overflow-visible  h-[600px] md:h-[900px] "
              data-tilt
            />
          </Tilt>
        </div>
      </section>
      <section className=" bg-[#030B0F]">
        <OpenCards />
      </section>
      <ScrollUp />
      <WhatsApp />
      <Cursor/>
    </motion.div>
  );
};

export default Projects;
