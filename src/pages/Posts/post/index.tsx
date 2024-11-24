import  { useState, useEffect, FormEvent } from 'react';
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { format, parseISO } from "date-fns";
import { Card, CardContent } from "../../../components/ui/card";
import { toast } from "react-toastify";
import { getPostById } from '../../../api/PostsApi';
import { CreateLead } from '../../../api/LeadApi';

const EnhancedPost = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  


  // Scroll to top logic
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  const {data, isLoading} = useQuery({
    queryKey: ['blog'],
    queryFn: () => getPostById(id!)
  });

   const { mutate } = useMutation({
    mutationFn: CreateLead,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
   
     toast.success("Message sent successfully! We will be in touch soon.",);
    },
  });

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || phone === "") {
      alert("Fill all the fields");
      return;
    }
    const formData = {
      name,
      email,
      message,
      phone,
    };

    mutate(formData);
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Blog - Dotvizion ${data.title}`}</title>
        <link rel="canonical" href={`https://www.dotvizion.com/posts/${data.title}`} />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8 mt-24">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8 group">
          <img
            src={data.image?.filePath}
            alt={data.title}
            className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {data.title}
            </h1>
            <div className="flex items-center text-white/80 gap-4">
              <span>
                {format(parseISO(data.createdAt), 'dd MMM, yyyy')}
              </span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
            
            {/* Interaction Bar */}
          
          </CardContent>
        </Card>
            </main>

   
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
                className=" lg:w-[40%] bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] text-white font-semibold rounded-[10px] p-[1px] text-center z-0 "
              >
                <span className="flex w-full bg-transparent  text-white rounded-[10px] py-[10px] px-[14px] hover:bg-gradient-to-r from-[#41b1d3] to-[#a30f91] hover: items-center justify-center">
                  שליחת הפרטים
                </span>
              </button>
            </form>
          </div>
        <div className="flex justify-center mt-28">
          <Link
            to="/posts"
          className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-[#6FCFED] hover:bg-[#1cadd9] transition-colors"
          >
            Back to all posts
          </Link>
        </div>
        </div>

        {/* Back to Posts Button */}

      
    </>
  );
};

export default EnhancedPost;