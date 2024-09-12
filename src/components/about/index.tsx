import { Link } from "react-router-dom";
import Secimg from "../../assets/svg/pictureSec.svg";
import web from "../../assets/svg/web.svg";
import digital from "../../assets/svg/digital.svg";
import graphic from "../../assets/svg/graphic.svg";
import server from "../../assets/svg/server.svg";
import vetor from "../../assets/svg/Vector 18.svg";

// npm run dev

const About = () => {
  return (
    <>
      <section className=" lg:pt-5  h-full bg-[#030B0F] relative py-24 lg:py-0  ">
        <div className="container h-full mx-auto py-20 flex lg:flex-row-reverse flex-col-reverse items-center lg:justify-between justify-center z-10">
 
            <img
              src={Secimg}
              alt="image with pc and clouds for tecnologie"
              className="w-full max-w-[554px] h-full md:w-[330px] lg:w-[554px]"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            />
         

          <div
            className="text-[#F4F4F4] max-w-[500px] flex flex-col lg:justify-end justify-center items-center lg:items-start"
          data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="text-[#6FCFED] lg:text-2xl md:text-lg text-sm">
              Differeacting
            </h3>
            <h2 className="lg:text-6xl md:text-3xl text-xl font-semibold text-center lg:text-right">
              הבית של האיכות והחדשנות בעיצוב ופיתוח
            </h2>
            <p className="text-base  my-5  text-justify ">
              בסטודיו שלנו, אנו מתחייבים להיות עמכם מהצעד הראשון, מבטיחים שכל
              פרויקט יהיה לא רק מרהיב ומתקדם, אלא גם מסודר ומאורגן להפליא. כל
              פרויקט ב-<span className="text-[#6fcfed]">Differeacting</span>{" "}
              מתחיל באפיון ועיצוב מדויק, כאשר אנו מתמקדים בכל פרט ופרט כדי
              להבטיח שהמוצר הסופי יעמוד בציפיות הגבוהות שלנו ושלכם. אחרי העיצוב,
              אנחנו עוברים לשלב הפיתוח, שבו מופעלות הטכנולוגיות המתקדמות ביותר
              כדי להבטיח שאתרכם יהיה לא רק יפה, אלא גם חזק ובעל ביצועים גבוהים.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py- h-full bg-[#030B0F] text-[#D1D1D1] flex flex-col justify-center items-center relative">
        <img
          src={vetor}
          alt="backgroun"
          className="absolute right-0  rotate-180  overflow-visible z-10 "
        />

        <div className="container flex flex-col justify-center items-center lg:mt-">
          <h2 className="text-6xl font-semibold">השירותים שלנו</h2>
          <p className="max-w-[869px] text-center py-7">
            ברוכים הבאים למחלקות העיצוב, הפיתוח, השיווק והשרתים שלנו. המקום שבו
            כל הפתרונות הדיגיטליים נמצאים תחת קורת גג אחת! בחרו עיצוב גרפי
            מרהיב, התקדמו לפיתוח אתרי אינטרנט מתקדמים ושווקו את האתר לקבלת לידים
            איכותיים ואל תשכחו לאחסן את האתר במקום בטוח! הכל כאן, במקום אחד -
            התחילו את המסע שלכם אל ההצלחה הדיגיטלית עכשיו!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 container gap-8 mt-20 mb-14 lg:mb-0  z-50">
          <div className="flex flex-col min-w-[315px]   justify-between py-6  px-4 rounded-lg show ">
            <img src={graphic} alt="web icon" className="w-[60px]" />
            <h3 className="font-light text-[#F4F4F4] text-2xl my-4">
              עיצוב גרפי
            </h3>
            <p className="text-lg font-normel text-[#888888] my-5 text-justify">
          
מחלקת העיצוב הגרפי שלנו מתמחה ביצירת חוויות ויזואליות מרשימות המותאמות לזהות המותג שלך ולקהל היעד. אנו משלבים עקרונות עיצוב מודרניים עם מחקר משתמשים מעמיק כדי ליצור ממשקים אינטואיטיביים ומושכים. שימוש בכלים מתקדמים כמו Adobe Creative Suite ו-Figma מאפשר לנו לפתח עיצובים רספונסיביים המבטיחים חוויה עקבית בכל המכשירים. העיצוב המדויק והמקצועי שלנו לא רק משפר את האסתטיקה של האתר, אלא גם מגדיל את זמן השהייה של המשתמשים, מעלה את שיעורי ההמרה ומחזק את הנוכחות הדיגיטלית של העסק שלך.
            </p>
            <div className="hiddenShow">
              <Link to="/design">
                <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px]  text-white font-semibold rounded p-[1px] md:block  mr-auto">
                  <span className=" w-full bg-[#030B0F] text-white rounded-xl py-[8px] px-[8px]  flex ">
                    עמוד שירות
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col min-w-[315px]  justify-between py-6 px-4 rounded-lg show">
            <img src={web} alt="web icon" className="w-[60px]" />
            <h3 className="font-light text-[#F4F4F4] text-2xl my-4">
            פיתוח ותכנות
            </h3>
            <p className="text-lg font-normel text-[#888888] my-5 text-justify">
            מחלקת הפיתוח והתכנות שלנו מתמחה בבניית אתרים מתקדמים המותאמים אישית לצרכי העסק שלך, תוך שימוש בטכנולוגיות החדישות ביותר. אנו מיישמים פתרונות מבוססי React, Next.js ו-JavaScript, המאפשרים יצירת ממשקי משתמש דינמיים וביצועים מהירים. התמחותנו בפיתוח Full-stack מבטיחה אינטגרציה חלקה בין צד הלקוח לשרת, מה שמוביל לחווית משתמש אופטימלית ולהגדלת שיעורי ההמרה. עם הפתרונות שלנו, תוכל להאיץ את צמיחת העסק שלך ולהגדיל את המכירות באמצעות פלטפורמה דיגיטלית חזקה ויעילה.
            </p>
            <div className="hiddenShow">
              <Link to="/development">
                <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px]  text-white font-semibold rounded p-[1px] md:block  mr-auto">
                  <span className=" w-full bg-[#030B0F] text-white rounded-xl py-[8px] px-[8px]  flex ">
                    עמוד שירות
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col min-w-[315px]   justify-between py-6 px-4 rounded-lg show ">
            <img src={digital} alt="web icon" className="w-[60px]" />
            <h3 className="font-light text-[#F4F4F4] text-2xl my-4">
              שיווק דיגיטלי
            </h3>
            <p className="text-lg font-normel text-[#888888] my-5  text-justify">
              הגבירו את הנוכחות הדיגיטלית שלכם עם שיווק דיגיטלי יעיל - באמצעות
              SEO לשיפור מיקום במנועי חיפוש, קמפיינים ממוקדים בפייסבוק
              ואינסטגרם, ופרסום ממומן ב-Google Ads להגדלת המרות.
            </p>
            <div className="hiddenShow">
              <Link to="/digital">
                <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px]  text-white font-semibold rounded p-[1px] md:block  mr-auto">
                  <span className=" w-full bg-[#030B0F] text-white rounded-xl py-[8px] px-[8px]  flex ">
                    עמוד שירות
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col min-w-[315px]   justify-between py-6 px-4 rounded-lg show">
            <img src={server} alt="web icon" className="w-[60px]" />
            <h3 className="font-light text-[#F4F4F4] text-2xl my-4">
              אחסון והקצאת שרתים
            </h3>
            <p className="text-lg font-normel text-[#888888] my-5 text-justify">
              שמרו על אתרים ומידע בבטחה עם שירותי אחסון ושרתים מתקדמים. מבטיחים
              זמינות גבוהה, מהירות ואמינות לכל פרויקט ועסק.
            </p>
            <div className="hiddenShow">
              <Link to="server">
                <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px]  text-white font-semibold rounded p-[1px] md:block  mr-auto">
                  <span className=" w-full bg-[#030B0F] text-white rounded-xl py-[8px] px-[8px]  flex ">
                    עמוד שירות
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
