import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin,
  ExternalLink 
} from "lucide-react";

// Define tipos
type SocialLink = {
  name: string;
  icon: JSX.Element;
  href: string;
};

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const NewFooter = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: ""
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/dotvizionn/"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/dotvizion/"
    }
  ];

  const footerSections: FooterSection[] = [
    {
      title: "מפת אתר",
      links: [
        { name: "אודותינו", href: "/about" },
        { name: "הפרוייקטים שלנו", href: "/projects" },
        { name: "שירותים החברה", href: "/services" },
        { name: "המלצות לקוחותינו", href: "/about" }
      ]
    },
    {
      title: "שירותי החברה",
      links: [
        { name: "פיתוח אתרי אינטרנט", href: "/development" },
        { name: "עיצוב גרפי", href: "/design" },
        { name: "שיווק דיגיטלי", href: "/digital" },
        { name: "אחסון והקצאת שרתים", href: "/server" }
      ]
    },
    {
      title: "הפרויקטים שלנו",
      links: [
        { name: "Deliver Coffee", href: "https://deliver-coffe.vercel.app/", external: true },
        { name: "SafeGarden", href: "https://safe-garden.vercel.app/", external: true },
        { name: "Webcar", href: "https://webcar-umber.vercel.app/", external: true },
        
      ]
    },
    {
      title: "דברו איתנו",
      links: [
        { name: "info@dotvizion.com", href: "mailto:info@dotvizion.com", external: true },
        { name: "תל אביב", href: "#" }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#030B0F] to-[#0A1A24] overflow-hidden">
      {/* Background Gradient */}
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
        {/* Logo and Social Links */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Link to="/" className="block">
              <img 
  src="https://res.cloudinary.com/landingpage2/image/upload/v1732303053/5000x5000-4_q0s4rj.png"
  alt="Dotvizion Logo"
  className=" w-auto h-36"
  width="auto"
  height="48"
  loading="eager"
/>
              </Link>
              
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Sections */}
          <div className="md:col-span-4 grid md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-right"
              >
                <h3 className="text-white font-bold text-lg mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <motion.a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-start text-gray-400 hover:text-white transition-colors group"
                          whileHover={{ x: -5 }}
                        >
                          <span>{link.name}</span>
                          {link.href.startsWith('mailto:') ? (
                            <Mail className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 " />
                          ) : link.href !== '#' ? (
                            <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 " />
                          ) : null}
                        </motion.a>
                      ) : (
                        <motion.div whileHover={{ x: -5 }}>
                          <Link
                            to={link.href}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              All rights reserved DotVizion © 2023
            </p>
            <p className="text-gray-400 text-sm">
              DotVizion Solutions for web applications
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default NewFooter