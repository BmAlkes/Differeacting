import Reccomend from "../../components/footer";
import ScrollUp from "../../components/scrollup";
import bg from "../../assets/heroAbout.png";

import picTwo from "../../assets/aboutnew.jpg";
import picThree from "../../assets/2151003782.jpg";
import picFour from "../../assets/7666.jpg";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import WhatsApp from "../../components/whatsappscroll";

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
      <section className=" bg-[#030B0F] lg:h-screen h-[600px] mt-[96px]">
        <div className="flex items-center justify-center h-full relative">
          <h2 className="text-[#f4f4f4] lg:text-[102px] md:text-5xl text-3xl  text-center font-bold z-10 ">
            עושים את זה מדהים
          </h2>
          <img
            src={bg}
            alt="hero background"
            className="absolute inset-0 w-full lg:h-[1800px] md:h-[900px] h-[1000px] object-contain  my-auto"
          />
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
          <div
            className="container my-8 flex-1"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <img
              src={picThree}
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
          <div
            className="container my-8 flex-1"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <img src={picTwo} alt="" className=" rounded-[30px] ml-auto" />
          </div>
        </div>
        <div
          className="text-[#f4f4f4] container flex lg:flex-row flex-col justify-between items-center   gap-8 my-10"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <div className="">
            <p className="text-justify lg:text-2xl md:text-xl mt-4 max-w-[570px] ">
              הצטרפו אלינו למסע דיגיטלי שישנה את האופן בו אתם חושבים על הפרסום
              והנוכחות שלכם ברשת. ב-differeacting, אנחנו לא רק מבטיחים, אנחנו
              מגשימים.
            </p>
          </div>
          <div
            className="container my-8 flex-1"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <img
              src={picFour}
              alt=""
              className="w-full rounded-[30px] max-h-[488px] object-cover"
            />
          </div>
        </div>
      </section>

      <Reccomend />
      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default AboutPage;
