import  { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import html from "../../assets/html.png";
import css from "../../assets/css (2).png";
import elementor from "../../assets/elementor.png";
import wordPress from "../../assets/wordpress.png";
import shopp from "../../assets/shoppy.png";
import js from "../../assets/javascript.png"
import {

  Database,
  Globe,
  Laptop,
  Smartphone,
  Server,
  
  MonitorSmartphone
} from "lucide-react";
import FAQ from "../../components/FAQ";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";

const DevelopmentPage = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "אתרי אינטרנט",
      description: "פיתוח אתרים מותאמים אישית עם חווית משתמש מעולה"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "אפליקציות מובייל",
      description: "פיתוח אפליקציות iOS ו-Android עם ביצועים מעולים"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "מערכות ניהול",
      description: "פתרונות תוכנה מותאמים אישית לניהול העסק שלך"
    },
    {
      icon: <MonitorSmartphone className="w-12 h-12" />,
      title: "חווית משתמש",
      description: "עיצוב ממשק משתמש מודרני ואינטואיטיבי"
    }
  ];

  const technologies = [
    { name: "HTML5", icon: html, color: "#E34F26" },
    { name: "CSS3", icon: css, color: "#1572B6" },
    { name: "JavaScript", icon: js, color: "#F7DF1E" },
    { name: "WordPress", icon: wordPress, color: "#21759B" },
    { name: "Elementor", icon: elementor, color: "#92003B" },
    { name: "Shopify", icon: shopp, color: "#7AB55C" }
  ];

  const features = [
    {
      title: "אתרים מותאמים אישית",
      description: "פיתוח אתרים בהתאמה מלאה לצרכי העסק שלך",
      icon: <Laptop className="w-8 h-8" />
    },
    {
      title: "אופטימיזציה למנועי חיפוש",
      description: "שיפור הדירוג שלך בגוגל ומנועי חיפוש אחרים",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "אבטחה מתקדמת",
      description: "הגנה על המידע שלך עם פתרונות אבטחה מתקדמים",
      icon: <Server className="w-8 h-8" />
    }
  ];

  const sendEmail = async (e:any) => {
    e.preventDefault();
    const { name, lastName, email, phone, message } = formData;

    if (!name || !email || !message || !phone) {
      toast.error("נא למלא את כל השדות");
      return;
    }

    try {
      await emailjs.send(
        "service_4linpx5",
        "template_ilmbuah",
        {
          from_name: `${name} ${lastName}`,
          phone,
          message,
          email
        },
        "cWFIwkGX6Ph0Mm988"
      );

      toast.success("ההודעה נשלחה בהצלחה!");
      setFormData({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast.error("שגיאה בשליחת ההודעה");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-[#030B0F] to-[#0A1A24]"
    >
      {/* Hero Section */}
      <section className="min-h-screen pt-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            <motion.div
              style={{ y }}
              className="text-right"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl lg:text-7xl font-bold text-white mb-6"
              >
                פיתוח אתרים
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  ואפליקציות מתקדמות
                </span>
              </motion.h1>
              <p className="text-gray-300 text-lg mb-8">
                הפתרונות הדיגיטליים המתקדמים ביותר לעסק שלך
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white px-8 py-4 rounded-xl font-medium"
                >
                  התחל פרויקט
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white px-8 py-4 rounded-xl font-medium backdrop-blur-sm"
                >
                  גלה עוד
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1726131512/Differeacting/file_1_kvcraa.png"
                alt="Web Development"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030B0F] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              השירותים שלנו
            </h2>
            <p className="text-gray-400">
              פתרונות דיגיטליים מקצה לקצה לעסק שלך
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="mb-6 text-[#6FCFED]">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              הטכנולוגיות שלנו
            </h2>
            <p className="text-gray-400">
              אנו עובדים עם הטכנולוגיות המתקדמות ביותר
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-20 h-20 rounded-2xl p-4 mb-4"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white/80">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              היתרונות שלנו
            </h2>
            <p className="text-gray-400">
              למה לבחור בנו לפיתוח הפרויקט שלך
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <div className="mb-6 text-[#6FCFED]">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/landingpage2/image/upload/v1726125355/Differeacting/gy-rRih3DFPcFHQ0p-7BP-transformed_n4ekcz.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              צור קשר
            </h2>
            <p className="text-center text-gray-300 mb-8">
              נשמח לשמוע על הפרויקט שלך ולעזור לך להפוך אותו למציאות
            </p>

            <form onSubmit={sendEmail} className="space-y-6">
              {/* Form fields here - similar to your original form but with enhanced styling */}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Component */}
      <FAQ />
      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default DevelopmentPage;