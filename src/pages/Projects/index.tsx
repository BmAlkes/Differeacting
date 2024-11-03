import { useLocation } from "react-router-dom";
import OpenCards from "../../components/openCards";
import ScrollUp from "../../components/scrollup";
import { FormEvent, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import WhatsApp from "../../components/whatsappscroll";
import Cursor from "../../components/cursoFollower";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import { CreateLead } from "../../api/LeadApi";
import { toast } from "react-toastify";

const Projects = () => {
  const { pathname } = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  const { mutate } = useMutation({
    mutationFn: CreateLead,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Message sent successfully! We will be in touch soon.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message, phone } = formData;

    if (!name || !email || !message || !phone) {
      toast.error("Fill all the fields");
      return;
    }

    mutate(formData);
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
        <title>Differeacting - Projects - סטודיו לבניית אתרים Differeacting: הופכים חלומות ליצירה באינטרנט </title>
        <link rel="canonical" href="https://www.differeacting.com/projects" />
      </Helmet>
   
      <section className="bg-[#030B0F] lg:h-screen mt-[96px]">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 h-full container w-full items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col justify-between lg:max-w-[700px] z-50 mt-8 md:mt-5"
          >
            <h1 className="text-white lg:text-[102px] md:text-5xl text-3xl text-center lg:text-right font-bold z-10 [text-shadow:_0_15px_0px_rgb(0_0_0_/_90%)]">
              פרויקטים <br/>מומלצים
            </h1>
          </motion.div>

          <motion.img
            animate={controls}
            src="https://res.cloudinary.com/landingpage2/image/upload/v1721405572/Remove-bg.ai_1721405473183_wtmvo4.png"
            alt="background hero"
            className="lg:h-[100%] object-cover w-[250px] md:w-[380px] lg:w-[250px] overflow-visible"
            style={{ transformOrigin: 'center center' }}
          />
        </div>
      </section>

      <section className="bg-[#030B0F]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <OpenCards />
        </motion.div>
      </section>

      <section className="bg-[#030B0F] content">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#E7E7E7] lg:py-[140px] lg:px-[150px] py-7 px-3"
        >
          <div className="container">
            <h3 className="text-3xl lg:text-6xl max-w-[641px] font-bold mb-2 text-gray-900 pb-10">
              מוכנים להתחיל פרויקט ביחד?
            </h3>
            <p className="text-lg max-w-[302px] mb-9 font-normal">
              יש לך פרויקט בראש? כולנו אוזניים כשזה זה מגיע לגלות על מטרות העסק
              הדיגיטלי שלך. אנחנו נשמח לשמוע ממך.
            </p>

            <form
              onSubmit={sendEmail}
              className="flex lg:flex-row flex-wrap flex-col gap-4"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="שם מלא"
                className="lg:w-[280px] bg-transparent border-b border-[#B0B0B0] text-base h-12 p-1 focus:border-[#6FCFED] transition-colors"
                value={formData.name}
                onChange={handleInputChange}
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="email@email.com"
                className="lg:w-[280px] bg-transparent border-b border-[#B0B0B0] text-base h-12 p-1 focus:border-[#6FCFED] transition-colors"
                value={formData.email}
                onChange={handleInputChange}
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="phone"
                placeholder="טלפון"
                className="lg:w-[280px] bg-transparent border-b border-[#B0B0B0] text-base h-12 p-1 focus:border-[#6FCFED] transition-colors"
                value={formData.phone}
                onChange={handleInputChange}
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                className="resize-none lg:w-[50%] bg-transparent border-b border-[#B0B0B0] text-base h-12 p-1 focus:border-[#6FCFED] transition-colors"
                placeholder="ספרו לנו משהו כל הפרויקט שלכם (אופציונלי)"
                value={formData.message}
                onChange={handleInputChange}
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="lg:w-[40%] bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-[10px] p-[1px] text-center z-0"
              >
                <span className="flex w-full bg-transparent text-white rounded-[10px] py-[10px] px-[14px] hover:bg-gradient-to-r from-[#41b1d3] to-[#a30f91] hover: items-center justify-center">
                  שליחת הפרטים
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>
     
      <ScrollUp />
      <WhatsApp />
      <Cursor />
    </motion.div>
  );
};

export default Projects;