import { IoArrowBack } from "react-icons/io5";
import vetor from "../../assets/svg/Vector 18.svg";
import { Link } from "react-router-dom";
import { SafariDemo } from "../safariDemo";

const Projects = () => {
  return (
    <section className="w-full h-full pt-16 bg-[#030B0F]  text-[#D1D1D1] flex flex-col justify-center relative ">
      <img src={vetor} alt="" className="absolute left-0 top-[-300px]" />
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-5 justify-between items-center container px-11">
          <div>
            <h2 className="md:text-6xl text-3xl text-center lg:text-right font-bold max-w-[647px] pt-11">
              כמה מהעבודות הטובות ביותר שלנו
            </h2>
          </div>
          <Link
            to="/projects"
            className="border rounded-full w-56 h-56 flex items-center justify-center buttongo z-50"
          >
            <span className="hidden text-lg text-center w-full text-[#111111]">
              לצפייה בשאר הפרויקטים
            </span>
            <IoArrowBack size={40} />
          </Link>
        </div>
        <div className="flex flex-col  items-center mt-10 mb-11  ">
          <div className="flex flex-col flex-wrap lg:flex-row justify-between items-center gap-6 z-50">
            <div>


              <Link
                to="https://gold-opossum-534584.hostingersite.com/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-easing="linear"
                >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <SafariDemo img={"https://res.cloudinary.com/landingpage2/image/upload/v1727969708/Screenshot_6_nsjxxb_1_wg8bdh.png"} url={'www.hairport.co.il'}/>
                    
                  <h3 className="text-2xl font-normal mt-2">HairPort</h3>
                  <p className="text-base font-light">אתר חנות לחברה קוסמטיק</p>
                </div>
              </Link>
              <Link
                to="https://skylum.co.il/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <SafariDemo img={"https://res.cloudinary.com/landingpage2/image/upload/v1727969147/skylum_te3duo_1_ezzs5i.png"} url={"https://skylum.co.il/"}/>
                  <h3 className="text-2xl font-normal mt-2">SkyLum</h3>
                  <p className="text-base font-light">אתר חברה</p>
                </div>
              </Link>
          
             
            </div>
            <div>
            <Link
                to="https://maithaitravelandtour.com/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="4000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <SafariDemo url={"https://maithaitravelandtour.com/"} img={"https://res.cloudinary.com/landingpage2/image/upload/v1728813860/cd333395-f5f3-4f2e-8f06-72ac519fd687_ntviz9.jpg"}/>
                  
                  <h3 className="text-2xl font-normal mt-2">
                    Mai Thai travel agency
                  </h3>
                  <p className="text-base font-light">
                    אתר לסוכנות נסיעות לטיולים בתאילנד
                  </p>
                </div>
              </Link>
            
              <Link
                to="https://webcar-umber.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <SafariDemo url="https://webcar-umber.vercel.app/" img={"https://res.cloudinary.com/landingpage2/image/upload/v1710178141/Image_1_lnemkd.png"}/>
                  
                  <h3 className="text-2xl font-normal mt-2">Web Car</h3>
                  <p className="text-base font-light">
                    פלטפורמה למכירת מכוניות ופרסום
                  </p>
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="https://ecommerce-xhdu.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <SafariDemo img={"https://res.cloudinary.com/landingpage2/image/upload/v1727969822/Screenshot_27_a6sppc_1_gshqfs.png"} url={"https://ecommerce-xhdu.vercel.app/"}/>
                  
                  <h3 className="text-2xl font-normal mt-2">Eccomerce </h3>
                  <p className="text-base font-light">אתר סחר</p>
                </div>
              </Link>

              <Link
                to="https://safe-garden.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="4000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <SafariDemo url={"https://safe-garden.vercel.app/"} img="https://res.cloudinary.com/landingpage2/image/upload/v1710148822/safe_qmcsgn.png"/>
                  <h3 className="text-2xl font-normal mt-2">Safe Garden</h3>
                  <p className="text-base font-light">
                    פלטפורמה לניהול גן ילדים פרטי
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link
                to="https://wesense.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <SafariDemo url={"https://wesense.vercel.app/"} img="https://res.cloudinary.com/landingpage2/image/upload/v1719987411/Screenshot_47_kaioqi.png"/>
                  <h3 className="text-2xl font-normal mt-2">Wesense </h3>
                  <p className="text-base font-light">מיזם לסטארט אפ</p>
                </div>
              </Link>
              <Link
                to="https://new-club-clothes.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px]  w-[340px] ">
                  <SafariDemo url={"https://new-club-clothes.vercel.app/"} img={"https://res.cloudinary.com/landingpage2/image/upload/v1727969288/Screenshot_23_deonbw_1_jhf7jt.png"}/>
                  <h3 className="text-2xl font-normal mt-2">Club Clothers</h3>
                  <p className="text-base font-light">אתר סחר</p>
                </div>
              </Link>


             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
