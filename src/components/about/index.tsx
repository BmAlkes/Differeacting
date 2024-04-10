import { Link } from "react-router-dom";
import Secimg from "../../assets/svg/pictureSec.svg";
// npm run dev

const About = () => {
  return (
    <>
      <section className=" lg:pt-5 lglg:h-screen h-full bg-[#030B0F] relative py-24 lg:py-0  z-40">
        <div className="container h-full mx-auto py-14 flex lg:flex-row-reverse flex-col-reverse items-center lg:justify-between justify-center z-10">
          <div
            className=""
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-easing="linear"
          >
            <img
              src={Secimg}
              alt="image with pc and clouds for tecnologie"
              className="w-full max-w-[554px] h-full md:w-[330px] lg:w-[554px] "
            />
          </div>
          <div
            className="text-[#F4F4F4] max-w-[500px] flex flex-col lg:justify-end justify-center items-center lg:items-start"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="linear"
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
    </>
  );
};

export default About;
