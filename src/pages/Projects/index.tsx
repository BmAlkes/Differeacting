import { useLocation } from "react-router-dom";
import OpenCards from "../../components/openCards";
import ScrollUp from "../../components/scrollup";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";

import WhatsApp from "../../components/whatsappscroll";
import Cursor from "../../components/cursoFollower";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import { CreateLead } from "../../api/LeadApi";
import { toast } from "react-toastify";


const Projects = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { mutate } = useMutation({
    mutationFn: CreateLead,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
   
     toast.success("Message sent successfully! We will be in touch soon.",);
    },
  });

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || phone === "") {
      alert("Fill all the fields");
      return;
    }
    const formData = {
      name,
      email,
      message,
      phone,
    };

    mutate(formData);
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };

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
            <h1 className="text-white lg:text-[102px] md:text-5xl text-3xl text-center lg:text-right font-bold z-10 [text-shadow:_0_15px_0px_rgb(0_0_0_/_90%)]">
         
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

      <section className=" bg-[#030B0F] content ">
      <div className="bg-[#E7E7E7] lg:py-[140px] lg:px-[150px] py-7 px-3">
          <div className="container ">
            <h3 className="text-3xl lg:text-6xl max-w-[641px] font-bold  mb-2 text-gray-900 pb-10">
              מוכנים להתחיל פרויקט ביחד?
            </h3>
            <p className="text-lg max-w-[302px] mb-9 font-normal ">
              יש לך פרויקט בראש? כולנו אוזניים כשזה זה מגיע לגלות על מטרות העסק
              הדיגיטלי שלך. אנחנו נשמח לשמוע ממך.
            </p>

            <form
              onSubmit={sendEmail}
              className="flex lg:flex-row flex-wrap flex-col  gap-4"
            >
              <input
                type="text"
                placeholder="שם מלא"
                className=" lg:w-[280px] bg-transparent  border-b border-[#B0B0B0] text-base h-12 p-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email@email.com"
                id="footer-field"
                name="footer-field"
                className=" lg:w-[280px] bg-transparent  border-b border-[#B0B0B0] text-base h-12 p-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="טלפון"
                className=" lg:w-[280px] bg-transparent  border-b border-[#B0B0B0] text-base h-12 p-1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <textarea
                className="resize-none lg:w-[50%] bg-transparent  border-b border-[#B0B0B0] text-base h-12 p-1 "
                placeholder="ספרו לנו משהו כל הפרויקט שלכם (אופציונלי)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className=" lg:w-[40%] bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-[10px] p-[1px] text-center z-0 "
              >
                <span className="flex w-full bg-transparent  text-white rounded-[10px] py-[10px] px-[14px] hover:bg-gradient-to-r from-[#41b1d3] to-[#a30f91] hover: items-center justify-center">
                  שליחת הפרטים
                </span>
              </button>
            </form>
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
