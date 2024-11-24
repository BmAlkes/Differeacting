import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [_direction, setDirection] = useState(document.body.dir);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      if (mutationsList.some((mutation) => mutation.attributeName === "dir")) {
        setDirection(document.body.dir);
      }
    });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));

  return (
    <section className="relative min-h-screen bg-[#030B0F] flex justify-end items-center overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, #87ceeb 0%, transparent 40%)",
            "radial-gradient(circle at 70% 70%, #ff860d 0%, transparent 40%)",
            "radial-gradient(circle at 30% 70%, #87ceeb 0%, transparent 40%)",
            "radial-gradient(circle at 70% 30%, #ff860d 0%, transparent 40%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Enhanced Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#87ceeb]/20 to-[#ff860d]/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto px-4 flex justify-center items-center mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Text Content */}
         
            {/* Main Title */}
            <motion.div style={{ opacity }} className="relative">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#87ceeb] to-[#ff860d] font-bold text-7xl md:text-8xl lg:text-9xl leading-tight tracking-tight">
                Dotvision
              </h1>
        

            {/* Enhanced Slogan */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white/90 text-2xl lg:text-4xl font-light leading-relaxed"
              >
                <span className="block mb-3 text-white/80">מעצבים חוויות דיגיטליות</span>
                <span className="block text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#87ceeb] to-[#ff860d] bg-clip-text text-transparent">
                  שמשנות מציאות
                </span>
              </motion.h2>

              {/* Additional Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl"
              >
                אנו מתמחים בעיצוב ופיתוח פתרונות דיגיטליים המשלבים חדשנות, יצירתיות וטכנולוגיה מתקדמת
              </motion.p>
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ y }}
            className="relative z-10"
          >
            <motion.img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1728219880/creative-light-bulb_golihk.png"
              alt="Creative Lightbulb"
              className="w-full h-auto max-w-[600px] mx-auto"
              animate={{
                y: [0, -15, 0],
                rotate: [-1, 1, -1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                filter: "drop-shadow(0 0 30px rgba(135, 206, 235, 0.4))"
              }}
            />
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#87ceeb]/20 to-[#ff860d]/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;