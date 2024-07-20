import { IoArrowBack } from "react-icons/io5";
import vetor from "../../assets/svg/Vector 18.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="w-full h-full   bg-[#030B0F]  text-[#D1D1D1] flex flex-col justify-center relative ">
      <img src={vetor} alt="" className="absolute left-0 top-[-300px]" />
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-5 justify-between items-center container px-11">
          <div>
            <h2 className="md:text-6xl text-3xl text-center lg:text-right font-bold max-w-[647px] pt-11">
              כמה מהעבודות הטובות ביותר שלנו
            </h2>
            <p className="font-normal text-center lg:text-right text-lg mt-7">
              צפו בכמה מהפרויקטים שלנו
            </p>
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
                to="https://new-club-clothes.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px]  w-[340px] ">
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1708932227/Screenshot_23_deonbw.png"
                    alt="Project we made eccomerce for clother"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Club Clothers</h3>
                  <p className="text-base font-light">אתר סחר</p>
                </div>
              </Link>

              <Link
                to="https://ecommerce-xhdu.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1710178141/Image_1_lnemkd.png"
                    alt="Platform web site for car sales"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Web Car</h3>
                  <p className="text-base font-light">
                    פלטפורמה למכירת מכוניות ופרסום
                  </p>
                </div>
              </Link>
            </div>

            <div>
              <Link
                to="https://webcar-umber.vercel.app/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1708932227/Screenshot_27_a6sppc.png"
                    alt="Project we made about eccomerce"
                    className="w-full rounded h-[342px] object-cover"
                  />
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
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1710148822/safe_qmcsgn.png"
                    alt="Plataform web for managment do kindgarden"
                    className="w-full rounded h-[342px] object-cover"
                  />
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
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1719987411/Screenshot_47_kaioqi.png"
                    alt="Project for startup"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Wesense </h3>
                  <p className="text-base font-light">מיזם לסטארט אפ</p>
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
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1721490072/skylum_te3duo.png"
                    alt="Skylum "
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">SkyLum</h3>
                  <p className="text-base font-light">
                    אתר חברה 
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link
                to=""
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1721490071/Screenshot_6_nsjxxb.png"
                    alt="Eccomerce for a cosmetic store"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">HairPort</h3>
                  <p className="text-base font-light">אתר חנות לחברה קוסמטיק</p>
                </div>
              </Link>

              <Link
                to="https://maithaitravelandtour.com/"
                target="_blank"
                data-aos="fade-down"
                data-aos-duration="4000"
                data-aos-easing="linear"
              >
                <div className="py-3 md:w-[600px] w-[340px]">
                  <img
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1721490071/Screenshot_5_wb0iyk.png"
                    alt="Mai Thai travel agency"
                    className="w-full rounded h-[342px] object-cover"
                  />
                  <h3 className="text-2xl font-normal mt-2">Mai Thai travel agency</h3>
                  <p className="text-base font-light">
                    אתר לסוכנות נסיעות לטיולים בתאילנד
                  </p>
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
