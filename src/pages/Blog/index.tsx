import { Link } from "react-router-dom"


const Blog = () => {
  return (
    <div className="flex flex-col items-end max-w-screen-2xl h-full mx-auto mt-4 p-2">
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
    </div>
  )
}

export default Blog