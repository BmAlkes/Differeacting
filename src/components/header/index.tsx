import israel from "../../assets/israel.png";
import eua from "../../assets/united-states.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useState } from "react";
import { PhoneCallIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  
  const handleClose = () => {
    setOpen(!open);
  };

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
    document.body.dir = lng === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <header className="bg-[#030B0F] fixed top-0 w-full z-[100]">
      <nav className="nav flex lg:flex-row flex-row-reverse items-center justify-between w-[92%] mx-auto h-24">
        <div className="flex justify-center items-center">
          <Link to="/" aria-label="logo website">
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1732554815/5000x5000-3-removebg-preview_jxhv2o.png"
              alt="web site logo"
              className="max-w-80"
            />
          </Link>
        </div>

        <div className="bg-[#030B0F] left-0 lg:w-auto hidden w-full lg:flex items-center">
          <ul className="lg:flex md:flex-row hidden lg:items-center lg:gap-[4vw] gap-6 text-lg text-white">
            <li className="nav relative">
              <Link to="/">{t('home')}</Link>
            </li>
            <li className="nav relative">
              <Link to="/about">{t('about')}</Link>
            </li>
            <li className="nav relative">
              <Link to="/projects">{t('projects')}</Link>
            </li>
            <li className="nav relative">
              <Link to="/posts">{t('magazine')}</Link>
            </li>
            <li className="nav relative">
              <Link to="/contact">{t('contact')}</Link>
            </li>
          </ul>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=9720544425884&text=I%20want%20to%20talk%20about%20a%20project"
          className="bg-gradient-to-r from-[#87ceeb] to-[#ff860d] text-white font-semibold rounded p-[1px] hidden md:block"
          target="_blank"
          aria-label="Whats app for contact"
        >
          <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] px-[14px] hover:bg-gradient-to-r from-[#87ceeb] to-[#ff860d]">
            {t('buttonHeader')}
          </span>
        </a>
        
        <div className="lg:hidden cursor-pointer">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <AiOutlineMenu size={35} color="#fff" />
            </SheetTrigger>
            <SheetContent
              side={i18n.dir() === 'rtl' ? "right" : "left"}
              className="bg-[#030B0F] text-white border-l border-[#030b0f] p-6 z-[1000]"
            >
              <SheetHeader>
                <SheetTitle className="absolute left-5">
                  <Link to="/" onClick={handleClose}>
                    <img
                      src="https://res.cloudinary.com/landingpage2/image/upload/v1732301265/2000x2000-1_gl8wli.png"
                      alt="logo"
                      className="w-[150px]"
                    />
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <nav className="mt-24">
                    <ul className="text-xl text-gray-900 flex flex-col gap-5">
                      <Link
                        onClick={handleClose}
                        to="/"
                        className={`text-white ${i18n.dir() === "rtl" ? "text-right" : "text-left"} w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>{t('home')}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/about"
                        className={`text-white ${i18n.dir() === "rtl" ? "text-right" : "text-left"} w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>{t('about')}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/projects"
                        className={`text-white ${i18n.dir() === "rtl" ? "text-right" : "text-left"} w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>{t('projects')}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/posts"
                        className={`text-white ${i18n.dir() === "rtl" ? "text-right" : "text-left"} w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>{t('magazine')}</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/contact"
                        className={`text-white ${i18n.dir() === "rtl" ? "text-right" : "text-left"} w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>{t('contact')}</li>
                      </Link>
                    </ul>
                  </nav>
                </SheetDescription>
                <div className="flex items-center gap-3 absolute top-6 right-4">
                  <button
                    onClick={() => {
                      changeLanguage('en');
                      handleClose();
                    }}
                    className="w-8 h-8 rounded-full overflow-hidden"
                  >
                    <img src={eua} alt="English" className="w-full h-full object-cover" />
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('he');
                      handleClose();
                    }}
                    className="w-8 h-8 rounded-full overflow-hidden"
                  >
                    <img src={israel} alt="Hebrew" className="w-full h-full object-cover" />
                  </button>
                </div>
              </SheetHeader>
              <SheetFooter className="absolute bottom-12">
                <ul className="flex gap-5">
                  <li>
                    <a href="tel:0544425884">
                      <PhoneCallIcon size={28} color="#fff" />
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=9720544425884&text=I%20want%20to%20talk%20about%20a%20project">
                      <FaWhatsapp size={28} color="#fff" />
                    </a>
                  </li>
                </ul>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;