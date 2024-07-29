import { Link, useLocation } from "react-router-dom";
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
              className="lg:h-full  object-cover  md:max-w-[600px] mx-auto  overflow-visible  h-[400px] md:h-[900px] "
              data-tilt
            />
          </Tilt>
        </div>
      </section>
      <section className=" bg-[#030B0F]">
        <OpenCards />
      </section>
      <section className=" bg-[#030B0F] ">
        <div className="container">
          <h2 className="lg:text-4xl md:text-3xl text-xl font-semibold text-center mx-auto lg:text-right text-white py-6">
            Templates Wordpress By Differeacting
          </h2>

          <div className=" project__container grid">
            <Link to="https://tan-porcupine-120244.hostingersite.com/">
              <div className="relative grid lg:h-[40rem] h-[25rem] w-full lg:max-w-[26rem] md:min-w-[20rem] max-w-[18rem]  flex-col  items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center text-gray-700 ">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <img
                  src={
                    "https://res.cloudinary.com/landingpage2/image/upload/v1722105071/Screenshot_10_fhniyl.png"
                  }
                  alt={"contabilidade"}
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
                <div className="my-4 z-20 p-4">
                  <h2 className="text-white text-2xl font-bold pb-2">
                    {"Home Contabilidade"}
                  </h2>
                  <p className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)] py-3">
                    {"website for accountant"}
                  </p>
                </div>
              </div>
            </Link>
            <Link to="https://mediumturquoise-wolverine-520367.hostingersite.com/">
              <div className="relative grid lg:h-[40rem] h-[25rem] w-full lg:max-w-[26rem] md:min-w-[20rem] max-w-[18rem]  flex-col  items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center text-gray-700 ">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <img
                  src={
                    "https://res.cloudinary.com/landingpage2/image/upload/v1722105732/Screenshot_11_qjpjde.png"
                  }
                  alt={"contabilidade"}
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
                <div className="my-4 z-20 p-4">
                  <h2 className="text-white text-2xl font-bold pb-2">
                    {"Zeus Advogados"}
                  </h2>
                  <p className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)] py-3">
                    {"website for Laywer Office"}
                  </p>
                </div>
              </div>
            </Link>
            <Link to="https://darkslategray-rail-827860.hostingersite.com">
              <div className="relative grid lg:h-[40rem] h-[25rem] w-full lg:max-w-[26rem] md:min-w-[20rem] max-w-[18rem]  flex-col  items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center text-gray-700 ">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <img
                  src={
                    "https://res.cloudinary.com/landingpage2/image/upload/v1722105921/Screenshot_12_pvlhcp.png"
                  }
                  alt={"contabilidade"}
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
                <div className="my-4 z-20 p-4">
                  <h2 className="text-white text-2xl font-bold pb-2">
                    {"Glow Modas"}
                  </h2>
                  <p className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)] py-3">
                    {"Store online for clothes"}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <ScrollUp />
      <WhatsApp />
      <Cursor />
    </motion.div>
  );
};

export default Projects;
