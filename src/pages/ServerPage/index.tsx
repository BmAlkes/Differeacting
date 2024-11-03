import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import bg from "../../assets/svg/vetor1.svg";
import {
  Shield,
  Database,
  Gauge,
  ArrowUpRightSquare,
  Clock,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";

const ServerPage = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

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

  const sendEmail = async (e: any) => {
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
          email,
        },
        "cWFIwkGX6Ph0Mm988"
      );

      toast.success("ההודעה נשלחה בהצלחה!");
      setFormData({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
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
      <section className="py-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/landingpage2/image/upload/v1726125355/Differeacting/gy-rRih3DFPcFHQ0p-7BP-transformed_n4ekcz.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              צור קשר
            </h2>
            <p className="text-center text-gray-300 mb-8">
              נשמח לעזור לך לבחור את הפתרון המתאים ביותר עבורך
            </p>

            <form onSubmit={sendEmail} className="space-y-6">
              {/* Form fields remain the same as your original form */}
            </form>
          </div>
        </div>
      </section>

      <FAQ />
      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default ServerPage;
