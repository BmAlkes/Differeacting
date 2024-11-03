import  { useState, useEffect } from "react";
import bg from "../../assets/svg/vetor1.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  Palette,
  Brush,
  Image,
  Type,
  Layout,

  Sparkles,
  Search,
  Check
} from "lucide-react";
import FAQ from "../../components/FAQ";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";

const GraphicPage = () => {
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
      icon: <Layout className="w-12 h-12" />,
      title: "עיצוב לוגו ומיתוג",
      description: "יצירת זהות מותג ייחודית וזכירה",
      tools: ["Adobe Illustrator", "Photoshop", "Figma"]
    },
    {
      icon: <Image className="w-12 h-12" />,
      title: "עיצוב לדפוס ודיגיטל",
      description: "חומרי שיווק מרהיבים לכל פלטפורמה",
      tools: ["InDesign", "Photoshop", "Canva"]
    },
    {
      icon: <Type className="w-12 h-12" />,
      title: "עיצוב אתרים",
      description: "ממשקי משתמש מודרניים ואינטואיטיביים",
      tools: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      icon: <Brush className="w-12 h-12" />,
      title: "איור דיגיטלי",
      description: "איורים מותאמים אישית לצרכי המותג שלך",
      tools: ["Procreate", "Illustrator", "Photoshop"]
    }
  ];

  const portfolio = [
    {
      category: "לוגו ומיתוג",
      items: [
        {
          title: "עיצוב זהות מותגית",
          description: "מיתוג מלא לחברת סטארט-אפ",
          image: "path-to-image.jpg"
        },
        // Add more items
      ]
    },
    // Add more categories
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
        message: ""
      });
    } catch (error) {
      toast.error("שגיאה בשליחת ההודעה");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-[#030B0F] to-[#0A1A24]"
    >
      {/* Hero Section */}
      <section className="h-full mt-20 pt-24 relative overflow-hidden">
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
                עיצוב גרפי
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  שמביא תוצאות
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                עיצוב שמספר את הסיפור שלך ומחבר אותך ללקוחות שלך
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white px-8 py-4 rounded-xl font-medium"
              >
                בואו נתחיל
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <img
                src="https://res.cloudinary.com/landingpage2/image/upload/v1726125312/Differeacting/computer-screen-with-colorful-paint-it-generative-ai_innrd2.png"
                alt="Design Tools"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.div
                animate={{
                  filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
                  transition: { duration: 10, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl"
              />
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
              פתרונות עיצוב מקצועיים לכל צורך
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <div className="mb-6 text-[#6FCFED]">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm px-3 py-1 bg-white/10 rounded-full text-white/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              תהליך העבודה שלנו
            </h2>
            <p className="text-gray-400">
              מהרעיון ועד לתוצר הסופי
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "פגישת ייעוץ", icon: <Sparkles /> },
              { step: "2", title: "מחקר וקונספט", icon: <Search /> },
              { step: "3", title: "עיצוב", icon: <Palette /> },
              { step: "4", title: "יישום", icon: <Check /> }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] rounded-full flex items-center justify-center text-white">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {phase.title}
                </h3>
                <div className="text-gray-400">שלב {phase.step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              תיק עבודות
            </h2>
            <p className="text-gray-400">
              הפרויקטים האחרונים שלנו
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add portfolio items */}
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
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              בואו נדבר על הפרויקט שלך
            </h2>
            <p className="text-center text-gray-300 mb-8">
              מלאו את הטופס ונחזור אליכם בהקדם
            </p>

            <form onSubmit={sendEmail} className="space-y-6">
              {/* Form fields as per your original form */}
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

export default GraphicPage;