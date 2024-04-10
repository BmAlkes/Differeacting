import picOne from "../../assets/programing.png";
import Steps from "../../components/steps";
import Reccomend from "../../components/footer";
import ScrollUp from "../../components/scrollup";
import bg from "../../assets/heroAbout.png";
import web from "../../assets/svg/web.svg";
import digital from "../../assets/svg/digital.svg";
import graphic from "../../assets/svg/graphic.svg";
import server from "../../assets/svg/server.svg";
import picTwo from "../../assets/aboutnew.jpg";
import picThree from "../../assets/2151003782.jpg";
import picFour from "../../assets/4931.jpg";

import { Link, useLocation } from "react-router-dom";
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
        <div
          className="flex items-center justify-center h-full relative"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
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
        <div className="text-[#f4f4f4] container flex flex-col md:flex-row justify-between items-end  md:mt-20 lg:gap-[281px] gap-8 my-10">
          <div className="max-w-[570px]">
            <h3 className="lg:text-6xl md:text-4xl text-2xl font-semibold ">
              אנחנו פה בשביל לעזור לעסק שלך לצמוח
            </h3>
            <p className="text-justify lg:text-2xl md:text-xl mt-4">
              ברוכים הבאים ל-{" "}
              <span className="text-[#6FCFED]">differeacting</span>, אנחנו
              קולקטיב של יוצרים, מתכנתים ומשווקים המאמינים בחדשנות וביצירתיות.
              כל פרוייקט אצלנו הוא קודם כל ליווי והקשבה לצרכי הלקוח ורק לאחר מכן
              נדאג לספק את הפתרון המושלם כמו "כפפה ליד".
            </p>
          </div>
        </div>
        <div
          className="container my-8"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <img src={picOne} alt="" />
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
      <section className=" bg-[#030B0F] full-h ">
        <div
          className="container flex flex-col lg:flex-row gap-[138px] justify-center  h-full lg:pt-56 pt-28"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <div className="lg:max-w-[411px]">
            <h3 className="lg:text-6xl text-4xl text-center text-[#f4f4f4] lg:text-right font-bold">
              שירותים שאנחנו יכולים לעזור בהם
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-[50px]">
            <div className="flex flex-col  justify-between py-6 px-4 rounded-lg show">
              <img src={web} alt="web icon" className="w-[60px]" />
              <h3 className="font-light text-[#F4F4F4] text-2xl my-4">
                פיתוח אתרי אינטרנט
              </h3>
              <p className="text-lg font-normel text-[#888888] my-5">
                פתחו את שערי הדיגיטל שלכם עם אתרי אינטרנט מותאמים אישית - מעמודי
                נחיתה דינמיים ואתרי תדמית בוורדפרס, דרך אתרי ריאקט מתקדמים, ועד
                חנויות מקוונות ופתרונות Saas.
              </p>
              <div className="">
                <Link to="/development">
                  <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px]  text-white font-semibold rounded p-[1px] md:block  mr-auto">
                    <span className=" w-full bg-[#030B0F] text-white rounded py-[8px] px-[14px]  flex ">
                      עמוד שירות
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className=" flex flex-col  justify-between py-6 px-4 rounded-lg show">
              <img src={digital} alt="web icon" className="w-[60px]" />
              <h3 className="font-light text-[#F4F4F4] text-2xl my-4">
                שיווק דיגיטל
              </h3>
              <p className="text-lg font-normel text-[#888888] my-5">
                פתחו את שערי הדיגיטל שלכם עם אתרי אינטרנט מותאמים אישית - מעמודי
                נחיתה דינמיים ואתרי תדמית בוורדפרס, דרך אתרי ריאקט מתקדמים, ועד
                חנויות מקוונות ופתרונות Saas.
              </p>
              <div className="">
                <Link to="/digital">
                  <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px]  text-white font-semibold rounded p-[1px] md:block  mr-auto">
                    <span className=" w-full bg-[#030B0F] text-white rounded py-[8px] px-[14px]  flex ">
                      עמוד שירות
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col  justify-between py-6  px-4 rounded-lg show">
              <img src={graphic} alt="web icon" className="w-[60px]" />
              <h3 className="font-light text-[#F4F4F4] text-2xl my-4">
                עיצוב גרפי
              </h3>
              <p className="text-lg font-normel text-[#888888] my-5">
                פתחו את שערי הדיגיטל שלכם עם אתרי אינטרנט מותאמים אישית - מעמודי
                נחיתה דינמיים ואתרי תדמית בוורדפרס, דרך אתרי ריאקט מתקדמים, ועד
                חנויות מקוונות ופתרונות Saas.
              </p>
              <div className="">
                <Link to="/design">
                  <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px]  text-white font-semibold rounded p-[1px] md:block  mr-auto">
                    <span className=" w-full bg-[#030B0F] text-white rounded py-[8px] px-[14px]  flex ">
                      עמוד שירות
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col  justify-between py-6 px-4 rounded-lg show">
              <img src={server} alt="web icon" className="w-[60px]" />
              <h3 className="font-light text-[#F4F4F4] text-2xl my-4">
                אחסון והקצאת שרתים
              </h3>
              <p className="text-lg font-normel text-[#888888] my-5">
                פתחו את שערי הדיגיטל שלכם עם אתרי אינטרנט מותאמים אישית - מעמודי
                נחיתה דינמיים ואתרי תדמית בוורדפרס, דרך אתרי ריאקט מתקדמים, ועד
                חנויות מקוונות ופתרונות Saas.
              </p>
              <div className="">
                <Link to="/server">
                  <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px]  text-white font-semibold rounded p-[1px] md:block  mr-auto">
                    <span className=" w-full bg-[#030B0F] text-white rounded py-[8px] px-[14px]  flex ">
                      עמוד שירות
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Steps
        text1="בשלב הראשון התהליך מתחיל בהבנת הצרכים והמטרות של העסק. בשיחה ראשונית עם הלקוח, מתבצע איסוף מידע רחב על העסק, הקהל היעד, המתחרים והמטרות העסקיות"
        text2="לאחר מכן, מתקיים שלב של חקר שוק וניתוח נתונים כדי להבין טוב יותר את הסביבה התחרותית והצרכים של הקהל היעד"
        text3=". בהמשך, מעבירים לשלב העיצוב, בו מפתחים את תכנון הממשק והחוויה המשתמש (UI/UX), בחירת פלטת צבעים, עיצוב לוגו וזהות חזותית, וכן עיצוב הדפים השונים של האתר."
        step="שלב ראשון"
        stepNames=" שלב עיצוב "
        key="1"
      />
      <Steps
        text1="בשלב השני, פיתוח, מתחילים בהקמת התשתית הטכנולוגית של האתר. זה כולל את בחירת פלטפורמת האירוח, הגדרת ארכיטקטורת המידע"
        text2="פיתוח הפרונט-אנד והבק-אנד, והתקנת מערכות ניהול תוכן (CMS) שתאפשר ללקוח לעדכן תוכן באופן עצמאי."
        text3="במהלך פיתוח האתר, מתבצעת גם אופטימיזציה למנועי חיפוש (SEO) כדי לשפר את נראות האתר בתוצאות החיפוש האורגניות."
        step="שלב שני"
        stepNames=" שלב פיתוח "
        key="2"
      />
      <Steps
        text1=" בשלב השלישי, בניית תוכנית שיווקית ומעבר לקידום אורגני, מתמקדים בגיבוש אסטרטגיה שיווקית מקיפה שתכלול את כל ערוצי השיווק הדיגיטליים. זה כולל קידום אתרים במנועי חיפוש (SEO), פרסום ממומן בגוגל אדס וברשתות חברתיות, פיתוח תוכן איכותי וייחודי לבלוגים ולדפי נחיתה, ושימוש באמצעים נוספים כמו שיווק באימייל ושיווק דיגיטלי. חשוב למדוד ולנתח את הביצועים של כל פעילות שיווקית ולבצע אופטימיזציה מתמדת כדי להגדיל את ההגעה וההמרות."
        text2="התהליך כולו מותאם אישית לצרכים ולמטרות של כל עסק, ודורש שיתוף פעולה הדוק בין הלקוח לספק השירותים כדי להבטיח שהאתר המתקבל ישקף את ערכי המותג ויסייע בהשגת היעדים העסקיים."
        text3="לסיכום, תהליך בניית אתר לעסקים הוא מעגל מתמשך של פעילויות הכולל אפיון ועיצוב, פיתוח, שיווק ותחזוקה. כל שלב דורש מומחיות, תשומת לב לפרטים, והתאמה לצרכים המשתנים של העסק ושל השוק. ביצוע נכון של כל השלבים יבטיח שהאתר לא רק יעמוד בציפיות, אלא יעלה עליהן, ויסייע בהשגת המטרות העסקיות."
        step="שלב שלישי"
        stepNames=" שלב שיווק "
        key="3"
      />

      <Reccomend />
      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default AboutPage;
