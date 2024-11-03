import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../api/PostsApi";
import CardPost from "../../components/cardPosts";
import { useGlobalSearchStore } from "../../store/store";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";


interface Post {
  _id: string;
  title: string;
  content: string;
  summary: string;
  image: {
    name: string;
    filePath: string;
    type: string;
    size: string;
  };
  readTime: number;
  terms: string[];
  createdAt: string;
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const LoadingSpinner = () => (
  <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
    <div className="w-28 h-28 border-8 text-purple-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-purple-400 rounded-full">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className="animate-ping"
      >
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    </div>
  </div>
);

const EmptyState = () => (
  <div className="text-center py-12">
    <div className="text-gray-400 text-lg">No posts found</div>
    <Link
      to="/dashboard/blog/newPost"
      className="inline-block mt-4 text-purple-500 hover:text-purple-600"
    >
      Create your first post
    </Link>
  </div>
);

const Blog = () => {
  const { value: searchTerm } = useGlobalSearchStore();

  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: getAllPosts,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
console.log(posts)
  const filteredPosts = posts.filter((post) => {
    const searchValue = searchTerm.toLowerCase();
    return searchValue === "" 
      ? true 
      : post.title.toLowerCase().includes(searchValue) || 
        post.summary.toLowerCase().includes(searchValue);
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Blog Posts
            </h1>
            <p className="text-gray-600 mt-2">
              Manage and organize your content
            </p>
          </div>
          <Link
            to="/dashboard/blog/newPost"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <BiPlus className="text-xl" />
            New Post
          </Link>
        </div>

       

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div 
            className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post._id}
                variants={itemVariants}
                layout
                transition={{ duration: 0.3 }}
              >
                <CardPost data={post} index={index} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default Blog;