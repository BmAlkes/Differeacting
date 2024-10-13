import Reccomend from "../../components/footer";
import ScrollUp from "../../components/scrollup";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import WhatsApp from "../../components/whatsappscroll";
import Cursor from "../../components/cursoFollower";
import { Tilt } from "react-tilt";
import { Helmet } from "react-helmet";



const AboutPage = () => {
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
      <section className=" bg-[#030B0F] md:h-screen h:full  mt-[96px]">
        <div className="flex flex-col lg:flex-row lg:gap-30  h-full container w-full mx-auto">
          <div className="w-full h-full  flex flex-col justify-center max-w-[800px] z-50 mt-8 md:mt-5 ">
            <h1 className="text-[#f4f4f4] lg:text-[102px] md:text-5xl text-3xl  text-right font-bold z-10 [text-shadow:_0_10px_0_rgb(0_0_0_/_90%)]">
              עושים את זה מדהים
            </h1>
            <h2 className="text-[#6FCFED] lg:text-2xl text-lg">
              אנחנו פה בשביל לעזור לעסק שלך לצמוח
            </h2>

            {/* <p className="text-white lg:text-2xl font-normal lg:mt-[10px] mt-5 text-xl">
          המותג שלך צריך פיתוח בהתאמה אישית ובטכנולוגיות מתקדמות
          כגון:Wordpress, React, Google Analytics
        </p> */}
            <div className="flex gap-7 mt-[30px]"></div>
          </div>
          <Tilt>
            <img
              src={
               "https://res.cloudinary.com/landingpage2/image/upload/v1721405572/Remove-bg.ai_1721405515178_ggbi3j.png"
              }
              alt="background hero"
              className="lg:h-full  object-cover  md:max-w-[600px]   mx-auto  overflow-visible  h-[400px] md:h-[900px] "
              data-tilt
            />
          </Tilt>
        </div>
      </section>
      <section className="bg-[#030B0F] h-full py-6 ">
        <div className="text-[#f4f4f4] container flex flex-col md:flex-row justify-between items-end  md:mt-20 lg:gap-[281px] gap-8 py-36">
          <div className="max-w-[700px] mx-auto ">
            <h3 className="lg:text-6xl md:text-4xl text-2xl font-semibold text-center ">
              אנחנו פה בשביל לעזור לעסק שלך לצמוח
            </h3>
            <p className="text-center lg:text-2xl md:text-xl mt-4">
              ברוכים הבאים ל-{" "}
              <span className="text-[#6FCFED]">differeacting</span>, אנחנו
              קולקטיב של יוצרים, מתכנתים ומשווקים המאמינים בחדשנות וביצירתיות.
              כל פרוייקט אצלנו הוא קודם כל ליווי והקשבה לצרכי הלקוח ורק לאחר מכן
              נדאג לספק את הפתרון המושלם כמו "כפפה ליד".
            </p>
          </div>
        </div>

        <div className="text-[#f4f4f4] container flex lg:flex-row flex-col justify-between items-center   gap-8 my-10">
          <div>
            <h3 className="lg:text-6xl md:text-4xl text-2xl font-semibold ">
              מה אומר הליווי?
            </h3>
            <p className="text-justify lg:text-2xl md:text-xl mt-4 max-w-[570px] ">
              נשתלב בתוך מערך השיווק שלך ונבנה ביחד אסטרטגיה חכמה שנועדה להוזיל
              את עלויות השיווק ולהצעיד כל עסק וכל מיזם לסיסטם יעיל ומקצועי לכל
              מטרה: לידים, מכירות, השקת מוצר חדש או מערכת.
            </p>
          </div>
          <div className="container my-8 flex-1">
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1727720942/elearning-concept-online-education-home_ncsxy6.png"
              alt=""
              className="w-full rounded-[30px] mr-auto"
            />
          </div>
        </div>
        <div className="text-[#f4f4f4] container flex lg:flex-row-reverse flex-col justify-between items-center   gap-8 my-10">
          <div className="">
            <h3 className="lg:text-6xl md:text-4xl text-2xl font-semibold ">
              מה אומר השם?
            </h3>
            <p className="text-justify lg:text-2xl md:text-xl mt-4 max-w-[570px] ">
              שילוב של different + react פיתוח האתרים שלנו בסטודיו ברובו נעשה
              באמצעות react, השילוב של זה עם הפתרון שאנו מציעים ללקוחותינו מאפשר
              לנו להביא בשורה ותגובה שונה וחדשה לעולם הדיגיטל. אצלנו בחברה תמצאו
              ארבע מחלקות מובילות: עיצוב גרפי, פיתוח אתרים, שיווק דיגיטלי ואחסון
              אתרים.
            </p>
          </div>
          <div className="container my-8 flex-1">
            <img src="https://res.cloudinary.com/landingpage2/image/upload/v1727720233/modern-computer-with-colorful-interface-design_uycemm.png" alt="Colorfull computer" className=" rounded-[30px] ml-auto" />
          </div>
        </div>
        <div className="text-[#f4f4f4] container flex lg:flex-row flex-col justify-between items-center   gap-8 my-10">
          <div className="">
            <p className="text-justify lg:text-2xl md:text-xl mt-4 max-w-[570px] ">
              הצטרפו אלינו למסע דיגיטלי שישנה את האופן בו אתם חושבים על הפרסום
              והנוכחות שלכם ברשת. ב-differeacting, אנחנו לא רק מבטיחים, אנחנו
              מגשימים.
            </p>
          </div>
          <div className="container my-8 flex-1">
            <img
              src="https://res.cloudinary.com/landingpage2/image/upload/v1727720415/programming-background-collage_nbzcve.png"
              alt=" hand touch screen"
              className="w-full rounded-[30px] max-h-[488px] object-cover"
            />
          </div>
        </div>
      </section>

      <Reccomend />
      <ScrollUp />
      <WhatsApp />
      <Cursor />
    </motion.div>
  );
};

export default AboutPage;
