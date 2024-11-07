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
    observer.observe(document.body, {
      attributes: true,
    });
    return () => observer.disconnect();
  }, []);

  // Floating particles effect
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 2 + 2,
    delay: Math.random() * 2
  }));

  return (
    <section className="relative min-h-screen bg-[#030B0F] flex justify-end items-center overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 "
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #6FCFED 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #C96CBE 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, #6FCFED 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, #C96CBE 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto px-4 flex justify-center items-center mt-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-right relative z-10"
          >
            <motion.div 
              style={{ opacity }}
              className="relative inline-block"
            >
             <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-[100px] [text-shadow:_0_15px_0px_rgb(0_0_0_/_90%)]">
                Differeacting
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#6FCFED] text-xl lg:text-2xl mt-4 mb-8"
            >
              הופכים חלומות ליצירה באינטרנט
            </motion.h2>

          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ y }}
            className="relative z-50"
          >
          
            
            <motion.img
             src="https://res.cloudinary.com/landingpage2/image/upload/v1728219880/creative-light-bulb_golihk.png"
             
             sizes="(max-width: 600px) 100vw, 600px"
             alt="Lâmpada Criativa"
             className="relative w-full h-auto max-w-[600px] mx-auto loaded-image"
             loading="eager"
             decoding="async"
              animate={{
                y: [0, -20, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{
          
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                filter: "drop-shadow(0 0 20px rgba(111, 207, 237, 0.3))"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;