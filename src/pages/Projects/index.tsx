import { useLocation } from "react-router-dom";
import OpenCards from "../../components/openCards";
import ScrollUp from "../../components/scrollup";
import { useEffect } from "react";
import { motion } from "framer-motion";

import WhatsApp from "../../components/whatsappscroll";
import Cursor from "../../components/cursoFollower";
import { Helmet } from "react-helmet-async";


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
        <Helmet>
        <meta charSet="utf-8"/>
        <title>Differeacting - Projects -  סטודיו לבניית אתרים Differeacting: הופכים חלומות ליצירה באינטרנט </title>
        <link rel="canonical" href="https://www.differeacting.com/projects" />
      </Helmet>
   
      <section className=" bg-[#030B0F] lg:h-screen   mt-[96px]">
        <div className="flex flex-col lg:flex-row lg:gap-x-10  h-full container w-full items-center justify-center ">
          <div className="w-full  flex flex-col justify-between  lg:max-w-[700px] z-50 mt-8 md:mt-5 ">
            <h1 className="text-[#6FCFED] lg:text-[102px] md:text-5xl text-3xl text-center lg:text-right font-bold z-10 [text-shadow:_0_15px_0px_rgb(0_0_0_/_90%)]">
         
            פרויקטים <br/>מומלצים
            </h1>
           

          
          </div>

          <img
            src={
              "https://res.cloudinary.com/landingpage2/image/upload/v1721405572/Remove-bg.ai_1721405473183_wtmvo4.png"
            }
            alt="background hero"
            className="lg:h-[100%]   object-cover w-[250px]  md:w-[380px] lg:w-[250px]  overflow-visible   rotateClass "
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
     
      <ScrollUp />
      <WhatsApp />
      <Cursor />
    </motion.div>
  );
};

export default Projects;
