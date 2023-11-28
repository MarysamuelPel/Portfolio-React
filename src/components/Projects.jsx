import React from "react";
import Todoapp from "../assests/Todoapp.png";
import expensyy from "../assests/expensyy.png";
import newswebsite from "../assests/newswebsite.png";
import bghotel from "../assests/bg-hotel.png";
import registrationform from "../assests/registrationform.png";
import portfoliowebsite from "../assests/portfoliowebsite.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: expensyy,
    },
    {
      id: 2,
      src: newswebsite,
    },
    {
      id: 3,
      src: portfoliowebsite,
    },
    {
      id: 4,
      src: bghotel,
    },
    {
      id: 5,
      src: Todoapp,
    },
    {
      id: 6,
      src: registrationform,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline
        border-b-4 border-gray-500"
          >
            My Projects
          </p>
          <p className="py-6">Have a look at my previous projects</p>
        </div>
          
          

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
      px-12 sm:px-0"
        >
          {
            portfolios.map (({id, src}) =>(
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
  
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  View
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Github
                </button>
              </div>
            </div>
            ))
          }


        </div>
      </div>
    </div>
  );
};

export default Projects;
