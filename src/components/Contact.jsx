import React from 'react'
import { FiMail, FiArrowUp } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
    return (
        // <section id="contact" className="min-h-screen bg-gray-800 text-blue-100 scroll-mt-20" data-aos="fade-up">
        <section id="contact" className="bg-gray-900 min-h-screen p-8 scroll-mt-8">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-blue-200 mb-4 border-b-2 border-blue-300 pb-2 inline-block">
                    Contact Me
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto">
                    Let’s connect! I’m always open to new opportunities, collaborations, or just a friendly chat. <br />
                    Feel free to reach out through the form below or via my email/social links, and I’ll get back to you as soon as possible.
                </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
                {/* Email */}
                <a
                    href="mailto:vyone.louis@binus.ac.id"
                    className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
               transform transition-all duration-500 ease-in-out 
               hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
               hover:shadow-xl p-8"
                    data-aos="zoom-in"
                >
                    <FiMail className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Email</h3>
                    <p className="text-sm text-blue-100 mt-1">Get in touch via email.</p>
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/vyonelouis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
               transform transition-all duration-500 ease-in-out 
               hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
               hover:shadow-xl p-8"
                    data-aos="zoom-in"
                >
                    <FaLinkedin className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">LinkedIn</h3>
                    <p className="text-sm text-blue-100 mt-1">Connect with me on LinkedIn.</p>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/Vyone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
               transform transition-all duration-500 ease-in-out 
               hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
               hover:shadow-xl p-8"
                    data-aos="zoom-in"
                >
                    <FaGithub className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">GitHub</h3>
                    <p className="text-sm text-blue-100 mt-1">Check out my projects on GitHub.</p>
                </a>
            </div>

            {/* Arrow Button */}
            <div className="flex justify-center mt-2 md:mt-50">
                <a
                    href="#home"
                    className="animate-bounce p-3 rounded-full  text-white  transition"
                >
                    <FiArrowUp className="w-6 h-6" />
                </a>
            </div>


        </section>
    )
}
