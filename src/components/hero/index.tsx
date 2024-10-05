import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [direction, setDirection] = useState(document.body.dir);
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      if (mutationsList.some((mutation) => mutation.attributeName === "dir")) {
        setDirection(document.body.dir);
      }
    });
    observer.observe(document.body, {
      attributes: true,
    });
    return () => observer.disconnect();
  }, []);

  console.log(direction);

  return (
    <section className=" bg-[#030B0F] md:h-screen h:full  mt-[96px]">
      <div className="flex flex-col lg:flex-row lg:gap-30  h-full container w-full mx-auto">
        <div
          className="w-full h-full  flex flex-col justify-center max-w-[800px] z-50 mt-8 md:mt-5 "
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="text-white font-bold lg:text-[80px] text-[35px] max-w-56">
         Differeacting 
          </h1>
          <h2 className="text-[#6FCFED] lg:text-2xl text-lg">
             הופכים חלומות ליצירה באינטרנט
          </h2>


        
          <div className="flex gap-7 mt-[30px]">
            <Link to="/projects" className="p-0 m-0">
              <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px] text-white font-semibold rounded-xl p-[1px] ">
                <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] md:px-[14px] px-[20px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  פרויקטים
                </span>
              </button>
            </Link>
            <Link to="/about">
              <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px] text-white font-semibold rounded-xl p-[1px] ">
                <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] px-[30px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
                  אודות
                </span>
              </button>
            </Link>
          </div>
        </div>

        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1728146674/creative-light-bulb_zxukub.png"
          alt="background hero"
          className="lg:h-full  object-cover  md:max-w-[600px] mx-auto  overflow-visible  h-[600px] md:h-[900px] "
          data-tilt
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
        />
      </div>
    </section>
  );
};

export default Hero;
