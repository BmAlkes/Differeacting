
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../../api/PostsApi";
import { Helmet } from "react-helmet-async";

const Post = () => {
  function createMarkup(data: string) {
    return {
      __html: data,
    };
  }
  const { id } = useParams();
  const postId =id!

  const {data, isLoading} = useQuery({
    queryKey:['post'],
    queryFn:()=>getPostById(postId)
  })
// 

  if (isLoading)
    return (
      <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
        <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            className="animate-ping"
          >
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
          </svg>
        </div>
      </div>
    );
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>
          {`Differeacting - ${data.title}` }
        </title>
        <link rel="canonical" href={`https://www.differeacting.com/posts/${data._id}`} />
      </Helmet>
    <section className="lg:pt-5   h-full bg-[#030B0F] relative py-16 lg:py-0 mt-[96px] lg:mt-0 ">
      <img
        src={data.image?.filePath}
        alt="post image"
        className="h-[350px] object-cover md:h-auto lg:h-[700px] w-full"
        />
  

      <div className="container flex flex-col items-center justify-center ">
        <h2 className="text-white text-5xl py-9">
          {data.title}
        </h2>
        <div
          className="text-white text-lg leading-10  text-center"
          dangerouslySetInnerHTML={createMarkup(data?.content)}
          ></div>

        <span>{data.createdAt}</span>
        <Link to="/posts" className="p-0 m-0 mt-7">
          <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px] text-white font-semibold rounded-xl p-[1px] ">
            <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] md:px-[14px] px-[4px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
              חזרה לעמוד פוסטים
            </span>
          </button>
        </Link>
      </div>
     
    </section>
          </>
  );
};

export default Post;
