import { useEffect, useState } from "react";
import { projectsData } from "./data";
import { projectsNav } from "./data";

import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  category: string;
}

const OpenCards = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState<CardProps[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    active;
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e: any, index: number) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <section className="lg:py-9 border-b pb-5 container">
      <div className=" px-4 flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-3xl text-xl font-semibold text-center lg:text-right text-white">
        בדוק את העבודות האחרונות שלנו.
        </h2>
        
      </div>
      <div className="mt-12 flex flex-col justify-center  items-center gap-5 text-white container">
        <div className="flex lg:gap-4 gap-[6px] flex-wrap justify-center items-center">
          {projectsNav.map((item, index) => {
            return (
              <button
                className="relative min-w-48 py-2 px-8 text-black text-base  font-bold  overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-indigo-600 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                onClick={(e) => {
                  handleClick(e, index);
                }}
                key={index}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div className=" project__container grid">
          {projects.map((item) => (
            <Link to={item.link} target="_blank">
              <div className="relative grid lg:h-[40rem] h-[25rem] w-full lg:max-w-[26rem] md:min-w-[20rem] max-w-[18rem]  flex-col  items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center text-gray-700 ">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <span className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z-30"></span>
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                />
                <div className="my-4 z-20 p-4">
                  <h2 className="text-white text-2xl font-bold pb-2">
                    {item.title}
                  </h2>
                  <p className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)] py-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenCards;
