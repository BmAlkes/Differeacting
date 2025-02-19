
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import { CreateLead } from "../../api/LeadApi";
import { toast } from "react-toastify";
import { GlobeIcon, GithubIcon, SendIcon, ChevronDown,  } from "lucide-react";

// Types
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
};

const Projects = () => {
  const { pathname } = useLocation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [_, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Detecta se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Projects data
  const projects: Project[] = [
    {
      id: "1",
      title: "WebCar",
      description: "Platform for selling and publishing cars, where you can add cars, delete cars, speak directly with the seller",
      image: "https://raw.githubusercontent.com/BmAlkes/webcar/main/src/assets/Screenshot_16.png",
      technologies: ["React", "Firebase", "Styled-Components"],
      category: "React",
      links: {
        live: "https://webcar-umber.vercel.app/",
      }
    },
    {
      id: "2",
      title: "MetaDaily",
      description: "Platform for to help to create and manage habits",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1708932226/Screenshot_22_ylvdnf.png",
      technologies: ["NextJS", "TypeScript", "TailwindCSS"],
      category: "NextJS",
      links: {
        live: "https://metadaily.vercel.app/",
      }
    },
    {
      id: "3",
      title: "Club Clothes",
      description: "Eccomerce made with react, and firebase conneting with Stripe api for payments",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1727969288/Screenshot_23_deonbw_1_jhf7jt.png",
      technologies: ["React", "Firebase", "Stripe", "Styled-Components"],
      category: "React",
      links: {
        live: "https://new-club-clothes.vercel.app/",
      }
    },
    {
      id: "4",
      title: "Binvent CRM",
      description: "CRM for Stock Management, Inventory system to control and manage products, using React, express, mongoDB..",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1708932226/Screenshot_24_o3royj.png",
      technologies: ["React", "Express", "MongoDB", "Node.js"],
      category: "React",
      links: {
        live: "https://binvent.vercel.app/",
      }
    },
    {
      id: "5",
      title: "Call Controller",
      description: "Platform for controlling calls and checking the status of calls",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1708932226/Screenshot_25_hdpt1x.png",
      technologies: ["React", "Firebase", "TailwindCSS"],
      category: "React",
      links: {
        live: "https://call-project.vercel.app",
      }
    },
    {
      id: "6",
      title: "Pizza Platform",
      description: "Platform for Pizza",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1708932226/Screenshot_26_luipiv.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "Javascript/HTML",
      links: {
        live: "https://pizza-lac-five.vercel.app/",
      }
    },
    {
      id: "7",
      title: "Online Store",
      description: "Online store built with vanilla JavaScript",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1727969822/Screenshot_27_a6sppc_1_gshqfs.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "Javascript",
      links: {
        live: "https://ecommerce-xhdu.vercel.app/",
      }
    },
    
    {
      id: "8",
      title: "Deliver Coffee",
      description: "Web site for company",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1709303998/deliver_urazsz.png",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      category: "React",
      links: {
        live: "https://deliver-coffe.vercel.app/",
      }
    },
    {
      id: "9",
      title: "Safe Garden",
      description: "App for private kindegarden managment",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1710148822/safe_qmcsgn.png",
      technologies: ["React", "Firebase", "TailwindCSS"],
      category: "React",
      links: {
        live: "https://safe-garden.vercel.app/",
      }
    },
    {
      id: "12",
      title: "Wesense",
      description: "A landing page made for the WESENSE Startup project",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1719987411/Screenshot_47_kaioqi.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "Javascript",
      links: {
        live: "https://wesense.vercel.app/",
      }
    },
    {
      id: "13",
      title: "Accountant",
      description: "A landing page made for accountant",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1722105071/Screenshot_10_fhniyl.png",
      technologies: ["WordPress", "Elementor", "PHP"],
      category: "WordPress/Elementor",
      links: {
        live: "https://lime-heron-339975.hostingersite.com",
      }
    },
    {
      id: "14",
      title: "Lawyer Company",
      description: "A landing page made for Lawyer",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1722105732/Screenshot_11_qjpjde.png",
      technologies: ["WordPress", "Elementor", "PHP"],
      category: "WordPress/Elementor",
      links: {
        live: "https://lavenderblush-grasshopper-239774.hostingersite.com/",
      }
    },
   
    {
      id: "15",
      title: "Nexus Architecture",
      description: "Web site for company",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1734201091/Screenshot_18_zrfoqh.png",
      technologies: ["WordPress", "Elementor", "WooCommerce"],
      category: "WordPress/Elementor",
      links: {
        live: "https://nexusmyhomes.com",
      }
    },
    {
      id: "16",
      title: "Studio Capture",
      description: "Web site for company",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1739702646/Screenshot_8_pfbsbb.png",
      technologies: ["WordPress", "Elementor", "WooCommerce"],
      category: "WordPress/Elementor",
      links: {
        live: "https://lightgoldenrodyellow-monkey-277145.hostingersite.com/",
      }
    },
    {
      id: "17",
      title: "Tomato App",
      description: "Web application",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1739906913/Screenshot_10_obqtkw.png",
technologies: ["React", "MERN", "TailwindCSS"],
      category: "React",
      links: {
        live: "https://tomato-ten-snowy.vercel.app/",
      }
    },
    {
      id: "18",
      title: "Oz Wiz",
      description: "Landing Page",
      image: "https://res.cloudinary.com/landingpage2/image/upload/v1739906822/Screenshot_11_vfp5xx.png",
technologies: ["Wordpress", "Elementor"],
      category: "WordPress/Elementor",
      links: {
        live: "https://oz-wiz.com/",
      }
    }
  ];
  // Categories
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "React", label: "React" },
    { id: "NextJS", label: "Next.js" },
    { id: "Javascript/HTML", label: "JavaScript" },
    { id: "WordPress/Elementor", label: "WordPress" }
  ];

  // Filtered projects
  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  // Form mutation
  const { mutate } = useMutation({
    mutationFn: CreateLead,
    onSuccess: () => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: () => toast.error("Error sending message. Please try again."),
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
      return;
    }
    mutate(formData);
  };

  // Mobile Filter Menu Component
  const MobileFilterMenu = () => (
    <div className="relative md:hidden">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
        className="w-full px-4 py-3 bg-white/10 rounded-xl flex items-center justify-between text-white"
      >
        <span>Filter by: {categories.find(c => c.id === activeFilter)?.label}</span>
        <ChevronDown className={`transform transition-transform ${isFilterMenuOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isFilterMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 bg-[#0A1A24] border border-white/10 rounded-xl overflow-hidden z-50"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                onClick={() => {
                  setActiveFilter(category.id);
                  setIsFilterMenuOpen(false);
                }}
                className={`w-full px-4 py-3 text-left transition-colors ${
                  activeFilter === category.id
                    ? "text-[#6FCFED]"
                    : "text-white"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // Desktop Filter Buttons Component
  const DesktopFilterButtons = () => (
    <div className="hidden md:flex justify-center gap-4 flex-wrap">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            activeFilter === category.id
              ? "bg-gradient-to-r from-[#87ceeb] to-[#ff860d] text-white"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030B0F] to-[#0A1A24]">
      <Helmet>
        <title>Projects | Dotvizion  Interactive Portfolio</title>
        <link rel="canonical" href="https://www.dotvizion/projects" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87ceeb] to-[#ff860d]">Projects</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="relative">
            <MobileFilterMenu />
            <DesktopFilterButtons />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-24">
        <div className="container mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <a
                              href={project.links.live}>
                                
                              
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-3">
                          {project.links.live && (
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
                            >
                              <GlobeIcon className="w-5 h-5 text-white" />
                            </a>
                          )}
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors"
                            >
                              <GithubIcon className="w-5 h-5 text-white" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/60 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div></a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-b from-[#E7E7E7] to-white py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-right">
              מוכנים להתחיל פרויקט ביחד?
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-right">
              יש לך פרויקט בראש? נשמח לשמוע עליו ולעזור להפוך אותו למציאות.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: "name", placeholder: "שם מלא", type: "text" },
                  { name: "email", placeholder: "אימייל", type: "email" },
                  { name: "phone", placeholder: "טלפון", type: "tel" },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [field.name]: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl 
                               focus:ring-2 focus:ring-[#6FCFED] focus:border-transparent transition-all 
                               outline-none text-right"
                    />
                  </motion.div>
                ))}
                <div className="md:col-span-2">
                  <motion.textarea
                    whileHover={{ scale: 1.02 }}
                    name="message"
                    placeholder="ספר/י לנו על הפרויקט שלך"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl 
                             focus:ring-2 focus:ring-[#6FCFED] focus:border-transparent transition-all 
                             outline-none min-h-[120px] text-right"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#87ceeb] to-[#ff860d] 
                         text-white rounded-xl font-medium flex items-center justify-center gap-2
                         hover:shadow-lg transition-all duration-300"
              >
                <SendIcon className="w-5 h-5" />
                <span>שליחת הפרטים</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;