
import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { CreateLead } from "../../api/LeadApi";
import { toast } from "react-toastify";
import {  Send, Quote } from "lucide-react";

import vetor2 from "../../assets/Frame 1160445221.png";

import { useTranslation } from "react-i18next";
import i18n from "../../i18n";



const Reccomend = () => {
  const { t} = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
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
  
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: "Ofir Zeitoun",
      role: "Software Mentor & Freelance",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1710178264/ofir_ev3nqk.jpg",
      text: t('TestimonialsOfir')
    },
    {
      id: 2,
      name: "Anastacia Tsarfati",
      role: "Owner of Safegarden",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1710178263/logo_tswkge.png",
      text: t('TestimonialsAnastacia')
    }
  ], [t]);
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
    dir={isRTL ? 'rtl' : 'ltr'}
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
        {t('Testimonials')}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="bg-white rounded-xl shadow-2xl p-8 relative z-10"
          >
            <Quote className={`w-6 h-6 text-[#587fba] absolute -top-5 ${isRTL ? 'right-5' : 'left-5'}`} />
            
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={testimonial.image}
              alt={testimonial.name}
              className="w-28 h-30 rounded-full mx-auto mb-6 object-cover"
              width="112"
              height="120"
              loading="lazy"
            />

            <p className={`text-gray-600 mb-6 line-clamp-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {testimonial.text}
            </p>

            <div className="text-center">
              <div className="h-1 w-10 bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] mx-auto mb-4" />
              <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
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
            <h3 className={`text-3xl lg:text-6xl font-bold text-gray-900 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('titleFormFooter')}
            </h3>
            <p className={`text-lg text-gray-600 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t("textFormFooter")}
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
                    placeholder="full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                     className={`w-full px-4 py-3 bg-transparent border-b border-gray-400 
                      focus:border-[#6FCFED] transition-colors outline-none
                      ${isRTL ? 'text-right' : 'text-left'}`}
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
                    className={`w-full px-4 py-3 bg-transparent border-b border-gray-400 
                      focus:border-[#6FCFED] transition-colors outline-none
                      ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <input
                    type="tel"
                    placeholder="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className={`w-full px-4 py-3 bg-transparent border-b border-gray-400 
                               focus:border-[#6FCFED] transition-colors outline-none
                               ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                className="relative"
              >
                <textarea
                  placeholder="Tell us something about your project"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className={`w-full px-4 py-3 bg-transparent border-b border-gray-400 
                    focus:border-[#6FCFED] transition-colors outline-none
                    ${isRTL ? 'text-right' : 'text-left'}`}
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#87ceeb] to-[#ff860d] 
                         text-white rounded-xl font-medium flex items-center justify-center gap-2
                         hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>{t('buttonForm')}</span>
              </motion.button>
            </form>
        </div>
      </div>
    </motion.div>
  </motion.section>
  );
};

export default Reccomend