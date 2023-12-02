import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import tailwind from "../assests/tailwind.png";
import github from "../assests/github.png";
import reactImage from "../assests/react.png";

const Experience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "REACT",
      style: "shadow-sky-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND CSS",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: github,
      title: "GIT/ GITHUB",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4 p-2 inline "
            data-aos="fade-up" 
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Experience
          </p>
          <p
            className="py-6"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Technologies I work with at the moment
          </p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}"}
              data-aos="fade-up" 
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;