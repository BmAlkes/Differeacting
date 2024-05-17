import web from "../../assets/svg/web.svg";
import digital from "../../assets/svg/digital.svg";
import graphic from "../../assets/svg/graphic.svg";
import server from "../../assets/svg/server.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import WhatsApp from "../../components/whatsappscroll";
import CardPrice from "../../components/priceCard";
import FAQ from "../../components/FAQ";

const Service = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const takeOff = [
    { include: "עיצוב", textOne: "תבנית לבחירה", icon: true },
    {
      include: "סוג אתר",
      textOne: "עמוד נחיתה / מיני סייט",
      icon: true,
    },
    {
      include: "שיווק",
      textOne: "קמפיין בפייסבוק  לאיסוף לידים /יצירת קשר / מבצע / מוצר חדש",
      icon: true,
    },
    {
      include: "תחזוקה",
      textOne: "שירות של אחסון ותחזוקה שוטפת לאורך כל חיי הקמפיין",
      icon: true,
    },
    {
      include: "crm ",
      textOne: "חיבור למערכת לידים שלנו ושיקוף הנתונים ללקוח",
      icon: true,
    },
    {
      include: "מעקב ומדידה",
      textOne:
        "חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta buisiness, gtm, רימרקטינג",
      icon: true,
    },
  ];
  const wordpress = [
    {
      include: "עיצוב",
      textOne: "עיצוב חדש ובהתאמה אישית ללקוח כולל קבצי figma",
      icon: true,
    },
    {
      include: "סוג אתר",
      textOne:
        "אתר תדמית וורדפרס עד 6-8 עמודים כולל עמוד צור קשר, אודות, שירותים, מותאם להכנה לקידום אורגני כולל אזור בלוג פוסטים ",
      icon: true,
    },
    {
      include: "שיווק",
      textOne: "SEO טכני בלבד!",
      icon: true,
    },
    {
      include: "תחזוקה",
      textOne: "אחסון ותחזוקה, ניהול מלא של צד שרת",
      icon: true,
    },
    {
      include: "crm ",
      textOne: "חיבור למערכת לידים ושיקוף הנתונים ללקוח",
      icon: true,
    },
    {
      include: "מעקב ומדידה",
      textOne:
        "חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta buisiness, gtm, רימרקטינג, סארצ' קונסול",
      icon: true,
    },
  ];
  const react = [
    {
      include: "עיצוב",
      textOne: "עיצוב חדש ובהתאמה אישית ללקוח כולל קבצי figma",
      icon: true,
    },
    {
      include: "סוג אתר",
      textOne:
        "אתר תדמית בריאקט עד 6-8 עמודים כולל עמוד צור קשר, אודות, שירותים, מותאם להכנה לקידום אורגני כולל אזור בלוג פוסטים ",
      icon: true,
    },
    {
      include: "שיווק",
      textOne: "SEO טכני בלבד!",
      icon: true,
    },
    {
      include: "תחזוקה",
      textOne: "אחסון ותחזוקה, ניהול מלא של צד שרת",
      icon: true,
    },
    {
      include: "crm ",
      textOne: "חיבור למערכת לידים ושיקוף הנתונים ללקוח",
      icon: true,
    },
    {
      include: "מעקב ומדידה",
      textOne:
        "חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta buisiness, gtm, רימרקטינג, סארצ' קונסול",
      icon: true,
    },
  ];
  const milkAll = [
    {
      include: "עיצוב",
      textOne: "עיצוב חדש ובהתאמה אישית ללקוח כולל קבצי figma",
      icon: true,
    },
    {
      include: "סוג אתר",
      textOne: "אתר מתקדם מותאם לאתרי חנויות גדולים / saas",
      icon: true,
    },
    {
      include: "שיווק",
      textOne:
        "חבילת שיווק מלאה: SEO מלא! כולל שוטף ( תוכן וקישורים), קמפיין ממומן גוגל אדס ברשת המדיה כולל עיצוב באנרים , חבילת שיווק בפייסבוק",
      icon: true,
    },
    {
      include: "תחזוקה",
      textOne: "אחסון ותחזוקה, ניהול מלא של צד שרת",
      icon: true,
    },
    {
      include: "crm ",
      textOne: "חיבור למערכת לידים ושיקוף הנתונים ללקוח",
      icon: true,
    },
    {
      include: "מעקב ומדידה",
      textOne:
        "חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta buisiness, gtm, רימרקטינג, סארצ' קונסול, מערכת למעקב מיקומים se ranking",
      icon: true,
    },
  ];
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
      <section className=" bg-[#030B0F]  md:h-[900px] h-[960px] ">
        <div className="flex flex-col  pt-[250px] items-center gap-[28px] h-full">
          <h2 className="text-[#f4f4f4] font-bold lg:text-[102px] text-[40px] md:text-[60px] text-center ">
            בחרו את התוכנית{" "}
            <span className="block text-gradient">המתאימה לכם</span>
          </h2>
          <p className="text-[#F4F4F4] lg:text-[39px] text-2xl font-normal ">
            בנינו לכם כמה מסלולים מעניינים
          </p>
        </div>
      </section>
      <section className=" flex min-h-screen flex-col items-center bg-[#F4F4F4] ">
        <div
          className="flex lg:flex-row flex-wrap lg:container lg:flex-nowrap items-center justify-center  lg:gap-[24px] lg:mt-[-200px] md:mt-[-400px] mt-[-500px] mb-16"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <CardPrice
            price=""
            textBase="Take off"
            serviceList={takeOff}
            background="white"
          />
          <CardPrice
            price=""
            textBase="Wordpress in the air"
            serviceList={wordpress}
            background="white"
          />
          <CardPrice
            price=""
            textBase="React from the space"
            serviceList={react}
            background="blue"
          />
          <CardPrice
            price=""
            textBase="All milky way"
            serviceList={milkAll}
            background="white"
          />
        </div>
      </section>
      <FAQ />
      {/* <Steps
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
      /> */}
      <WhatsApp />
    </>
  );
};

export default Service;
