import { Link, useParams } from "react-router-dom"
import { getPostById } from "../../../api/PostsApi"
import { useQuery } from "@tanstack/react-query"


const ShowDetailsPost = () => {
    function createMarkup(data: string) {
        return {
          __html: data,
        };
      }
    const params = useParams()
    const postId = params.id!

    const {data, isLoading} = useQuery({
        queryKey:['post'],
        queryFn:()=>getPostById(postId)
      })
   

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
    <section  className=" px-5 py-10 m-4  bg-gray-100 shadow-2xl">
        <Link to='/dashboard/blog' className="bg-purple-400 hover:bg-purple-500 text-white px-10 py-3  font-bold cursor-pointer transition-colors rounded-md"> Back to blog</Link>
        {data.image  && <img src={data?.image?.filePath} alt={data?.image?.name} className="w-full h-[400px] object-cover mt-9"/>}
         
        <div className="w-full h-full min-h-[900px] flex justify-center items-center flex-col">
            <h2 className="text-4xl py-8 text-[#6ecfef]">{data?.title}</h2>
            <p><span className="text-sm font-bold">Summary: </span>{data?.summary}</p>
            <p dangerouslySetInnerHTML={createMarkup(data?.content)} className="w-full min-h-52 tracking-tight leading-10 text-left"></p>
        </div>

    </section>
  )
}

export default ShowDetailsPost