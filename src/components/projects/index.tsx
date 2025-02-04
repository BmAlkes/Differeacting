import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { SafariDemo } from "../safariDemo";
import vetor from "../../assets/svg/Vector 18.svg";
import { useTranslation } from "react-i18next";

interface Project {
  key: string;
  url: string;
  image: string;
  category: string;
  description: string;
}

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const projects: Project[] = [
    {
      key: "webCar",
      url: "https://webcar-umber.vercel.app/",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1710178141/Image_1_lnemkd.png",
      category: "webApplication",
      description:"A platform for car sales and advertising"
    },
    {
      key: "ecommerce",
      url: "https://ecommerce-xhdu.vercel.app/",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1727969822/Screenshot_27_a6sppc_1_gshqfs.png",
      category: "ecommerce",
      description:"Trade site"
    },
    {
      key: "nexus",
      url: "https://nexusmyhomes.com/",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1734201091/Screenshot_18_zrfoqh.png",
      category: "webSite",
      description:"Website"
    },
    {
      key: "Zeus",
      url: "https://lavenderblush-grasshopper-239774.hostingersite.com/",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1722105732/Screenshot_11_qjpjde.png",
      category: "webSite",
      description:"Website"
    },
    // {
    //   key: "glowModas",
    //   url: "https://firebrick-rat-359890.hostingersite.com/",
    //   image: "https://res.cloudinary.com/landingpage2/image/upload/v1732464836/Screenshot_6_uvu30n.png",
    //   category: "onlineStore",
    //   description: "Store clother"
    // }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-[#030B0F] text-[#D1D1D1] min-h-screen pt-24 pb-16 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #6FCFED 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #C96CBE 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, #6FCFED 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.img
        src={vetor}
        alt="Background Pattern"
        className="absolute left-0 top-0 opacity-20"
        animate={{
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              {t('sectionprojectsmainTitle')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87ceeb] to-[#ff860d]">
                {t('sectionprojectsmainTitleGradient')}
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={project.url} target="_blank" rel="noopener noreferrer">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20">
                  <div className="relative">
                    <SafariDemo url={project.url} img={project.image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 right-4">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <h3 className="text-2xl font-bold text-white">
                        {project.key}
                      </h3>
                      <span className="text-sm text-[#6FCFED] bg-[#6FCFED]/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400">
                     {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r from-[#87ceeb] to-[#ff860d] px-8 py-4 rounded-xl text-white flex items-center gap-2 ${
                isRTL ? 'flex-row-reverse' : ''
              }`}
            >
              <span>{t('sectionprojectsviewMore')}</span>
              <ArrowIcon className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;