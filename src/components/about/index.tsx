import { Link } from "react-router-dom";
import Secimg from "../../assets/svg/pictureSec.svg";
import web from "../../assets/svg/web.svg";
import digital from "../../assets/svg/digital.svg";
import graphic from "../../assets/svg/graphic.svg";
import server from "../../assets/svg/server.svg";
import vetor from "../../assets/svg/Vector 18.svg";
import { Tilt } from "react-tilt";

// npm run dev

const About = () => {
  return (
    <>
      <section className=" lg:pt-5 lglg:h-screen h-full bg-[#030B0F] relative py-24 lg:py-0  ">
        <div className="container h-full mx-auto py-14 flex lg:flex-row-reverse flex-col-reverse items-center lg:justify-between justify-center z-10">
          <Tilt>
            <img
              src={Secimg}
              alt="image with pc and clouds for tecnologie"
              className="w-full max-w-[554px] h-full md:w-[330px] lg:w-[554px]"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            />
          </Tilt>

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
            <Link to="/about">
              <button className="button bg-gradient-to-r from-[#6FCFED] w-36 py-[2px] px-[2px] to-[#C96CBE] text-white font-semibold rounded-xl p-[1px]   ">
                <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] items-center justify-center">
                  אודות
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full lg:h-screen h-full bg-[#030B0F] text-[#D1D1D1] flex flex-col justify-center items-center relative">
        <img
          src={vetor}
          alt="backgroun"
          className="absolute right-0  rotate-180  overflow-visible z-10 bottom-[-400px]"
        />

        <div className="container flex flex-col justify-center items-center">
          <h2 className="text-6xl font-semibold">השירותים שלנו</h2>
          <p className="max-w-[869px] text-center py-7">
            ברוכים הבאים למחלקות העיצוב, הפיתוח, השיווק והשרתים שלנו. המקום שבו
            כל הפתרונות הדיגיטליים נמצאים תחת קורת גג אחת! בחרו עיצוב גרפי
            מרהיב, התקדמו לפיתוח אתרי אינטרנט מתקדמים ושווקו את האתר לקבלת לידים
            איכותיים ואל תשכחו לאחסן את האתר במקום בטוח! הכל כאן, במקום אחד -
            התחילו את המסע שלכם אל ההצלחה הדיגיטלית עכשיו!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row container gap-8 mt-20 mb-14 lg:mb-0  z-50">
          <div className="flex flex-col min-w-[315px]   justify-between py-6  px-4 rounded-lg show ">
            <img src={graphic} alt="web icon" className="w-[60px]" />
            <h3 className="font-light text-[#F4F4F4] text-2xl my-4">
              עיצוב גרפי
            </h3>
            <p className="text-lg font-normel text-[#888888] my-5">
              הביאו לחיים את הרעיונות שלכם עם עיצוב גרפי מקצועי: מלוגואים
              ייחודיים, עיצוב אתרים מעוררי השראה וחבילות מיתוג עסקי שמבליטות את
              הזהות והערכים של העסק / המותג.
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
              פיתוח אתרי אינטרנט
            </h3>
            <p className="text-lg font-normel text-[#888888] my-5">
              פתחו את שערי הדיגיטל שלכם עם אתרי אינטרנט מותאמים אישית - מעמודי
              נחיתה דינמיים ואתרי תדמית בוורדפרס, דרך אתרי ריאקט מתקדמים, ועד
              חנויות מקוונות ופתרונות Saas.
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
            <p className="text-lg font-normel text-[#888888] my-5">
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
            <p className="text-lg font-normel text-[#888888] my-5">
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
