import { Link } from "react-router-dom";
import avatar from "../../assets/Avatar.png";
const FAQ = () => {
  return (
    <>
      <section className="h-full pb-16  bg-[#F4F4F4]">
        <div className="container flex items-center gap-5 flex-col">
          <h3 className="font-bold text-6xl">שאלות נפוצות</h3>
          <p className="text-2xl font-normal">
            כל מה שאתה צריך לדעת על המוצר והחיוב
          </p>
          <div className="container">
            <div className="mx-auto lg:w-[1280px] md:w-[660px] w-72 mt-24">
              <div
                className="divide-y divide-[#E7E7E7]"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    מה השירותים העיקריים שאתם מציעים?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-[#454545]  text-xl">
                    אני מציעים בננית אתרים, פיתוח אפלקציות מותאמות אישיות
                    ושירותים אחסון ענן מתקדמים
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    איך ניתן ליצור קשר עם החברה שלכם?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 text-xl">
                    ניתן ליצור קשר איתנו דרך טופס צור קשר באתר שלנו או באמצעות
                    פרטי ההתקשרות המופיעים באתר.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    האם יש לכם ניסיון בבניית אתרים עבור תחומים ספציפיים?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 text-xl">
                    כן, אנו מתמקדין בבניית אתרים ואפלקציות עבור חברות בנייה,
                    מסחר אלטרוני ועסקים קטנים ובנינוניים.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    מהם השלבים העיקריים בתהליך בננית אתר או אפלקציה אינטרנטית?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 text-xl">
                    השלבים כללים איסוף דרישות, תכנון ועיצוב, פיתוח , בדיקות
                    והשקה. כל שלב נעשה בשיתוף פעולה עם הלקוח.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 ">
                    איך ניתן לנהל את התחזוקה והעדכונים של האתר או אפליקציה לאחק
                    שהם הושלמו?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 text-xl">
                    אני מספקים שירותים תחזוקה ותמיכה רציניים כללים עדכונים
                    רגילים, תיקוני באגים והתאמות פונקציונליות.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    איך ניתן למדוד את הביצועי האתר או האפליקציה?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 text-xl">
                    אנו משתמשים בכלים כמו Google Analytics לניתוח ביצועים, מבנה
                    נתונים וכלים נוסםים למדידות שיעורי ההמרה והשימוש.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 ">
                    מהם היתרונות האחסון בענן הבשוואה לאחסון פיזי?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 text-lg">
                    אחסון בענן מציע גמישות גבוהה, ביצועיפ משופרים , אבטח מתקדמת
                    ויכולת גיבויים אוטומטיים, לעומת אחסון פיזי.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    מהם תקני האבטחה שאתם מציעים לאתרים ולאפליקציות שאתם מפתחים?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 text-lg">
                    אנו מיישמים HTTPS, ניהול גישה מתקדמת, ספריות תוכנה עדכוניות
                    ובדיקות אבטחה תקופתיות להבטחת רמת אבטחה גבוהה.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                    מהם העלויות הפיתוח והתחזוקה של אפליקציה או בניית אתר?
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="block h-5 w-5 group-open:hidden border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#6FCFED"
                        className="hidden h-5 w-5 group-open:block border-2 rounded-full border-[#6FCFED]"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </div>
                  </summary>
                  <div className="pb-4 text-secondary-500 text-lg">
                    עלות הפיתוח והתחזוקה תלויה במידת הפרטנות והמורכבוצ של
                    הפרוייקטץ אנו מספקים הערכות בהתאם לדרישות הלקוח.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F4] h-full py-16">
        <div className="bg-white lg:w-[1280px] h-[300px] container flex-col flex items-center justify-center">
          <img
            src={avatar}
            alt=" avatar of persons"
            className="max-w-[120px] object-cover"
          />
          <p className="text-[#111111] text-2xl font-normal mt-9">
            עדיין יש לכם שאלות?
          </p>
          <p className="text-[#454545] text-lg font-normal mt-2">
            אינך מוצא את התשובה שאתה מחפש? נא לשוחח עם הצוות הידידותי שלנו.
          </p>

          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-xl p-[1px]  mt-9  ">
              <span className="flex w-full  text-white rounded-xl py-[14px] px-[24px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                צרו איתנו קשר
              </span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FAQ;
