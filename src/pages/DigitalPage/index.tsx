import { motion } from "framer-motion";
import bg from "../../assets/svg/vetor1.svg";
import digital from "../../assets/marketing.jpg";
import html from "../../assets/html.png";
import css from "../../assets/css (2).png";
import elementor from "../../assets/elementor.png";
import wordPress from "../../assets/wordpress.png";
import shopp from "../../assets/shoppy.png";
import js from "../../assets/javascript.png";
// import CardPrice from "../../components/priceCard";
import { Link, useLocation } from "react-router-dom";
import graphic from "../../assets/Line Chart.png";
import FAQ from "../../components/FAQ";
import { useEffect } from "react";
import ScrollUp from "../../components/scrollup";
import WhatsApp from "../../components/whatsappscroll";

const DigitalPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // const takeOff = [
  //   { include: "עיצוב", textOne: "תבנית לבחירה", icon: true },
  //   {
  //     include: "סוג אתר",
  //     textOne: "עמוד נחיתה / מיני סייט",
  //     icon: true,
  //   },
  //   {
  //     include: "שיווק",
  //     textOne: "קמפיין בפייסבוק  לאיסוף לידים /יצירת קשר / מבצע / מוצר חדש",
  //     icon: true,
  //   },
  //   {
  //     include: "תחזוקה",
  //     textOne: "שירות של אחסון ותחזוקה שוטפת לאורך כל חיי הקמפיין",
  //     icon: true,
  //   },
  //   {
  //     include: "crm ",
  //     textOne: "חיבור למערכת לידים שלנו ושיקוף הנתונים ללקוח",
  //     icon: true,
  //   },
  //   {
  //     include: "מעקב ומדידה",
  //     textOne:
  //       "חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta business, gtm, רימרקטינג",
  //     icon: true,
  //   },
  // ];
  // const wordpress = [
  //   {
  //     include: "עיצוב",
  //     textOne: "עיצוב חדש ובהתאמה אישית ללקוח כולל קבצי figma",
  //     icon: true,
  //   },
  //   {
  //     include: "סוג אתר",
  //     textOne:
  //       "אתר תדמית וורדפרס עד 6-8 עמודים כולל עמוד צור קשר, אודות, שירותים, מותאם להכנה לקידום אורגני כולל אזור בלוג פוסטים ",
  //     icon: true,
  //   },
  //   {
  //     include: "שיווק",
  //     textOne: "SEO טכני בלבד!",
  //     icon: true,
  //   },
  //   {
  //     include: "תחזוקה",
  //     textOne: "אחסון ותחזוקה, ניהול מלא של צד שרת",
  //     icon: true,
  //   },
  //   {
  //     include: "crm ",
  //     textOne: "חיבור למערכת לידים ושיקוף הנתונים ללקוח",
  //     icon: true,
  //   },
  //   {
  //     include: "מעקב ומדידה",
  //     textOne:
  //       "חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta business, gtm, רימרקטינג, סארצ' קונסול",
  //     icon: true,
  //   },
  // ];
  // const react = [
  //   {
  //     include: "עיצוב",
  //     textOne: "עיצוב חדש ובהתאמה אישית ללקוח כולל קבצי figma",
  //     icon: true,
  //   },
  //   {
  //     include: "סוג אתר",
  //     textOne:
  //       "אתר תדמית בריאקט עד 6-8 עמודים כולל עמוד צור קשר, אודות, שירותים, מותאם להכנה לקידום אורגני כולל אזור בלוג פוסטים ",
  //     icon: true,
  //   },
  //   {
  //     include: "שיווק",
  //     textOne: "SEO טכני בלבד!",
  //     icon: true,
  //   },
  //   {
  //     include: "תחזוקה",
  //     textOne: "אחסון ותחזוקה, ניהול מלא של צד שרת",
  //     icon: true,
  //   },
  //   {
  //     include: "crm ",
  //     textOne: "חיבור למערכת לידים ושיקוף הנתונים ללקוח",
  //     icon: true,
  //   },
  //   {
  //     include: "מעקב ומדידה",
  //     textOne:
  //       "חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta business, gtm, רימרקטינג, סארצ' קונסול",
  //     icon: true,
  //   },
  // ];
  // const milkAll = [
  //   {
  //     include: "עיצוב",
  //     textOne: "עיצוב חדש ובהתאמה אישית ללקוח כולל קבצי figma",
  //     icon: true,
  //   },
  //   {
  //     include: "סוג אתר",
  //     textOne: "אתר מתקדם מותאם לאתרי חנויות גדולים / saas",
  //     icon: true,
  //   },
  //   {
  //     include: "שיווק",
  //     textOne:
  //       "חבילת שיווק מלאה: SEO מלא! כולל שוטף ( תוכן וקישורים), קמפיין ממומן גוגל אדס ברשת המדיה כולל עיצוב באנרים , חבילת שיווק בפייסבוק",
  //     icon: true,
  //   },
  //   {
  //     include: "תחזוקה",
  //     textOne: "אחסון ותחזוקה, ניהול מלא של צד שרת",
  //     icon: true,
  //   },
  //   {
  //     include: "crm ",
  //     textOne: "חיבור למערכת לידים ושיקוף הנתונים ללקוח",
  //     icon: true,
  //   },
  //   {
  //     include: "מעקב ומדידה",
  //     textOne:
  //       "חיבור כל כלי גוגל וכל אמצעי המעקב: גוגל אנליטיקס, meta business, gtm, רימרקטינג, סארצ' קונסול, מערכת למעקב מיקומים se ranking",
  //     icon: true,
  //   },
  // ];

  const testimonials = [
    {
      id: 1,
      name: "Anastacia Tsarfati",
      text: "ממליצה בחום על ברונו! באתר של SafeGarden חיפשתי מתכנת פרונט שיבין את החזון של האתר ואת הצרכים של המערכת. ברונו עבד בצורה מדויקת ומהירה, שאל את השאלות הנכונות וידע בדיוק מה הצרכים של המערכת. השיתוף פעולה איתו היה קליל ומקצועי והכי חשוב אנושי!",
    },
    {
      id: 1,
      name: "אורן טל",
      text: "עדן עבד אצלנו בתחילת הדרך וכבר אז זיהינו בחור שאפתן עם המון כוח רצון ללמוד ולהתקדם, קונוויזור תמיד תהיה הבית הראשון שלך בצעדייך הראשונים בעולם השיווק הדיגיטלי ואנו גאים על כך, בהצלחה במיזם החדש!",
    },
    {
      id: 1,
      name: "Ofir Zeitoun",
      text: "הכרתי את ברונו בתור סטודנט שלי, כבר מההתחלה עפתי עליו, הוא הביא עיצובים מרשימים במהירות שיא והתפתח מאוד מאז. ראיתי את כל העבודות שלו ואהבתי כל אחת, הוא יושב עם הלקוח להבין מה הלקוח צריך ומשם הוא לוקח את זה למקומות מרשימים. ברונו - חרוץ, מקשיב, מגלה הבנה ואמפתיה - מומלץ בחום",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <section className=" bg-[#030B0F] lg:h-screen h-full mt-[96px] relative">
        <div
          className="container h-full flex flex-col lg:flex-row items-center lg:justify-between  gap-[80px] "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <img
            src={bg}
            alt=""
            className="absolute lg:left-[100px] bottom-0 lg:bottom-36 w-full max-h-[826px] max-w-[805px]"
          />
          <div className="max-w-[600px] flex flex-col justify-center items-center lg:items-start  pt-5 z-30">
            <h3 className="text-[#f1fafd] lg:text-2xl text-lg font-bold ">
              פתחו את שערי הדיגיטל שלכם עם אתרי אינטרנט מותאמים אישית
            </h3>
            <h2 className="text-[#f4f4f4] font-bold lg:text-[102px] text-[40px] text-center ">
              שיווק דיגיטלי
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
          <div className="flex justify-center items-center flex-1">
            <img
              src={digital}
              alt="picture about digital world"
              className="w-full object-cover rounded-[20px] z-10 mb-12"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full md:h-[200px]  bg-[#6FCFED] py-3">
          <div className="h-full container flex flex-col lg:flex-row items-center lg:justify-between  justify-center gap-2">
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
      <section className="w-full  h-full flex flex-col items-center">
        <div
          className="flex lg:flex-row flex-wrap container lg:flex-nowrap items-center justify-center  lg:gap-[24px]   mb-16 mt-9 lg:mt-0"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          {/* <CardPrice
            price=""
            textBase="בסיס"
            serviceList={takeOff}
            background="white"
          />
          <CardPrice
            price=""
            textBase="מקצועי"
            serviceList={wordpress}
            background="white"
          />
          <CardPrice
            price=""
            textBase="הכי משתלם"
            serviceList={react}
            background="blue"
          />
          <CardPrice
            price=""
            textBase="הכל כלול"
            serviceList={milkAll}
            background="white"
          /> */}
        </div>
        <p className="mx-auto text-center max-w-[441px] text-[#5D5D5D]text-lg">
          המחיר לעיל כולל מע"מ ישראלי על סמך כתובת החיוב שלך. כל התוכניות
          מתחדשות מדי שנה במחיר מחירון.
        </p>
        <Link to="/contact">
          <button className="mt-[20px] mb-[40px] bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-xl p-[1px]    ">
            <span className="flex w-full  text-white rounded-xl py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
              לתנאים מיוחדים צרו קשר
            </span>
          </button>
        </Link>
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
      <section className="bg-[#111111] w-full lg:h-[702px] h-full flex flex-col  justify-center items-center">
        <div
          className="container"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <h3 className="text-[#F4F4F4] lg:text-6xl text-3xl mt-8 lg:mt-0 text-center">
            הלקוחות שלנו אומרים עלינו שאנחנו
          </h3>
        </div>

        <div
          className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
        >
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {testimonials.map((text) => (
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-4">
                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {text.name}
                    </p>
                    <p className="mt-4 text-gray-700">{text.text}</p>
                    <div className="flex justify-start mt-5 gap-0.5 text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#6FCFED"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#6FCFED"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#6FCFED"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#6FCFED"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#6FCFED"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default DigitalPage;
