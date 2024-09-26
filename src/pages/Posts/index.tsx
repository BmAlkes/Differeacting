import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Link } from "react-router-dom";
import WhatsApp from "../../components/whatsappscroll";

const Posts = () => {
  const [document] = useAllPrismicDocumentsByType("blog");
  console.log(document);
  return (
    <>
      <section className="lg:pt-5   h-full bg-[#030B0F] relative py-16 lg:py-0  lg:mt-0 ">
        <img
          src="https://res.cloudinary.com/landingpage2/image/upload/v1712766602/social2_jytfzf.jpg"
          alt=" services banner"
          className="h-[350px] object-cover md:h-auto lg:h-[700px] w-full"
        />
        <h1 className="lg:text-6xl text-white w-full md:text-4xl text-xl font-semibold text-center py-10 ">
          מגזין שלנו
        </h1>
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
