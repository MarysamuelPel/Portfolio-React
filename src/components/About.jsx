import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            About
          </p>
        </div>
        <p
          className="text-xl mt-20"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Samuel Mary is a skilled Frontend Developer with expertise in HTML,
          CSS, JavaScript, Tailwind CSS, and React.js. With a passion for
          crafting seamless user experiences, Samuel brings creativity and
          precision to web development projects. Proficient in version control
          with Git and GitHub, she ensures efficient collaboration and code
          management.
        </p>

        <br />

        <p
          className="text-xl"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          Samuel thrives in the dynamic world of technology, constantly learning
          and adapting to emerging trends. Her commitment to clean and
          responsive design, coupled with a strong grasp of modern development
          tools, makes her a valuable asset in creating visually appealing and
          highly functional websites. Samuel Mary is dedicated to delivering
          cutting-edge solutions that elevate the digital landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
