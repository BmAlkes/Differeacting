import  { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import { CreateLead } from "../../api/LeadApi";
import { toast } from "react-toastify";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare
} from "lucide-react";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";

const Contact = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "אימייל",
      value: "info@differeacting.co.il",
      href: "mailto:info@differeacting.co.il"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "טלפון",
      value: "054-589-9899",
      href: "tel:+9720545899899"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "מיקום",
      value: "Tel Aviv",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "https://www.facebook.com/profile.php?id=61558644790775", name: "Facebook" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/company/differeacting/", name: "LinkedIn" },
    { icon: <Instagram />, href: "https://www.instagram.com/differeacting/", name: "Instagram" }
  ];

  const { mutate } = useMutation({
    mutationFn: CreateLead,
    onSuccess: () => {
      toast.success("ההודעה נשלחה בהצלחה! נחזור אליך בקרוב.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const { name, email, message, phone } = formData;

    if (!name || !email || !message || !phone) {
      toast.error("נא למלא את כל השדות");
      return;
    }

    mutate(formData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6">
        <motion.div
          whileHover={{ y: -2 }}
          className="relative"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="שם מלא"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     text-white placeholder-white/50 focus:border-[#6FCFED] 
                     transition-colors outline-none text-right"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -2 }}
          className="relative"
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="אימייל"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     text-white placeholder-white/50 focus:border-[#6FCFED] 
                     transition-colors outline-none text-right"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -2 }}
          className="relative"
        >
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            placeholder="טלפון"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     text-white placeholder-white/50 focus:border-[#6FCFED] 
                     transition-colors outline-none text-right"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -2 }}
          className="relative"
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            placeholder="הודעה"
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                     text-white placeholder-white/50 focus:border-[#6FCFED] 
                     transition-colors outline-none text-right resize-none"
          />
        </motion.div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] 
                 text-white py-4 rounded-xl font-medium flex items-center 
                 justify-center gap-2 hover:shadow-lg transition-all"
      >
        <span>שלח הודעה</span>
        <MessageSquare className="w-5 h-5" />
      </motion.button>
    </form>
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-[#030B0F] to-[#0A1A24]"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>צור קשר - Differeacting</title>
        <link rel="canonical" href="https://www.differeacting.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className=" mt-8 pt-24 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 50% 50%, #6FCFED 0%, transparent 50%)",
            y
          }}
        />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-right"
            >
              <motion.h1 
                className="text-4xl lg:text-7xl font-bold text-white mb-6"
                style={{ opacity }}
              >
                Differeacting
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  תמיד כאן בשבילך
                </span>
              </motion.h1>
              <p className="text-gray-300 text-lg mb-8">
                אנו ב-Differeacting מאמינים בתקשורת פתוחה וישירה עם לקוחותינו.
                נשמח לענות על כל שאלה ולעזור בכל דרך אפשרית.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1727720950/graphic-designer-crafts-vibrant-logo-digital-tablet-flat-illustration_u1iure.png"
                alt="Contact Us"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-[#6FCFED]/20 to-[#C96CBE]/20 rounded-2xl"
                style={{ y: useTransform(scrollY, [0, 300], [0, 30]) }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                href={info.href}
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:border-[#6FCFED] transition-all"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  animate={{
                    scale: hoveredCard === index ? 1.1 : 1,
                    rotate: hoveredCard === index ? 360 : 0
                  }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] flex items-center justify-center mb-4"
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <h2 className="text-3xl font-bold text-white mb-8">שלח לנו הודעה</h2>
              {renderForm()}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">בוא נתחבר</h2>
                <p className="text-gray-400">
                  עקבו אחרינו ברשתות החברתיות לעדכונים ותוכן מעניין
                </p>
              </div>
              
              <div className="flex gap-4">
                {socialLinks.map((social, _) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="bg-white/10 p-4 rounded-full hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default Contact;