import {  useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, Scale } from "lucide-react";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";

const Terms = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "אימייל",
      value: "info@dotvizion.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "טלפון",
      value: "054425884",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "סמכות שיפוט",
      value: "תל אביב",
    },
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
        <title>תקנון - Dotvizion</title>
        <link rel="canonical" href="https://www.dotvizion.com/terms" />
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-right max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-4xl lg:text-7xl font-bold text-white mb-6"
              style={{ opacity }}
            >
              תקנון אתר
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87ceeb] to-[#ff860d]">
                DotVizion
              </span>
            </motion.h1>
            <p className="text-gray-300 text-lg mb-8">
              ברוכים הבאים לאתר של DotVizion. השימוש באתר זה כפוף לתנאים המפורטים להלן. השימוש באתר מהווה הסכמה לתקנון זה ולתנאיו.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto"
          >
            <div className="space-y-8 text-right">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. הגדרות כלליות</h2>
                <ul className="list-disc text-gray-300 mr-6 space-y-2">
                  <li>האתר נועד לספק מידע ושירותים בתחום עיצוב ופיתוח אתרים, יישומים ושירותי SEO.</li>
                  <li>כל משתמש באתר מצהיר כי קרא והבין את התנאים וכי הוא מסכים להם במלואם.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. שימוש באתר</h2>
                <ul className="list-disc text-gray-300 mr-6 space-y-2">
                  <li>השימוש באתר מיועד לגולשים מגיל 18 ומעלה.</li>
                  <li>אין לעשות שימוש בתכנים באתר לצורך בלתי חוקי או הפוגע בזכויות צד ג'.</li>
                  <li>חל איסור להעתיק, לשכפל, להפיץ או לפרסם תוכן מהאתר ללא אישור מראש ובכתב.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. שירותים ותשלומים</h2>
                <ul className="list-disc text-gray-300 mr-6 space-y-2">
                  <li>השירותים המוצעים באתר כפופים לתשלום כפי שיפורט בעמודי השירותים השונים.</li>
                  <li>DotVizion שומרת לעצמה את הזכות לשנות את מחירי השירותים בכל עת.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. אחריות</h2>
                <ul className="list-disc text-gray-300 mr-6 space-y-2">
                  <li>DotVizion שואפת להבטיח את זמינות האתר בכל עת, אך אין התחייבות כי האתר יפעל ללא הפרעות או טעויות.</li>
                  <li>החברה אינה אחראית לנזקים ישירים או עקיפים שעלולים להיגרם כתוצאה מהשימוש באתר.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. פרטיות ואבטחת מידע</h2>
                <ul className="list-disc text-gray-300 mr-6 space-y-2">
                  <li>המידע האישי שייאסף באתר יישמר בהתאם למדיניות הפרטיות של DotVizion ולא יועבר לצדדים שלישיים ללא אישור מפורש.</li>
                  <li>האתר מאובטח באמצעים טכנולוגיים מתקדמים לשמירה על פרטיות המשתמשים.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. קניין רוחני</h2>
                <ul className="list-disc text-gray-300 mr-6 space-y-2">
                  <li>כל הזכויות על התכנים, העיצוב, הלוגו והחומרים באתר שייכות ל-DotVizion ואין להשתמש בהם ללא רשות.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. שינויים בתקנון</h2>
                <ul className="list-disc text-gray-300 mr-6 space-y-2">
                  <li>DotVizion שומרת לעצמה את הזכות לעדכן את תנאי התקנון בכל עת. עדכון זה ייכנס לתוקף מיום פרסומו באתר.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center hover:border-[#6FCFED] transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#87ceeb] to-[#ff860d] flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-400">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default Terms;