import React from 'react';
import Navbar from './Navbar';
import profilePic from '../assets/profilee.jpeg';
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="min-h-screen bg-gray-900 text-white mt-10 md:scroll-mt-10 flex items-center"
        data-aos="fade-up"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">

          {/* Left Column */}
          <div className="order-2 md:order-1 flex-1 flex flex-col justify-center space-y-6 md:pr-8 p-4">
            <h1 className="text-4xl sm:text-5xl text-center md:text-6xl md:text-left lg:text-7xl text-blue-200 font-bold">Hello, I'm Vyone Louis</h1>
            <p className="text-base sm:text-lg text-center md:text-left text-blue-100">
              Computer Science student at BINUS University Alam Sutera, specializing in Software Engineering. Experienced in student organizations through IT division roles, supporting technical operations. Passionate about learning, exploring new technologies, and applying knowledge in both academic and organizational settings.
            </p>

            <a
              href="/CV-VyoneLouis.pdf"
              download="CV-VyoneLouis.pdf"
              className="text-xs bg-blue-900/40 hover:bg-blue-900/70 px-3 py-1 rounded-full text-blue-100 border border-blue-700 w-40 h-10 mx-auto md:mx-0 flex items-center justify-center gap-2"
              // className="bg-blue-200 hover:bg-blue-300 text-gray-900 font-semibold py-2 px-4 rounded-full 
              //           transition duration-300 transform hover:scale-105 
              //           flex items-center justify-center gap-2 text-sm w-40 h-10 mx-auto md:mx-0"
            >
              <FiDownload className="w-4 h-4" />
              Download CV
            </a>

            <div className="justify-center md:justify-start flex gap-6 text-gray-400 text-3xl mt-6">
              <a href="mailto:vyone.louis@binus.ac.id"><FiMail /></a>
              <a href="https://linkedin.com/in/vyonelouis"><FaLinkedin /></a>
              <a href="https://github.com/Vyone"><FaGithub /></a>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 md:order-2 flex-1 flex justify-start md:justify-center items-center mt-10 md:mt-0 md:pl-10">
            <img
              src={profilePic}
              alt="Profile"
              className="w-50 h-50 md:w-100 md:h-100 rounded-full object-cover border-3 border-blue-100"
            />
          </div>
        </div>

         {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
          <a
            href="#about"
            className="inline-block animate-bounce text-blue-100 text-3xl"
          >
            <FiArrowDown />
          </a>
        </div> */}

      </section>
    </>
  );
}
