import { Link, useLocation } from "react-router-dom";
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
      <section className=" bg-[#030B0F] md:h-screen h:full  mt-[96px]">
        <div className="flex flex-col lg:flex-row lg:gap-x-56  h-full container w-full items-center  ">
          <div className="w-full h-full  flex flex-col justify-center max-w-[600px] z-50 mt-8 md:mt-5 ">
            <h2 className="text-[#6FCFED] lg:text-[70px] md:text-5xl text-3xl text-center lg:text-right font-bold z-10">
            בדוק את העבודות האחרונות שלנו.
            </h2>
           

          
          </div>

          <img
            src={
              "https://res.cloudinary.com/landingpage2/image/upload/v1721405572/Remove-bg.ai_1721405473183_wtmvo4.png"
            }
            alt="background hero"
            className="lg:h-[100%]   object-cover  md:max-w-[400px]  overflow-visible  h-[400px]  rotateClass "
          />
        </div>
      </section>
      <section className=" bg-[#030B0F]">
        <OpenCards />
      </section>

      {/* <section className=" bg-[#030B0F] content ">
        <div className="mx-auto max-w-7xl ">
          <div className="grid grid-cols-1 items-center justify-center">
           

            <div className="p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl z-50 relative">
              <div className="flex flex-col items-center">

              <h2 className="text-[#6FCFED]  max-w-[700px] text-[70px]  text-center font-semibold leading-10 mb-11">
                מוכן להפוך <br/>לפרוייקט הבא שלנו?? 
              </h2>
              <h3>השאר פרטים!</h3>
              </div>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Phone"
              />
              <div className="mb-10">
                <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                  Preferred method of communication
                </h4>
                <div className="flex">
                  <div className="flex items-center mr-11">
                    <input
                      id="radio-group-1"
                      type="radio"
                      name="radio-group"
                      className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                    />
                    <label
                      htmlFor="radio-group-1"
                      className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                    >
                      <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio-group-2"
                      type="radio"
                      name="radio-group"
                      className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                    />
                    <label
                      htmlFor="radio-group-2"
                      className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                    >
                      <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                      Phone
                    </label>
                  </div>
                </div>
              </div>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Message"
              />
              <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
                Send
              </button>
            </div>
          </div>
        </div>
  

        <video muted autoPlay loop id="myVideo" >
          <source
            src="https://res.cloudinary.com/landingpage2/video/upload/v1723803860/603591_Abstract_Animation_1920x1080_jfe98x.mp4"
            type="video/mp4"
            />
        </video>
      
      </section> */}
     
      <section className=" bg-[#030B0F]  ">
        <div className="container">
          <h2 className="lg:text-4xl md:text-3xl text-xl font-semibold text-center mx-auto  text-white py-6">
            טמפלט וורדפרס על יד Differeacting
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
