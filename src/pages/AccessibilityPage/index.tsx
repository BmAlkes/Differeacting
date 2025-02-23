import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Helmet } from "react-helmet-async";
import {  Mail, Phone, CheckCircle2 } from "lucide-react";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import { useLocation } from "react-router-dom";

const AccessibilityDeclaration = () => {
  const { pathname } = useLocation();
     useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const accessibilityFeatures = [
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "תקן WCAG",
      description: "האתר נבנה בהתאם להנחיות הנגישות לרשת ברמה AA"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "תצוגה מותאמת",
      description: "התאמה לתצוגה במכשירים שונים"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "ניווט נגיש",
      description: "ניווט בעזרת מקלדת בלבד, ללא צורך בעכבר"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "אימייל",
      value: "info@dotvizion.com",
      href: "mailto:info@dotvizion.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "טלפון",
      value: "054425884",
      href: "tel:+9720544425884"
    }
  ];

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
        <title>הצהרת נגישות - Dotvizion</title>
        <link rel="canonical" href="https://www.dotvizion.com/accessibility" />
      </Helmet>

      {/* Hero Section */}
      <section className="mt-8 pt-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 50% 50%, #6FCFED 0%, transparent 50%)",
            y,
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
                הצהרת נגישות
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87ceeb] to-[#ff860d]">
                  DotVizion
                </span>
              </motion.h1>
              <p className="text-gray-300 text-lg mb-8">
                אנו מחויבים להעניק חוויית גלישה נגישה לכלל המשתמשים, כולל אנשים עם מוגבלויות. אנו רואים בשוויון הזדמנויות נושא מרכזי ופועלים בהתאם לעקרונות הנגישות על פי החוק הישראלי ותקנות הנגישות לרשת.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1740329985/option-concept-illustration_fncjks.png"
                alt="Accessibility"
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
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
                    rotate: hoveredCard === index ? 360 : 0,
                  }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-[#87ceeb] to-[#ff860d] flex items-center justify-center mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <h2 className="text-3xl font-bold text-white mb-8">סיוע נוסף</h2>
              <p className="text-gray-300 mb-6">
                אם נתקלתם בבעיה כלשהי בזמן הגלישה באתר, נשמח לעמוד לרשותכם ולעשות את כל הנדרש כדי למצוא פתרון.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, _index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-300 hover:text-[#6FCFED]"
                  >
                    {info.icon}
                    <span>{info.value}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <h2 className="text-3xl font-bold text-white mb-8">מידע נוסף</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  אפשרות לשנות גודל טקסטים ולהתאים את הצבעים לנוחות המשתמש.
                </p>
                <p>
                  טקסטים ברורים ושפה פשוטה ככל האפשר.
                </p>
                <p className="text-sm text-gray-400">
                  הצהרה זו עודכנה לאחרונה בתאריך: 23.02.2025
                </p>
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

export default AccessibilityDeclaration;