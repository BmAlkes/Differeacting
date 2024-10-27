import { Link } from "react-router-dom";
import WhatsApp from "../../components/whatsappscroll";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../api/PostsApi";

type PostProps = {
  _id: string;
  title: string;
  image: {
    name: string;
    filePath: string;
  };
  content: string;
  createdAt: string;
};

const Posts = () => {
function createMarkup(data: string) {
    return {
      __html: data,
    };
  }

  const { data } = useQuery({
    queryKey: ["bloging"],
    queryFn: () => getAllPosts(),
  });
 

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Differeacting - Posts - סטודיו לבניית אתרים Differeacting: הופכים
          חלומות ליצירה באינטרנט{" "}
        </title>
        <link rel="canonical" href="https://www.differeacting.com/posts" />
      </Helmet>

      <section className=" bg-[#030B0F]  h:full  mt-[96px]">
        <div className="flex flex-col md:flex-row lg:gap-30  h-full md:h-[800px] container w-full mx-auto">
          <div className="w-full h-full  flex flex-col justify-center max-w-[800px] z-50 mt-8 md:mt-5 ">
            <h1 className="text-[#f4f4f4] lg:text-[102px] md:text-5xl text-3xl  text-right font-bold z-10 [text-shadow:_0_10px_0_rgb(0_0_0_/_90%)]">
              מגזין Differeacting
            </h1>

            <div className="flex gap-7 mt-[30px]"></div>
          </div>

          <img
            src={
              "https://res.cloudinary.com/landingpage2/image/upload/v1727721279/laptop-with-colorful-paint-explosion_d9yzbx.png"
            }
            alt="background hero"
            className="w-[300px] md:h-[600px] h-96 object-cover   overflow-visible  "
            data-tilt
          />
        </div>
      </section>
      <section className="lg:pt-5   h-full bg-[#030B0F] relative py-16 lg:py-16 ">
        <div className="flex flex-wrap justify-center container gap-5 ">
          {data?.length === 0 && (
            <h3 className="text-white text-center py-11 text-xl">
              אין תוכן כרגע
            </h3>
          )}
          {data?.map((post: PostProps) => (
            <Link to={`/posts/${post._id}`}>
              <div className="card" key={post._id}>
                <div className="card__content flex p-4 flex-col   items-center justify-between overflow-hidden text-ellipsis ">
                  <img
                    src={post.image?.filePath}
                    alt={post.image?.name}
                    className="w-[400px] h-[130px] object-contain rounded-lg"
                  />
                  <h2 className="text-black py-4 text-xl text-center">
                    {post.title}
                  </h2>
                  <p className="text-black px-2 text-justify line-clamp-5" dangerouslySetInnerHTML={createMarkup(data?.content)}>
                
                  </p>
                  <Link to={`/posts/${post._id}`}>
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
