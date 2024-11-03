import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, Clock, Tag } from "lucide-react";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { getAllPosts } from "../../api/PostsApi";

type PostImage = {
  name: string;
  filePath: string;
  type: string;
  size: string;
  _id: string;
};

type PostProps = {
  _id: string;
  title: string;
  content: string;
  summary: string;
  image: PostImage;
  createdAt: string;
  readTime: number;
  terms: string[];
  __v: number;
};

const BlogListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);

  const { data = [] } = useQuery<PostProps[]>({
    queryKey: ["bloging"],
    queryFn: () => getAllPosts(),
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to safely parse terms
  const parseTerms = (term: string): string[] => {
    try {
      const parsed = JSON.parse(term);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [term];
    }
  };

  // Filter posts based on search and terms (categories)
  const filteredPosts = data.filter((post: PostProps) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedCategory === "all") {
      return matchesSearch;
    }

    const postCategories = post.terms.flatMap(parseTerms).map(term => 
      typeof term === 'string' ? term.toLowerCase() : ''
    );

    return matchesSearch && postCategories.includes(selectedCategory.toLowerCase());
  });

  // Extract unique categories from all posts' terms
  const categories = Array.from(
    new Set(
      data.flatMap(post =>
        post.terms.flatMap(parseTerms)
      )
    )
  ).map(term => term.charAt(0).toUpperCase() + term.slice(1));

  // Helper function to safely get the first category
  const getFirstCategory = (terms: string[]): string => {
    if (terms.length === 0) return '';
    const parsed = parseTerms(terms[0]);
    return parsed.length > 0 
      ? parsed[0].charAt(0).toUpperCase() + parsed[0].slice(1)
      : '';
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - Explore Our Latest Articles</title>
        <link rel="canonical" href="https://www.yourblog.com/posts" />
      </Helmet>

      {/* Hero Section with Parallax Effect */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[80vh] bg-[#030B0F] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('your-pattern-url.svg')] opacity-10" />

        <div className="container mx-auto h-full flex items-center justify-between px-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              Explore Our Latest Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover stories, thinking, and expertise from writers on any topic.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
            </div>
          </motion.div>

          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            src="https://res.cloudinary.com/landingpage2/image/upload/v1727721279/laptop-with-colorful-paint-explosion_d9yzbx.png"
            alt="Hero illustration"
            className="hidden lg:block w-2/3 object-cover"
          />
        </div>
      </motion.section>

      {/* Category Filter */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl text-gray-600">No posts found</h3>
              <p className="text-gray-400 mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPosts.map((post: PostProps, index: number) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/posts/${post._id}`}>
                    <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={post.image.filePath}
                          alt={post.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                        {post.terms.length > 0 && (
                          <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                            {getFirstCategory(post.terms)}
                          </span>
                        )}
                      </div>

                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 line-clamp-3">
                          {post.summary}
                        </p>
                      </CardContent>

                      <CardFooter className="px-6 py-4 border-t flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} min read</span>
                          </div>
                          {post.terms.length > 0 && (
                            <div className="flex items-center gap-1">
                              <Tag className="w-4 h-4" />
                              <span>{getFirstCategory(post.terms)}</span>
                            </div>
                          )}
                        </div>
                        <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogListing;