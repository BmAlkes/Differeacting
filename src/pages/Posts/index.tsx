import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Link } from "react-router-dom";
import WhatsApp from "../../components/whatsappscroll";
import { Helmet } from "react-helmet-async";

const Posts = () => {
  const [document] = useAllPrismicDocumentsByType("blog");
  console.log(document);
  return (
    <>
       <Helmet>
        <title>Differeacting - magazine</title>
        <link rel="canonical" href="https://www.differeacting.com/posts" />
      </Helmet>
     <section className=" bg-[#030B0F] md:h-screen h:full  mt-[96px]">
        <div className="flex flex-col md:flex-row lg:gap-30  h-full md:h-[900px] container w-full mx-auto">
          <div className="w-full h-full  flex flex-col justify-center max-w-[800px] z-50 mt-8 md:mt-5 ">
            <h1 className="text-[#f4f4f4] lg:text-[102px] md:text-5xl text-3xl  text-right font-bold z-10 [text-shadow:_0_10px_0_rgb(0_0_0_/_90%)]">
             מגזין  Differeacting
            </h1>
           

            <div className="flex gap-7 mt-[30px]"></div>
          </div>
       
            <img
              src={
               "https://res.cloudinary.com/landingpage2/image/upload/v1727721279/laptop-with-colorful-paint-explosion_d9yzbx.png"
              }
              alt="background hero"
              className="max-w-[700px] md:max-w-[400px] object-cover   overflow-visible  "
              data-tilt
            />
  
        </div>
      </section>
      <section className="lg:pt-5   h-full bg-[#030B0F] relative py-16 lg:py-0  lg:mt-0 ">
        <div className="flex flex-wrap justify-center container gap-5 ">
          {document?.length === 0 && (
            <h3 className="text-white text-center py-11 text-xl">
              אין תוכן כרגע
            </h3>
          )}
          {document?.map((post) => (
            <Link to={`/posts/${post.id}`}>
              <div className="card" key={post.id}>
                <div className="card__content flex flex-col   items-center justify-between overflow-hidden text-ellipsis ">
                  <img
                    src={post.data.cover.url}
                    alt=""
                    className="w-[400px] h-[200px] object-cover rounded-lg"
                  />
                  <h2 className="text-white py-4 text-xl text-center">
                    {post.data.title.map((value: any) => value.text)}
                  </h2>
                  <p className="text-white px-2 text-justify line-clamp-5">
                    {post.data.description.map((value: any) => value.text)}
                  </p>
                  <Link to={`/posts/${post.id}`}>
                    <button className="button px-6 py-3 mb-4 ">תרא עוד</button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <WhatsApp />
    </>
  );
};

export default Posts;
