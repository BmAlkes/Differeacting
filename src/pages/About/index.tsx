import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Users, Code, Lightbulb, Rocket, Brush, Target } from "lucide-react";
import Reccomend from "../../components/footer";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";

const AboutPage = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const teamValues = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "חדשנות טכנולוגית",
      description: "שימוש בטכנולוגיות המתקדמות ביותר"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "מיקוד בתוצאות",
      description: "מחויבות להשגת יעדי הלקוח"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "עיצוב מדויק",
      description: "חווית משתמש מושלמת"
    }
  ];

  React.useEffect(() => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - Dotvizion</title>
        <link rel="canonical" href="https://www.dotvizion/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="my-9 pt-24 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 50% 50%, #6FCFED 0%, transparent 50%)",
            y: y1
          }}
        />

        <div className="container mx-auto px-4 relative">
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
                עושים את זה
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  מדהים
                </span>
              </motion.h1>
              <p className="text-gray-300 text-xl mb-8">
                חדשנות, יצירתיות ומקצועיות במקום אחד
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4"
              >
                <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white px-8 py-4 rounded-xl font-medium"
                  >
                  צור קשר
                </motion.button>
                  </Link>
                <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white px-8 py-4 rounded-xl font-medium backdrop-blur-sm"
                  >
                  גלה עוד
                </motion.button>
                  </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ y: y2 }}
              className="perspective"
            >
              <motion.img
                whileHover={{ rotateY: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://res.cloudinary.com/landingpage2/image/upload/v1721405572/Remove-bg.ai_1721405515178_ggbi3j.png"
                alt="About Us"
                className="w-full h-auto rounded-2xl "
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              הערכים שלנו
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              אנחנו מאמינים בחדשנות, יצירתיות ומקצועיות
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <div className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
        הסיפור שלנו
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        מסע של חדשנות ויצירתיות בעולם הדיגיטלי
      </p>
    </motion.div>

    {/* First Story Block */}
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6">
          מתחילים את המסע
        </h3>
        <p className="text-gray-300 text-lg mb-8">
          ב-Dotvizion, אנחנו קולקטיב של יוצרים, מתכנתים ומשווקים המאמינים בחדשנות וביצירתיות. 
          הסיפור שלנו מתחיל מתשוקה עמוקה לטכנולוגיה ועיצוב, ומהרצון ליצור פתרונות דיגיטליים שלא רק נראים מעולה, אלא גם עובדים בצורה מושלמת.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#6FCFED]/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#6FCFED]" />
            </div>
            <div>
              <h4 className="text-white font-semibold">צוות מקצועי</h4>
              <p className="text-gray-400">מומחים מובילים בתחומם</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative group"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1727720233/modern-computer-with-colorful-interface-design_uycemm.png"
          alt="Our Beginning"
          className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6FCFED]/20 to-[#C96CBE]/20 rounded-2xl" />
      </motion.div>
    </div>

    {/* Second Story Block */}
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
      <motion.div
        className="relative group order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1728819949/Differeacting/r1blrgdr5u755hwnlz2g.png"
          alt="Our Process"
          className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C96CBE]/20 to-[#6FCFED]/20 rounded-2xl" />
      </motion.div>

      <motion.div
        className="order-1 lg:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6">
          התהליך שלנו
        </h3>
        <p className="text-gray-300 text-lg mb-8">
          אנחנו מאמינים שכל פרויקט הוא ייחודי ודורש גישה מותאמת אישית. התהליך שלנו מתחיל בהבנה מעמיקה של צרכי הלקוח, 
          ממשיך דרך תכנון קפדני ומסתיים ביישום מדויק. אנחנו מקפידים על תקשורת שוטפת ושקיפות מלאה לאורך כל הדרך.
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#C96CBE]/20 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-[#C96CBE]" />
          </div>
          <div>
            <h4 className="text-white font-semibold">חדשנות מתמדת</h4>
            <p className="text-gray-400">תמיד בחזית הטכנולוגיה</p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Third Story Block */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl lg:text-4xl font-bold text-white mb-6">
          התוצאות שלנו
        </h3>
        <p className="text-gray-300 text-lg mb-8">
          הצלחת הלקוחות שלנו היא ההצלחה שלנו. אנחנו גאים בתוצאות שהשגנו עבור מגוון רחב של עסקים, 
          מסטארט-אפים קטנים ועד חברות גדולות. כל פרויקט שאנחנו מבצעים מוסיף לניסיון שלנו ומחזק את המומחיות שלנו.
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#6FCFED]/20 flex items-center justify-center">
            <Rocket className="w-6 h-6 text-[#6FCFED]" />
          </div>
          <div>
            <h4 className="text-white font-semibold">תוצאות מוכחות</h4>
            <p className="text-gray-400">מחויבות להצלחת הלקוח</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative group"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1730720259/freepik-export-20241104113723dCtk_fkhqmx.png"
          alt="Our Results"
          className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6FCFED]/20 to-[#C96CBE]/20 rounded-2xl" />
      </motion.div>
    </div>

  </div>
</section>

      {/* Mission Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                המשימה שלנו
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed">
                אנחנו כאן כדי לעזור לעסקים לצמוח בעולם הדיגיטלי המודרני. 
                באמצעות שילוב של טכנולוגיה מתקדמת, עיצוב מרהיב ואסטרטגיה חכמה, 
                אנחנו מספקים פתרונות שעובדים.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "150+", label: "פרויקטים" },
              { number: "50+", label: "לקוחות מרוצים" },
              { number: "5", label: "שנות ניסיון" },
              { number: "24/7", label: "תמיכה" }
            ].map((stat, _) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recommended Section */}
      <Reccomend />
      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default AboutPage;