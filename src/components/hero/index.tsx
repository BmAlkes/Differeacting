import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e:any) => {
    const x = (e.clientX / window.innerWidth) * 15;
    const y = (e.clientY / window.innerHeight) * 15;
    setMousePosition({ x, y });
  };
  const [direction, setDirection] = useState(document.body.dir);
  console.log(direction)
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



  return (
    <section 
    className="bg-gradient-to-b from-[#030B0F] to-[#051018] min-h-screen relative overflow-hidden"
    onMouseMove={handleMouseMove}
  >
    {/* Partículas de fundo */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-blue-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 2})`,
            opacity: Math.random(),
            animation: `float ${Math.random() * 10 + 5}s infinite`
          }}
        />
      ))}
    </div>

    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between min-h-screen relative">
      {/* Conteúdo à esquerda */}
      <motion.div 
        className="lg:w-1/2 text-center lg:text-left z-10 pt-24 lg:pt-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-white font-bold text-5xl lg:text-8xl xl:text-9xl mb-6
                     [text-shadow:_0_15px_0px_rgb(0_0_0_/_90%)]"
          animate={{ 
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Differeacting
        </motion.h1>

        <motion.h2 
          className="text-[#6FCFED] text-xl lg:text-3xl font-light text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          הופכים חלומות ליצירה באינטרנט
        </motion.h2>

        <motion.div
          className="mt-8 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
       
        </motion.div>
      </motion.div>

      {/* Imagem à direita */}
      <div className="lg:w-1/2 relative">
        <motion.div
          className="relative"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <img
            src="https://res.cloudinary.com/landingpage2/image/upload/v1728146674/creative-light-bulb_zxukub.png"
            alt="Lâmpada criativa"
            className="w-full h-auto max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </div>

    {/* Gradient overlay */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030B0F] to-transparent" />
  </section>
  );
};

export default Hero;
