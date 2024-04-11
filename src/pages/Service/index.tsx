import Steps from "../../components/steps";
import web from "../../assets/svg/web.svg";
import digital from "../../assets/svg/digital.svg";
import graphic from "../../assets/svg/graphic.svg";
import server from "../../assets/svg/server.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Service = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section className=" bg-[#030B0F] full-h ">
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1712765808/services_mfbrj7.jpg"
          alt=" services banner"
          className="h-[350px] object-cover md:h-auto lg:h-[700px] w-full"
        />
        <div
          className="container flex flex-col lg:flex-col gap-[138px] justify-center  h-full lg:pt-56 pt-28"
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
    </>
  );
};

export default Service;
