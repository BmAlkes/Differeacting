import { motion } from "framer-motion";
import digital from "../../assets/web.jpg";
import bg from "../../assets/svg/vetor1.svg";
import html from "../../assets/html.png";
import css from "../../assets/css (2).png";
import elementor from "../../assets/elementor.png";
import wordPress from "../../assets/wordpress.png";
import shopp from "../../assets/shoppy.png";
import js from "../../assets/javascript.png";

import { useLocation } from "react-router-dom";
import graphic from "../../assets/Line Chart.png";
import FAQ from "../../components/FAQ";
import { FormEvent, useEffect, useState } from "react";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";
import emailjs from "@emailjs/browser";

const DevelopmentPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || phone === "") {
      alert("Fill all the fields");
      return;
    }
    const templateParams = {
      from_name: name + " " + lastName,
      phone: phone,
      message: message,
      email: email,
    };
   
    emailjs
      .send(
        "service_4linpx5",
        "template_ilmbuah",
        templateParams,
        "cWFIwkGX6Ph0Mm988"
      )
      .then((response) => {
        console.log("Email send", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setLastname("");
      });
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: { duration: 0.4, ease: "easeInOut" },
      }}
    >

      <section className=" bg-[#030B0F] lg:h-screen h-full mt-[96px] relative pb-7 lg:pb-0">
        <div
          className="container h-full flex flex-col lg:flex-row items-center lg:justify-between  gap-[80px] "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <img
            src={bg}
            alt=""
            className="absolute left-[100px] bottom-0 lg:bottom-36 w-full max-h-[826px] max-w-[805px] "
          />
          <div className="max-w-[600px] flex flex-col justify-center items-center lg:items-start pt-7 lg:pt-0 z-50">
            <h3 className="text-[#f1fafd] lg:text-2xl text-lg font-bold text-center lg:text-right pt-5 ">
              פתחו את שערי הדיגיטל שלכם עם אתרי אינטרנט מותאמים אישית
            </h3>
            <h2 className="text-[#f4f4f4] font-bold lg:text-[102px] md:text-[40px] text-[30px] text-center lg:text-right  ">
              פיתוח אתרי אינטרנט
            </h2>
            {/* <h4 className="text-2xl text-[#b0b0b0] max-w-[479px] my-[40px]">
              המותג שלך צריך פיתוח בהתאמה אישית ובטכנולוגיות מתקדמות
              כגון:Wordpress, React, Google Analytics
            </h4>
            <button className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-xl p-[1px]   ">
              <span className="flex w-full  text-white rounded-xl py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                אני רוצה לדעת עוד
              </span>
            </button> */}
          </div>
          <div className="flex justify-center items-center z-50">
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1726131512/Differeacting/file_1_kvcraa.png"
              alt="picture about digital world"
              className="w-full lg:w-[660px] object-cover md:h-[600px] rounded-[20px] "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full md:h-[200px]  bg-[#6FCFED] py-3">
          <div className="h-full container flex flex-col lg:flex-row items-center lg:justify-between  justify-center gap-2 py-5">
            <p className="max-w-[353px] text-2xl font-bold text-center">
              אנו עובדים עם הטכנולוגיות המתקדמות ביותר בעולם הדיגיטל
            </p>
            <div className="flex flex-row-reverse lg:gap-7 gap-2 flex-wrap">
              <img
                src={css}
                alt="logo css"
                className="max-w-[98px] w-16 object-contain lg:w-full"
              />
              <img
                src={html}
                alt="logo html"
                className="max-w-[98px] w-16 object-contain lg:w-full"
              />
              <img
                src={js}
                alt="logo javascript"
                className="max-w-[98px] w-16 object-contain lg:w-full"
              />
              <img
                src={shopp}
                alt="logo shopfy"
                className="max-w-[98px] w-16 object-contain lg:w-full"
              />
              <img
                src={wordPress}
                alt="logo wordpress"
                className="max-w-[98px] w-16 object-contain lg:w-full"
              />
              <img
                src={wordPress}
                alt="logo wordpress"
                className="max-w-[98px] w-16 object-contain lg:w-full"
              />
              <img
                src={elementor}
                alt="logo elementor "
                className="max-w-[98px] w-16 object-contain lg:w-full"
              />
            </div>
          </div>
        </div>
      </section>
     <section  className=" bg-[#030B0F] lg:h-screen h-full relative p-3">
    <img src="https://res.cloudinary.com/landingpage2/image/upload/v1726125355/Differeacting/gy-rRih3DFPcFHQ0p-7BP-transformed_n4ekcz.png" alt="creadible image" className="lg:max-w-[900px] centralImage  z-[-10px]"   />
  <div className="container flex items-center justify-between h-full">

    <div className="text-white z-10 container mx-auto p-9 ">
      <h2 className="md:text-7xl text-2xl text-center mb-4">ביצוע שינוי מתחיל משיחה אחת</h2>
      <p className="text-center text-lg mb-12">מלא את הטופס למטה כדי שנציג שירות יחזור אליך בהקדם</p>

      <form onSubmit={sendEmail}>
                  <div className="flex flex-col gap-8 ">
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-7 py-3 bg-white w-full text-sm border-b-2 rounded-lg focus:border-[#6FCFED] outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="10"
                          cy="7"
                          r="6"
                          data-original="#000000"
                        ></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-7  py-3 bg-white w-full text-sm border-b-2 rounded-lg focus:border-[#6FCFED] outline-none"
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="10"
                          cy="7"
                          r="6"
                          data-original="#000000"
                        ></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="number"
                        placeholder="Phone No."
                        className="px-7  py-3 bg-white text-black w-full text-sm border-b-2 rounded-lg focus:border-[#6FCFED] outline-none"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <svg
                        fill="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <div className="relative flex items-center">
                      <input
                        type="email"
                        placeholder="Email"
                        className="px-7  py-3 bg-white text-black w-full text-sm border-b-2 rounded-lg focus:border-[#6FCFED] outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 682.667 682.667"
                      >
                        <defs>
                          <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path
                              d="M0 512h512V0H0Z"
                              data-original="#000000"
                            ></path>
                          </clipPath>
                        </defs>
                        <g
                          clip-path="url(#a)"
                          transform="matrix(1.33 0 0 -1.33 0 682.667)"
                        >
                          <path
                            fill="none"
                            stroke-miterlimit="10"
                            stroke-width="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                      <textarea
                        placeholder="Write Message"
                        className="px-7  pt-3 bg-white resize-none text-black w-full text-sm border-b-2 rounded-lg focus:border-[#6FCFED] outline-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 682.667 682.667"
                      >
                        <defs>
                          <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path
                              d="M0 512h512V0H0Z"
                              data-original="#000000"
                            ></path>
                          </clipPath>
                        </defs>
                        <g
                          clip-path="url(#a)"
                          transform="matrix(1.33 0 0 -1.33 0 682.667)"
                        >
                          <path
                            fill="none"
                            stroke-miterlimit="10"
                            stroke-width="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#6FCFED] w-full mt-4 to-[#C96CBE] text-white font-semibold rounded-xl p-[1px]   "
                  >
                    <span className="flex w-full  text-white rounded-xl py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#ffffff] items-center justify-center">
                      שלח
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        fill="#fff"
                        className="mr-2"
                        viewBox="0 0 548.244 548.244"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                          clip-rule="evenodd"
                          data-original="#000000"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
    </div>
  </div>

</section>
      <section className="w-full h-full bg-[#E7E7E7] hidden">
        <div className="container flex flex-col items-center justify-between lg:pt-32 pt-6">
          <h3 className="lg:text-6xl text-3xl font-bold">
            נתונים שיכולים להפתיע אתכם
          </h3>
        </div>
        <div className="bg-[#F4F4F4]  lg:max-w-[1558px] mx-auto flex lg:flex-row flex-col items-center justify-between rounded-3xl gap-[39px] p-[55px] lg:mt-48 mt-9">
          <div className="lg:max-w-[527px] flex flex-col gap-5 ">
            <h3 className="text-4xl">
              אתרים שמעוצבים בקפידה מסוגלים להביא ליחס המרה גבוה יותר
            </h3>
            <p className="text-lg">
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית להאמית קרהשק
              סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק
              יהול, לכנוץ בעריר גק ליץ, ושבעגט. לורם איפסום דולור סיט אמט,
              קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט
              למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל
              בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם
              גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט קולורס מונפרד אדנדום
              סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ
              כלרשט מיחוצים. קלאצי קונסקטורר אדיפיסינג אלית.
            </p>
          </div>
          <div>
            <img src={graphic} alt="graphic of webpages" />
          </div>
        </div>
      </section>
      
      <FAQ />
      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default DevelopmentPage;
