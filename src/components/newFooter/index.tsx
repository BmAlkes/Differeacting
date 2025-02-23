import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Linkedin,
  ExternalLink 
} from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "" },
  { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/dotvizionn/" },
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/dotvizion/" }
];

const footerSections = [
  {
    title: "About Us",
    links: [
      { name: "מי אנחנו", href: "/about" },
      { name: "פרויקטים", href: "/projects" },
      { name: "קשר", href: "/contact" },
      {name:"הצהרת נגישות", href:"/accesibility"},
      {name:"תקנון אתר",href:"/conditions"}
    ]
  },
  {
    title: "Our Services",
    links: [
      { name: "Development", href: "/development" },
      { name: "Design", href: "/design" },
      { name: "Server Solutions", href: "/server" }
    ]
  },
  {
    title: "Our Projects",
    links: [
      { name: "Deliver Coffee", href: "https://deliver-coffe.vercel.app/", external: true },
      { name: "SafeGarden", href: "https://safe-garden.vercel.app/", external: true },
      { name: "Webcar", href: "https://webcar-umber.vercel.app/", external: true }
    ]
  },
  {
    title: "Contact Us",
    links: [
      { name: "info@dotvizion.com", href: "mailto:info@dotvizion.com", external: true },
      { name: "תל אביב", href: "#" }
    ]
  }
];

const NewFooter = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#030B0F] to-[#0A1A24] overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #6FCFED 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #C96CBE 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, #C96CBE 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/">
                <img src="https://res.cloudinary.com/landingpage2/image/upload/v1732303053/5000x5000-4_q0s4rj.png" alt="Dotvizion Logo" className="w-auto h-36" width="auto" height="48" loading="eager" />
              </Link>
              <div className="flex gap-3 mt-4">
                {socialLinks.map(social => (
                  <motion.a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-4 grid md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <h3 className="text-white font-bold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map(link => (
                    <li key={link.name}>
                      {link.external ? (
                        <motion.a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors group" whileHover={{ x: -5 }}>
                          {link.name}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 ml-2" />
                        </motion.a>
                      ) : (
                        <Link to={link.href} className="text-gray-400 hover:text-white transition-colors block">{link.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="pt-8 border-t border-white/10">
          <div className="flex justify-between">
            <p className="text-gray-400 text-sm">DotVizion Solutions for web applications</p>
            <p className="text-gray-400 text-sm">All rights reserved DotVizion © 2023</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default NewFooter;