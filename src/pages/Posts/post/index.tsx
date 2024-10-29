
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../../api/PostsApi";
import { Helmet } from "react-helmet-async";
import { format, parseISO } from "date-fns";
import { FormEvent, useState } from "react";
import { CreateLead } from "../../../api/LeadApi";
import { toast } from "react-toastify";

const Post = () => {
  function createMarkup(data: string) {
    return {
      __html: data,
    };
  }
  const { id } = useParams();
  const postId =id!

  const {data, isLoading} = useQuery({
    queryKey:['blog'],
    queryFn:()=>getPostById(postId)
  })

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
  }

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
        <link rel="canonical" href={`https://www.differeacting.com/posts/${data.title}`} />
      </Helmet>
    <section className="lg:pt-5   h-fullrelative py-16 lg:py-4 mt-[96px]  ">
      <img
        src={data.image?.filePath}
        alt="post image"
        className="h-[450px] p-7 object-contain  w-full"
        />
  

      <div className="container flex flex-col items-start justify-center ">
        <h1 className="text-black text-5xl py-9">
          {data.title}
        </h1>
        <div
          className="text-lg leading-10  text-center text-black flex flex-col items-start justify-center"
          dangerouslySetInnerHTML={createMarkup(data?.content)} 
          ></div>

        <span className="text-xl py-4 text-[]">Created: {format(parseISO(data.createdAt),'yyyy-MM-dd HH:mm' )}</span>
        <Link to="/posts" className="p-0 m-0 my-7">
          <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px] text-white font-semibold rounded-xl p-[1px] ">
            <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] md:px-[14px] px-[4px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
              חזרה לעמוד פוסטים
            </span>
          </button>
        </Link>
      </div>
     
    </section>
    <section>
    <div className="bg-[#E7E7E7] lg:py-[100px] lg:px-[150px] py-7 px-3">
    <div className="container ">
      <h2 className="text-center pb-10 text-3xl">אם אהבתם את התוכן, צרו קשר איתנו</h2>

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
            </div>
    </section>
          </>
  );
};

export default Post;
