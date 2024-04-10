import { motion } from "framer-motion";
import CardPrice from "../../components/priceCard";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollUp from "../../components/scrollup";
import FAQ from "../../components/FAQ";
import WhatsApp from "../../components/whatsappscroll";

const Services = () => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        default: { duration: 0.4, ease: "easeInOut" },
      }}
    >
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

      <ScrollUp />
      <WhatsApp />
    </motion.div>
  );
};

export default Services;
