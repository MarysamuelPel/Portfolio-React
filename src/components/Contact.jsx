import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div
          className="pb-8"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-6">Get in Touch with Me</p>
        </div>

        <div
          className="flex justify-center items-center"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <form
            action="https://getform.io/f/841c2b5b-c58a-4b1a-9f80-323b2cddf91b"
            method="POST"
            className="flex flex-col w-full md:1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="1000"
            />

            <textarea
              name="message"
              placeholder="Enter your Message"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Message Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
