import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImage from "../assests/Mary_Picture.jpg";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div
          className="flex flex-col justify-center h-full"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="3000"
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have experience in building web applications using technologies
            like HTML, CSS, Javascript, Tailwind CSS, and React
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={300}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-amber-50 to-blue-500 font-bold cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-400">
                <MdArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="2000">
          <img
            src={HeroImage}
            alt="marygraphs"
            className="rounded-2xl mx-auto w-2/3 md:w-4/5 lg:w-4/5 xl:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
