import { FiCode, FiDatabase, FiCpu } from "react-icons/fi";
import { FaPhp, FaLaravel, FaVuejs, FaReact, FaBootstrap, FaFigma, FaPython, FaGithub, FaJava } from "react-icons/fa";
import { SiC, SiJquery, SiJavascript, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";

export default function Skills() {
    return (
        // <section id="skills" className="bg-gray-900 min-h-screen p-8 mb-5 scroll-mt-30" data-aos="fade-up">
        <section id="skills" className="bg-gray-900 min-h-screen p-8 mb-5 scroll-mt-8">
            <div className="container mx-auto p-4">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-200 mb-4 border-b-2 border-blue-300 pb-2 inline-block">
                        Skills
                    </h2>
                    <p className="text-center md:text-lg mb-4 mt-5 text-blue-100">
                        Combines technical expertise with strong organizational and leadership skills. Experienced in web development, database management, IT operations, and team coordination, ensuring projects are delivered on time while maintaining high standards of quality.
                    </p>
                </div>
            </div>

            {/* Card */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <SiC className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">C</h3>
                    <p className="text-sm text-blue-100 mt-1">Foundational programming language.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <SiHtml5 className="text-4xl text-blue-300 mb-1" />
                    <SiCss3 className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">HTML & CSS</h3>
                    <p className="text-sm text-blue-100 mt-1">Building clean and functional websites.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <SiJavascript className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">JavaScript</h3>
                    <p className="text-sm text-blue-100 mt-1">Interactive and dynamic web features.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <FaPhp className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">PHP</h3>
                    <p className="text-sm text-blue-100 mt-1">Server-side scripting for web apps.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <SiMysql className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">SQL</h3>
                    <p className="text-sm text-blue-100 mt-1">Managing and querying databases.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <FaLaravel className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Laravel</h3>
                    <p className="text-sm text-blue-100 mt-1">PHP framework for modern apps.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <FaVuejs className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Vue.js</h3>
                    <p className="text-sm text-blue-100 mt-1">Progressive JavaScript framework.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <FaReact className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">React.js</h3>
                    <p className="text-sm text-blue-100 mt-1">Building fast UI components.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <FaBootstrap className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Bootstrap</h3>
                    <p className="text-sm text-blue-100 mt-1">Responsive CSS framework.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 
             p-8 h-48" data-aos="zoom-in">
                    <SiJquery className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">jQuery</h3>
                    <p className="text-sm text-blue-100 mt-1">Simplifying JavaScript tasks.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 
             p-8 h-48" data-aos="zoom-in">
                    <FaPython className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Python</h3>
                    <p className="text-sm text-blue-100 mt-1">General-purpose programming.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 
             p-8 h-48" data-aos="zoom-in">
                    <FaJava className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Java</h3>
                    <p className="text-sm text-blue-100 mt-1">Object-oriented programming language.</p>
                </div>


                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 
             p-8 h-48" data-aos="zoom-in">
                    <FaFigma className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">Figma</h3>
                    <p className="text-sm text-blue-100 mt-1">Designing UI/UX prototypes.</p>
                </div>

                <div className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-8 h-48" data-aos="zoom-in">
                    <FaGithub className="text-4xl text-blue-300 mb-2" />
                    <h3 className="text-lg font-semibold text-blue-200">GitHub</h3>
                    <p className="text-sm text-blue-100 mt-1">Version control and collaboration platform.</p>
                </div>
            </div>


        </section>
    )
}

