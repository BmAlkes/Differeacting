import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../../assets/svg/vetor1.svg";
import {
  Shield,
  Database,
  Gauge,
  ArrowUpRightSquare,
  Clock,
  SendIcon,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import { useMutation } from "@tanstack/react-query";
import { CreateLead } from "../../api/LeadApi";
import { Helmet } from "react-helmet-async";

const ServerPage = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

 
  const hostingPlans = [
    {
      name: "בסיסי",
      price: "₪99",
      features: [
        "5GB אחסון SSD",
        "50GB תעבורה חודשית",
        "SSL חינם",
        "גיבוי יומי",
        "1 אתר",
      ],
      recommended: false,
    },
    {
      name: "עסקי",
      price: "₪199",
      features: [
        "20GB אחסון SSD",
        "200GB תעבורה חודשית",
        "SSL חינם",
        "גיבוי יומי",
        "5 אתרים",
        "תמיכה 24/7",
      ],
      recommended: true,
    },
    {
      name: "מתקדם",
      price: "₪399",
      features: [
        "50GB אחסון SSD",
        "500GB תעבורה חודשית",
        "SSL חינם",
        "גיבוי יומי",
        "אתרים ללא הגבלה",
        "תמיכה VIP",
      ],
      recommended: false,
    },
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "אבטחה מתקדמת",
      description: "הגנה מפני התקפות DDoS ומערכות אבטחה מתקדמות",
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "ביצועים מהירים",
      description: "שרתי SSD מהירים עם זמני טעינה מינימליים",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "גיבוי אוטומטי",
      description: "מערכת גיבוי יומית אוטומטית לכל הנתונים",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "זמינות 99.9%",
      description: "שרתים יציבים עם זמן פעילות מקסימלי",
    },
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

  <Helmet>
  <meta charSet="utf-8" />
  <title>Server - Dotvizion</title>
  <link rel="canonical" href="https://www.dotvizion/server" />
</Helmet>
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-[#030B0F] to-[#0A1A24]"
    >
      {/* Hero Section */}
      <section className=" h-full mt-20 pt-24 relative overflow-hidden">
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
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6">
                אחסון והקצאת
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  שרתים מתקדמים
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                פתרונות אחסון מתקדמים ושרתים מאובטחים לעסק שלך
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white px-8 py-4 rounded-xl font-medium"
              >
                התחל עכשיו
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1726132538/Differeacting/server_fgipg8.png"
                alt="Server Infrastructure"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              למה לבחור בנו?
            </h2>
            <p className="text-gray-400">
              הטכנולוגיה המתקדמת ביותר בשירות העסק שלך
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
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

      {/* Pricing Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              חבילות אחסון
            </h2>
            <p className="text-gray-400">מצא את החבילה המתאימה לך</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  plan.recommended
                    ? "bg-gradient-to-b from-[#6FCFED]/20 to-[#C96CBE]/20 border-[#6FCFED]"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-4 right-4 bg-[#6FCFED] text-white px-3 py-1 rounded-full text-sm">
                    מומלץ
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-white mb-6">
                  {plan.price}
                  <span className="text-sm font-normal text-gray-400">
                    {" "}
                    / חודש
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-300"
                    >
                      <ArrowUpRightSquare className="w-5 h-5 text-[#6FCFED] ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-medium ${
                    plan.recommended
                      ? "bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  בחר תכנית
                </motion.button>
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

export default ServerPage;
