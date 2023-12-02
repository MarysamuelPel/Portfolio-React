import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Todoapp from "../assests/Todoapp.png";
import expensyy from "../assests/expensyy.png";
import newswebsite from "../assests/newswebsite.png";
import bghotel from "../assests/bg-hotel.png";
import registrationform from "../assests/registrationform.png";
import portfoliowebsite from "../assests/portfoliowebsite.png";

const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const portfolios = [
    {
      id: 1,
      src: expensyy,
      viewLink: "https://expensyy.vercel.app",
      githubLink: "https://github.com/MarysamuelPel/Expensyy.git",
    },
    {
      id: 2,
      src: newswebsite,
      viewLink: "https://newsgrid-pi.vercel.app",
      githubLink: "https://github.com/MarysamuelPel/newsgrid.git",
    },
    {
      id: 3,
      src: portfoliowebsite,
      viewLink: "https://myportfoliowebsite-steel.vercel.app",
      githubLink: "https://github.com/MarysamuelPel/Mary-samuelport.git",
    },
    {
      id: 4,
      src: bghotel,
      viewLink: "https://bg-hotel.vercel.app",
      githubLink: "https://github.com/MarysamuelPel/bg-hotel.git",
    },
    {
      id: 5,
      src: Todoapp,
      viewLink: "https://todo-app-pied-six.vercel.app",
      githubLink: "https://github.com/MarysamuelPel/TodoApp.git",
    },
    {
      id: 6,
      src: registrationform,
      viewLink: "https://form-zeta-ecru.vercel.app",
      githubLink: "https://github.com/MarysamuelPel/form.git",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            My Projects
          </p>
          <p
            className="py-6"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Have a look at my previous projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, viewLink, githubLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
              />

              <div className="flex items-center justify-center">
                <a
                  href={viewLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  View
                </a>
                <a
                  href={githubLink}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
