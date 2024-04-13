import { usePrismicDocumentByID } from "@prismicio/react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  const [document] = usePrismicDocumentByID(id!);
  console.log(document);
  return (
    <section className="lg:pt-5   h-full bg-[#030B0F] relative py-16 lg:py-0 mt-[96px] lg:mt-0 ">
      <img
        src={document?.data.cover.url}
        alt="post image"
        className="h-[350px] object-cover md:h-auto lg:h-[700px] w-full"
      />
      <div className="container flex flex-col items-center justify-center ">
        <h2 className="text-white text-5xl py-9">
          {document?.data.title.map((item: any) => item.text)}
        </h2>
        <div
          className="text-white text-lg leading-10  text-center"
          dangerouslySetInnerHTML={{
            __html: document?.data.description.map((item: any) => item.text),
          }}
        ></div>
        <img src={document?.data.img_text.url} alt="" />
        <span>{document?.data.time}</span>
        <Link to="/posts" className="p-0 m-0 mt-7">
          <button className=" button bg-gradient-to-r from-[#6FCFED] to-[#C96CBE] py-[2px] px-[2px] text-white font-semibold rounded-xl p-[1px] ">
            <span className="flex w-full bg-[#030B0F] text-white rounded py-[10px] md:px-[14px] px-[4px] hover:bg-gradient-to-r from-[#6FCFED] to-[#C96CBE]">
              חזרה לעמוד פוסטים
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Post;
