import { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { PhoneCallIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <header className="bg-[#030B0F] fixed top-0 w-full z-[100]">
      <nav className="nav flex lg:flex-row flex-row-reverse items-center justify-between w-[92%] mx-auto h-24">
        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <Link to="/" aria-label="logo website">
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1732554815/5000x5000-3-removebg-preview_jxhv2o.png"
              alt="web site logo"
              className="max-w-80"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="bg-[#030B0F] right-0 lg:w-auto hidden w-full lg:flex items-center">
          <ul className="lg:flex md:flex-row hidden lg:items-center lg:gap-[4vw] gap-6 text-lg text-white text-right">
            <li className="nav relative">
              <Link to="/">ראשי</Link>
            </li>
            <li className="nav relative">
              <Link to="/about">מי אנחנו</Link>
            </li>
            <li className="nav relative">
              <Link to="/projects">פרויקטים</Link>
            </li>
            <li className="nav relative">
              <Link to="/posts">מגזין</Link>
            </li>
            <li className="nav relative">
              <Link to="/contact">קשר</Link>
            </li>
          </ul>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://api.whatsapp.com/send?phone=9720544425884&text=I%20want%20to%20talk%20about%20a%20project"
          className="bg-gradient-to-r from-[#87ceeb] to-[#ff860d] text-white font-semibold rounded p-[1px] hidden md:block"
          target="_blank"
          aria-label="Whats app for contact"
        >
          <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] px-[14px] hover:bg-gradient-to-r from-[#87ceeb] to-[#ff860d]">
            דברו איתנו
          </span>
        </a>
        
        {/* Mobile Menu */}
        <div className="lg:hidden cursor-pointer">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <AiOutlineMenu size={35} color="#fff" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#030B0F] text-white border-r border-[#030b0f] p-6 z-[1000] text-right"
            >
              <SheetHeader>
                <SheetTitle className="absolute right-5">
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
                    <ul className="text-xl text-gray-900 flex flex-col gap-5 text-right">
                      <Link
                        onClick={handleClose}
                        to="/"
                        className="text-white w-full p-2 rounded-md hover:bg-slate-50 hover:text-black text-right"
                      >
                        <li>ראשי</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/about"
                        className="text-white w-full p-2 rounded-md hover:bg-slate-50 hover:text-black text-right"
                      >
                        <li>מי אנחנו</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/projects"
                        className="text-white w-full p-2 rounded-md hover:bg-slate-50 hover:text-black text-right"
                      >
                        <li>פרויקטים</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/posts"
                        className="text-white w-full p-2 rounded-md hover:bg-slate-50 hover:text-black text-right"
                      >
                        <li>מגזין</li>
                      </Link>
                      <Link
                        onClick={handleClose}
                        to="/contact"
                        className="text-white w-full p-2 rounded-md hover:bg-slate-50 hover:text-black text-right"
                      >
                        <li>קשר</li>
                      </Link>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
              <SheetFooter className="absolute bottom-12 right-6">
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