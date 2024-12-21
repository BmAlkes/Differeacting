import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin,
  ExternalLink 
} from "lucide-react";
import { useTranslation } from "react-i18next";

// Tipos melhorados
type SocialLink = {
  name: string;
  icon: JSX.Element;
  href: string;
};

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
  keepLTR?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const NewFooter = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  // Função auxiliar para verificar se o texto deve permanecer em LTR


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
      title: t("titleFooterOne"),
      links: [
        { name: t('linkOne'), href: "/about" },
        { name: t('linkTwo'), href: "/projects" },
        { name: t('linkThree'), href: "/services" },
        { name: t('linkFour'), href: "/about" }
      ]
    },
    {
      title: t("titleFooterTwo"),
      links: [
        { name: t('linkFive'), href: "/development" },
        { name: t('linkSix'), href: "/design" },
        { name: t('linkSeven'), href: "/server" }
      ]
    },
    {
      title: t('titleFooterThree'),
      links: [
        { name: "Deliver Coffee", href: "https://deliver-coffe.vercel.app/", external: true, keepLTR: true },
        { name: "SafeGarden", href: "https://safe-garden.vercel.app/", external: true, keepLTR: true },
        { name: "Webcar", href: "https://webcar-umber.vercel.app/", external: true, keepLTR: true }
      ]
    },
    {
      title: t('titleFooterFour'),
      links: [
        { name: "info@dotvizion.com", href: "mailto:info@dotvizion.com", external: true, keepLTR: true },
        { name: "תל אביב", href: "#" }
      ]
    }
  ];

  return (
    <footer 
      className="relative bg-gradient-to-b from-[#030B0F] to-[#0A1A24] overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
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
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Logo and Social Links */}
          <div className={`md:col-span-1 ${isRTL ? 'order-last' : 'order-first'}`}>
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
                  className="w-auto h-36"
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
                className={isRTL ? 'text-right' : 'text-left'}
              >
                <h3 className="text-white font-bold text-lg mb-4">
                  {section.title}
                </h3>
                <ul className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
  {section.links.map((link) => (
    <li key={link.name}>
      {link.external ? (
        <motion.a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center transition-colors group
            ${isRTL ? 'flex-row-reverse' : 'flex-row'}
            text-gray-400 hover:text-white`}
          whileHover={{ x: isRTL ? 5 : -5 }}
        >
          <span className={link.keepLTR ? 'direction-ltr-container' : ''}>
            {link.name}
          </span>
          {link.href.startsWith('mailto:') ? (
            <Mail className={`w-4 h-4 opacity-0 group-hover:opacity-100 
              ${isRTL ? 'ml-2' : 'mr-2'}`} />
          ) : link.href !== '#' ? (
            <ExternalLink className={`w-4 h-4 opacity-0 group-hover:opacity-100 
              ${isRTL ? 'ml-2' : 'mr-2'}`} />
          ) : null}
        </motion.a>
      ) : (
        <motion.div 
          whileHover={{ x: isRTL ? 5 : -5 }}
          className={isRTL ? 'text-right' : 'text-left'}
        >
          <Link
            to={link.href}
            className="text-gray-400 hover:text-white transition-colors block"
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
          <div className={`flex justify-between ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <p className="text-gray-400 text-sm direction-ltr">
              DotVizion Solutions for web applications
            </p>
            <p className="text-gray-400 text-sm direction-ltr">
              All rights reserved DotVizion © 2023
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default NewFooter;