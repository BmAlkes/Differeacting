import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import vetor2 from "../../assets/Frame 1160445221.png";
import logo from "../../assets/testimo.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";


const Reccomend = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || phone === "") {
      alert("Fill all the fields");
      return;
    }
    const templateParams = {
      from_name: name,
      phone: phone,
      message: message,
      email: email,
    };
    console.log(templateParams);
    emailjs
      .send(
        "service_4linpx5",
        "template_ilmbuah",
        templateParams,
        "cWFIwkGX6Ph0Mm988"
      )
      .then((response) => {
        console.log("Email send", response.status, response.text);
        
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
      });
  };
  return (
    <section className=" h-full " id="contact">
      <img src={vetor2} alt="background vetor" className="w-full h-full" />
      <h2 className="md:text-6xl text-3xl  font-bold mt-12 text-center">
        המלצות עלינו
      </h2>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <Dialog>
                    <DialogTrigger>
                      <img
                        alt="testimonial"
                        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 hover:scale-125"
                        src="https://res.cloudinary.com/landingpage2/image/upload/v1710178264/ofir_ev3nqk.jpg"
                      />
                    </DialogTrigger>
                    <DialogContent className=" bg-[#030B0F] text-white">
                      <DialogHeader>
                        <DialogTitle className="py-4">
                          Testimonial video
                        </DialogTitle>
                        <DialogDescription>
                          <iframe
                            src="https://res.cloudinary.com/landingpage2/video/upload/v1709146699/WhatsApp_Video_2024-02-28_at_10.48.22_ehpjc7.mp4"
                            className="w-full h-[300px]"
                          ></iframe>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <p className="leading-relaxed">
                    הכרתי את ברונו בתור סטודנט שלי, כבר מההתחלה עפתי עליו, הוא
                    הביא עיצובים מרשימים במהירות שיא והתפתח מאוד מאז. ראיתי את
                    כל העבודות שלו ואהבתי כל אחת, הוא יושב עם הלקוח להבין מה
                    הלקוח צריך ומשם הוא לוקח את זה למקומות מרשימים. ברונו -
                    חרוץ, מקשיב, מגלה הבנה ואמפתיה - מומלץ בחום
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Ofir Zeitoun
                  </h2>
                  <p className="text-gray-500">Software Mentor & Freelance</p>
                </div>
              </div>

              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 hover:scale-125"
                    src={logo}
                  />
                  <p className="leading-relaxed">
                    עדן עבד אצלנו בתחילת הדרך וכבר אז זיהינו בחור שאפתן עם המון
                    כוח רצון ללמוד ולהתקדם, קונוויזור תמיד תהיה הבית הראשון שלך
                    בצעדייך הראשונים בעולם השיווק הדיגיטלי ואנו גאים על כך,
                    בהצלחה במיזם החדש!
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    אורן טל
                  </h2>
                  <p className="text-gray-500">קונווייזור דיגיטל</p>
                </div>
              </div>

              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial of a client"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 hover:scale-125"
                    src="https://res.cloudinary.com/landingpage2/image/upload/v1710178263/logo_tswkge.png"
                  />
                  <p className="leading-relaxed">
                    ממליצה בחום על ברונו! באתר של SafeGarden חיפשתי מתכנת פרונט
                    שיבין את החזון של האתר ואת הצרכים של המערכת. ברונו עבד בצורה
                    מדויקת ומהירה, שאל את השאלות הנכונות וידע בדיוק מה הצרכים של
                    המערכת. השיתוף פעולה איתו היה קליל ומקצועי והכי חשוב אנושי!
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    Anastacia Tsarfati
                  </h2>
                  <p className="text-gray-500"> Owner of Safegarden </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-[#E7E7E7] lg:py-[140px] lg:px-[150px] py-7 px-3">
          <div className="container ">
            <h3 className="text-3xl lg:text-6xl max-w-[641px] font-bold  mb-2 text-gray-900 pb-10">
              מוכנים להתחיל פרויקט ביחד?
            </h3>
            <p className="text-lg max-w-[302px] mb-9 font-normal ">
              יש לך פרויקט בראש? כולנו אוזניים כשזה זה מגיע לגלות על מטרות העסק
              הדיגיטלי שלך. אנחנו נשמח לשמוע ממך.
            </p>

            <form
              onSubmit={sendEmail}
              className="flex lg:flex-row flex-wrap flex-col  gap-4"
            >
              <input
                type="text"
                placeholder="שם מלא"
                className=" lg:w-[280px] bg-transparent  border-b border-[#B0B0B0] text-base h-12 p-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email@email.com"
                id="footer-field"
                name="footer-field"
                className=" lg:w-[280px] bg-transparent  border-b border-[#B0B0B0] text-base h-12 p-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="טלפון"
                className=" lg:w-[280px] bg-transparent  border-b border-[#B0B0B0] text-base h-12 p-1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <textarea
                className="resize-none lg:w-[50%] bg-transparent  border-b border-[#B0B0B0] text-base h-12 p-1 "
                placeholder="ספרו לנו משהו כל הפרויקט שלכם (אופציונלי)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className=" lg:w-[40%] bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-[10px] p-[1px] text-center "
              
              >
                <span className="flex w-full bg-transparent  text-white rounded-[10px] py-[10px] px-[14px] hover:bg-gradient-to-r from-[#41b1d3] to-[#a30f91] hover: items-center justify-center">
                  שליחת הפרטים
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reccomend;
