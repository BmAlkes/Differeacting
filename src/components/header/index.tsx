import logo from "../../assets/svg/Logo2.svg";
// import israel from "../../assets/israel.png";
// import eua from "../../assets/united-states.png";
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


const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const [direction] = useState(document.body.dir);
 
  return (
    <header className="bg-[#030B0F]  fixed top-0 w-full z-[100]">
      <nav className=" nav flex lg:flex-row flex-row-reverse items-center justify-between w-[92%] mx-auto h-24">
        <div className="">
          <Link to="/" aria-label="logo website">
            <img src={logo} alt="web site logo" className="w-[191px]" />

          </Link>
        </div>
        <div className=" bg-[#030B0F] left-0 lg:w-auto hidden w-full lg:flex items-center ">
          <ul className="lg:flex md:flex-row hidden lg:items-center lg:gap-[4vw] gap-6 text-lg text-white">
            <li className="nav relative">
              <Link to="/" aria-label="home Page">
                ראשי
              </Link>
            </li>
            <li className="nav relative">
              <Link to="/about" aria-label="about page">
                מי אנחנו
              </Link>
            </li>
            

            <li className="nav relative">
              <Link to="/projects" aria-label="projects page">
                פרויקטים
              </Link>
            </li>
            <li className="nav relative">
              <Link to="/posts" aria-label="posts page">
                מגזין
              </Link>
            </li>

            <li className="nav relative">
              <Link to="/contact" aria-label="contact page">
                צרו קשר
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 cursor-pointer">
          {/* {languageOptions.map((language) => (
            <button
              key={language.value}
              className=""
              onClick={() => {
                i18n.changeLanguage(language.value);
              }}
            >
              <img src={language.flag} alt={language.name} className="w-10" />
            </button>
          ))} */}
        </div>
        <a
          href="tel:0549547355"
          className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded p-[1px] hidden md:block "
        >
          <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
            דברו איתנו
          </span>
        </a>{" "}
        <div className="lg:hidden cursor-pointer">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <AiOutlineMenu size={35} color="#fff" arial-label="mobile menu" />
            </SheetTrigger>
            <SheetContent
              side={"right"}
              className="bg-[#030B0F] text-white border-l border-[#030b0f] p-6 z-[1000]"
            >
              <SheetHeader>
                <SheetTitle className="absolute left-5">
                  <Link to="/" aria-label="logo website">
                    <img src={logo} alt="" className="w-[150px]" />
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  <nav className="mt-24 ">
                    <ul
                      className={`text-xl text-gray-900 flex flex-col gap-5   "items-end`}
                    >
                      <Link
                        aria-label="home page"
                        onClick={handleClose}
                        to="/"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>ראשי</li>
                      </Link>
                      <Link
                        aria-label="about website"
                        onClick={handleClose}
                        to="/about"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>מי אנחנו</li>
                      </Link>
                      {/* <Link
                        aria-label="about website"
                        onClick={handleClose}
                        to="/service"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>שרותים שלנו</li>
                      </Link> */}

                      <Link
                        aria-label="project website"
                        onClick={handleClose}
                        to="/projects"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>פרויקטים</li>
                      </Link>
                      <Link
                        to="/posts"
                        aria-label="posts page"
                        onClick={handleClose}
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>מגזין</li>
                      </Link>
                      <Link
                        aria-label="contact website"
                        onClick={handleClose}
                        to="/contact"
                        className={`text-white ${
                          direction === "rtl" ? "text-right" : "text-left"
                        } w-full p-2 rounded-md hover:bg-slate-50 hover:text-black`}
                      >
                        <li>צרו קשר</li>
                      </Link>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
              <SheetFooter className="absolute bottom-12">
                <ul className="flex gap-5">
                  <li>
                    <a href="tel:0545899899" aria-label="phone to call">
                      <PhoneCallIcon size={28} color="#fff" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=9720549547355&text=I%20want%20to%20talk%20about%20a%20project"
                      aria-label="whats app"
                    >
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
