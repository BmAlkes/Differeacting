import { Link } from "react-router-dom";
import hand from "../../assets/Graphic for header (1).png";
const NotFound = () => {
  return (
    <section className=" bg-[#030B0F] lg:h-screen  ">
      <div className="flex flex-col lg:flex-row h-full container w-full mx-auto">
        <div className="w-full h-full flex flex-col justify-center items-center z-20 mt-8 md:mt-5  ">
          <h2 className="text-white font-bold lg:text-[120px] text-[40px] text-gradient text-center">
            404 <br /> Page Not Found
          </h2>
          {/* <p className="text-white lg:text-2xl font-normal lg:mt-[10px] mt-5 text-xl">
        המותג שלך צריך פיתוח בהתאמה אישית ובטכנולוגיות מתקדמות
        כגון:Wordpress, React, Google Analytics
      </p> */}
          <div className="flex gap-7 mt-[30px]">
            <Link to="/">
              <button className="bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-xl p-[1px]   ">
                <span className="flex w-full bg-[#030B0F] text-white rounded-xl py-[10px] px-[14px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  חוזר לעמוד בית
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={hand}
            alt=""
            className="lg:h-full lg:object-center object-cover overflow-visible w-full h-[300px] md:h-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
