import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, Code, Server } from "lucide-react";

import web from "../../assets/svg/web.svg";
import graphic from "../../assets/svg/graphic.svg";
import server from "../../assets/svg/server.svg";
import Secimg from "../../assets/svg/pictureSec.svg";

const About = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />, 
      image: graphic, 
      title: "עיצוב גרפי", 
      description: "מחלקת העיצוב הגרפי שלנו מתמחה ביצירת חוויות ויזואליות מרשימות המותאמות לזהות המותג שלך ולקהל היעד.", 
      link: "/design", 
      gradient: "from-[#6FCFED] to-purple-500"
    },
    {
      icon: <Code className="w-8 h-8" />, 
      image: web, 
      title: "פיתוח ותכנות", 
      description: "מחלקת הפיתוח והתכנות שלנו מתמחה בבניית אתרים מתקדמים המותאמים אישית לצרכי העסק שלך.", 
      link: "/development", 
      gradient: "from-blue-500 to-[#C96CBE]"
    },
    {
      icon: <Server className="w-8 h-8" />, 
      image: server, 
      title: "אחסון והקצאת שרתים", 
      description: "מחלקת האחסון והתחזוקה שלנו מספקת פתרונות מקיפים להבטחת הביצועים והאבטחה של האתר שלך.", 
      link: "/server", 
      gradient: "from-orange-500 to-[#C96CBE]"
    }
  ];

  return (
    <div className="bg-[#030B0F] overflow-hidden rtl text-right">
      {/* Hero Section */}
      <section className="relative py-24">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #6FCFED 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #C96CBE 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                מצוינות דיגיטלית
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">ברוכים הבאים ל <span className="text-[#6fcfed]">DotVizion</span> היא השותף המהימן שלך בעולם הדיגיטלי. אנו יוצרים פתרונות דיגיטליים חדשניים ויעילים המסייעים לעסקים לצמוח ולהצליח בנוף הדיגיטלי המודרני.</p>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={Secimg} alt="Technology Illustration" className="relative w-full max-w-[554px] mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              השירותים שלנו
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              המקום שבו כל הפתרונות הדיגיטליים נמצאים תחת קורת גג אחת!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/5 min-h-80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-4 mb-6 flex-row-reverse">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 mb-8">
                    {service.description}
                  </p>

                  <Link to={service.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-[#6FCFED] hover:text-white transition-colors flex-row-reverse"
                    >
                      <span>עמוד שירות</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
