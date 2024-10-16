import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../api/PostsApi";
import CardPost from "../../components/cardPosts";

const Blog = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });

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

  if (data) return (
      <div className="flex flex-col  max-w-screen-2xl h-full mx-auto mt-4 p-4">
        <h1 className="text-5xl font-black">Blog</h1>
        <p className="text-2xl text-gray-500 mt-5">
          Create and edit all the blog posts
        </p>
        <nav className="my-5">
          <Link
            className="bg-purple-400 hover:bg-purple-500 text-white px-10 py-3 font-bold cursor-pointer transition-colors rounded-md"
            to="/dashboard/blog/newPost"
          >
            New Post
          </Link>
        </nav>

        <div className="mt-6 grid  lg:grid-cols-5  grid-cols md:grid-cols-2 mx-auto gap-4">
        
           { data?.map((data: any, index: number) => (
              <CardPost data={data} index={index} />
          
            ))}
        </div>
      </div>
    );
};

export default Blog;
