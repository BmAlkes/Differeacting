import  { useState, useEffect } from "react";
import bg from "../../assets/svg/vetor1.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  Megaphone,
  Search,
  BarChart3,

  Mail,
  Instagram,
  Facebook,
  Globe,
  SendIcon,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import { useMutation } from "@tanstack/react-query";
import { CreateLead } from "../../api/LeadApi";

const DigitalMarketingPage = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);



  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "קידום אתרים SEO",
      description: "אופטימיזציה מקצועית למנועי חיפוש להגדלת החשיפה האורגנית"
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "ניהול מדיה חברתית",
      description: "ניהול מקצועי של הנוכחות שלך ברשתות החברתיות"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "פרסום ממומן",
      description: "קמפיינים ממומנים מותאמים אישית להשגת תוצאות מקסימליות"
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "שיווק במייל",
      description: "אסטרטגיות דיוור אפקטיביות להגדלת המכירות"
    }
  ];

  const stats = [
    { number: "93%", text: "לקוחות מרוצים" },
    { number: "150+", text: "פרויקטים מוצלחים" },
    { number: "45%", text: "גידול ממוצע בתנועה" },
    { number: "2X", text: "הכפלת ההמרות" }
  ];

  const socialPlatforms = [
    {
      icon: <Instagram className="w-8 h-8" />,
      name: "Instagram",
      followers: "10K+",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      name: "Facebook",
      followers: "15K+",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "Google",
      followers: "1M+",
      color: "from-green-500 to-emerald-400"
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { mutate } = useMutation({
    mutationFn: CreateLead,
    onSuccess: () => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: () => toast.error("Error sending message. Please try again."),
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
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
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-[#030B0F] to-[#0A1A24]"
    >
      {/* Hero Section */}
      <section className="min-h-screen pt-24 relative overflow-hidden">
        <motion.img
          src={bg}
          alt=""
          className="absolute left-0 bottom-0 w-full max-h-[826px] opacity-10"
          style={{ y }}
        />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-right"
            >
              <h3 className="text-[#f1fafd] text-xl mb-4">
                פתחו את שערי הדיגיטל שלכם עם שיווק דיגיטלי חכם
              </h3>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                שיווק דיגיטלי
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  שעובד בשבילכם
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                אסטרטגיות שיווק מתקדמות להגדלת החשיפה והמכירות שלכם
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white px-8 py-4 rounded-xl font-medium"
              >
                תיאום פגישת ייעוץ
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1726132161/Differeacting/vibrant-digital-art-scene-computer-screen-display-vector_wworpb.png"
                alt="Digital Marketing"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030B0F] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              השירותים שלנו
            </h2>
            <p className="text-gray-400">
              פתרונות שיווק דיגיטלי מקצה לקצה
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

      {/* Social Media Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              הנוכחות שלנו ברשת
            </h2>
            <p className="text-gray-400">
              תוצאות אמיתיות בפלטפורמות המובילות
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-r ${platform.color} p-8 rounded-2xl text-white`}
              >
                <div className="flex items-center justify-between mb-4">
                  {platform.icon}
                  <span className="text-2xl font-bold">{platform.followers}</span>
                </div>
                <h3 className="text-lg font-medium">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
     

      <FAQ />
      <section className="bg-gradient-to-b from-[#E7E7E7] to-white py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-right">
              מוכנים להתחיל פרויקט ביחד?
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-right">
              יש לך פרויקט בראש? נשמח לשמוע עליו ולעזור להפוך אותו למציאות.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "name", placeholder: "שם מלא", type: "text" },
                  { name: "email", placeholder: "אימייל", type: "email" },
                  { name: "phone", placeholder: "טלפון", type: "tel" },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [field.name]: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl 
                               focus:ring-2 focus:ring-[#6FCFED] focus:border-transparent transition-all 
                               outline-none text-right"
                    />
                  </motion.div>
                ))}
                <div className="md:col-span-2">
                  <motion.textarea
                    whileHover={{ scale: 1.02 }}
                    name="message"
                    placeholder="ספר/י לנו על הפרויקט שלך"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl 
                             focus:ring-2 focus:ring-[#6FCFED] focus:border-transparent transition-all 
                             outline-none min-h-[120px] text-right"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] 
                         text-white rounded-xl font-medium flex items-center justify-center gap-2
                         hover:shadow-lg transition-all duration-300"
              >
                <SendIcon className="w-5 h-5" />
                <span>שליחת הפרטים</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default DigitalMarketingPage;