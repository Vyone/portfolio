import React from 'react'
import { FiCode, FiUsers, FiArrowDown } from 'react-icons/fi';
import { FaProjectDiagram, FaDatabase, FaCalendarCheck, FaLightbulb } from 'react-icons/fa';


export default function About() {
    return (
        //  <section id="about" className="min-h-screen bg-gray-800 text-blue-100 scroll-mt-30" data-aos="fade-up">
        <section id="about" className="min-h-screen bg-gray-900 text-blue-100 p-8 mb-5 scroll-mt-8 flex flex-col justify-between">
            <div className="container mx-auto p-4">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-200 mb-4 border-b-2 border-blue-300 pb-2 inline-block">
                        About Me
                    </h2>
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-6 md:pr-8 p-4 "></div>
                <p className="text-center md:text-left md:text-lg mb-4 text-blue-100">
                    I am a Computer Science student at BINUS University Alam Sutera, focusing on Software Engineering. I love exploring new technologies and frameworks, improving my skills, and applying them to build useful projects. I also enjoy putting my knowledge into practice through organizational activities, where I continue to learn, collaborate, and grow as a developer.
                </p>
                <p className="text-center md:text-left md:text-lg mb-4 text-blue-100">
                    My experience in these organizations has honed my teamwork and leadership skills, allowing me to effectively collaborate with peers and contribute to successful projects. I am eager to explore new technologies and apply my knowledge in both academic and organizational settings.
                </p>
                <p className="text-center md:text-left md:text-lg text-blue-100">
                    I am committed to personal and professional growth, and I look forward to leveraging my skills and experiences in future endeavors.
                </p>
            </div>

            {/* Card */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-blue-400
             p-8 h-48" data-aos="zoom-in">
                    <FiCode className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Web Development</h3>
                    <p className="text-sm text-blue-100 mt-1">
                        Building clean and functional websites.
                    </p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-blue-400
             p-8 h-48" data-aos="zoom-in">
                    <FaProjectDiagram className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Software Engineering</h3>
                    <p className="text-sm text-blue-100 mt-1">
                        Learning best practices and scalable systems.
                    </p>
                </div>

                {/* <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transition-all duration-150 ease-in-out 
             hover:bg-gray-600 hover:shadow-xl hover:ring-1 hover:ring-blue-400 hover:ring-offset-1 
             p-8 h-48" data-aos="zoom-in">
                    <FaProjectDiagram className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Software Engineering</h3>
                    <p className="text-sm text-blue-100 mt-1">
                        Learning best practices and scalable systems.
                    </p>
                </div> */}

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-blue-400
             p-8 h-48" data-aos="zoom-in">
                    <FaDatabase className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Database Management</h3>
                    <p className="text-sm text-blue-100 mt-1">
                        Designing and managing databases for applications.
                    </p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-blue-400
             p-8 h-48" data-aos="zoom-in">
                    <FaLightbulb className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Problem Solving</h3>
                    <p className="text-sm text-blue-100 mt-1">
                        Analyzing issues and developing effective solutions.
                    </p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-blue-400
             p-8 h-48" data-aos="zoom-in">
                    <FiUsers className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Team Collaboration</h3>
                    <p className="text-sm text-blue-100 mt-1">
                        Working effectively with teams to achieve project goals.
                    </p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-blue-400
             p-8 h-48" data-aos="zoom-in">
                    <FaCalendarCheck className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Project Management</h3>
                    <p className="text-sm text-blue-100 mt-1">
                        Organizing and managing projects to ensure timely delivery.
                    </p>
                </div>
            </div>

             {/* Arrow Button */}
            <div className="flex justify-center mt-10">
                <a 
                  href="#skills" 
                  className="animate-bounce p-3 rounded-full  text-white  transition"
                >
                    <FiArrowDown className="w-6 h-6" />
                </a>
            </div>

        </section>

    )
}
