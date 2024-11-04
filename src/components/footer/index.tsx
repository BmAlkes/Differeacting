
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { CreateLead } from "../../api/LeadApi";
import { toast } from "react-toastify";
import {  Send, Quote } from "lucide-react";

import vetor2 from "../../assets/Frame 1160445221.png";


const testimonials = [
  {
    id: 1,
    name: "Ofir Zeitoun",
    role: "Software Mentor & Freelance",
    image: "https://res.cloudinary.com/landingpage2/image/upload/v1710178264/ofir_ev3nqk.jpg",
    text: "הכרתי את ברונו בתור סטודנט שלי, כבר מההתחלה עפתי עליו, הוא הביא עיצובים מרשימים במהירות שיא והתפתח מאוד מאז. ראיתי את כל העבודות שלו ואהבתי כל אחת, הוא יושב עם הלקוח להבין מה הלקוח צריך ומשם הוא לוקח את זה למקומות מרשימים. ברונו - חרוץ, מקשיב, מגלה הבנה ואמפתיה - מומלץ בחום",
  },
  {
    id: 2,
    name: "אורן טל",
    role: "קונווייזור דיגיטל",
    image: "https://res.cloudinary.com/landingpage2/image/upload/v1730732359/testimo_jbdebw.png",
    text: "עדן עבד אצלנו בתחילת הדרך וכבר אז זיהינו בחור שאפתן עם המון כוח רצון ללמוד ולהתקדם, קונוויזור תמיד תהיה הבית הראשון שלך בצעדייך הראשונים בעולם השיווק הדיגיטלי ואנו גאים על כך, בהצלחה במיזם החדש!"
  },
  {
    id: 3,
    name: "Anastacia Tsarfati",
    role: "Owner of Safegarden",
    image: "https://res.cloudinary.com/landingpage2/image/upload/v1710178263/logo_tswkge.png",
    text: "ממליצה בחום על ברונו! באתר של SafeGarden חיפשתי מתכנת פרונט שיבין את החזון של האתר ואת הצרכים של המערכת. ברונו עבד בצורה מדויקת ומהירה, שאל את השאלות הנכונות וידע בדיוק מה הצרכים של המערכת. השיתוף פעולה איתו היה קליל ומקצועי והכי חשוב אנושי!"
  }
];

const Reccomend = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const { mutate } = useMutation({
    mutationFn: CreateLead,
    onSuccess: () => {
      toast.success("ההודעה נשלחה בהצלחה! נחזור אליך בקרוב");
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message, phone } = formData;

    if (!name || !email || !message || !phone) {
      toast.error("נא למלא את כל השדות");
      return;
    }

    mutate(formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-white overflow-hidden"
      id="contact"
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-50"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `url(${vetor2})`,
          backgroundSize: "cover"
        }}
      />

      {/* Testimonials Section */}
      <div className="relative container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          המלצות עלינו
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
                <Quote className="w-10 h-10 text-[#6FCFED] absolute -top-5 right-5" />
                
             
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-28 h-30 rounded-full mx-auto mb-6 object-cover"
                  />
                

                <p className="text-gray-600 mb-6 line-clamp-6 text-right">
                  {testimonial.text}
                </p>

                <div className="text-center">
                  <div className="h-1 w-10 bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#E7E7E7] py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-6 text-right">
                מוכנים להתחיל פרויקט ביחד?
              </h3>
              <p className="text-lg text-gray-600 mb-12 text-right">
                יש לך פרויקט בראש? כולנו אוזניים כשזה מגיע לגלות על מטרות העסק הדיגיטלי שלך.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <input
                    type="text"
                    placeholder="שם מלא"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-400 focus:border-[#6FCFED] 
                             transition-colors outline-none text-right"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <input
                    type="email"
                    placeholder="email@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-400 focus:border-[#6FCFED] 
                             transition-colors outline-none text-right"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <input
                    type="tel"
                    placeholder="טלפון"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 bg-transparent border-b border-gray-400 focus:border-[#6FCFED] 
                             transition-colors outline-none text-right"
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                className="relative"
              >
                <textarea
                  placeholder="ספרו לנו משהו על הפרויקט שלכם"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-400 focus:border-[#6FCFED] 
                           transition-colors outline-none text-right resize-none min-h-[100px]"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] 
                         text-white rounded-xl font-medium flex items-center justify-center gap-2
                         hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>שליחת הפרטים</span>
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Reccomend