import { FiCode, FiDatabase, FiCpu } from "react-icons/fi";
import { FaPhp, FaLaravel, FaVuejs, FaReact, FaBootstrap, FaFigma, FaPython, FaGithub, FaJava } from "react-icons/fa";
import { SiC, SiJquery, SiJavascript, SiMysql, SiHtml5, SiCss3 } from "react-icons/si";

export default function Skills() {
    const skills = [
        {
            icons: [{ component: SiC, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "C",
            description: "Foundational programming language.",
        },
        {
            icons: [
                { component: SiHtml5, props: { className: "text-4xl text-blue-300 mb-1" } },
                { component: SiCss3, props: { className: "text-4xl text-blue-300 mb-2" } },
            ],
            title: "HTML & CSS",
            description: "Building clean and functional websites.",
        },
        {
            icons: [{ component: SiJavascript, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "JavaScript",
            description: "Interactive and dynamic web features.",
        },
        {
            icons: [{ component: FaPhp, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "PHP",
            description: "Server-side scripting for web apps.",
        },
        {
            icons: [{ component: SiMysql, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "SQL",
            description: "Managing and querying databases.",
        },
        {
            icons: [{ component: FaLaravel, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "Laravel",
            description: "PHP framework for modern apps.",
        },
        {
            icons: [{ component: FaVuejs, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "Vue.js",
            description: "Progressive JavaScript framework.",
        },
        {
            icons: [{ component: FaReact, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "React.js",
            description: "Building fast UI components.",
        },
        {
            icons: [{ component: FaBootstrap, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "Bootstrap",
            description: "Responsive CSS framework.",
        },
        {
            icons: [{ component: SiJquery, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "jQuery",
            description: "Simplifying JavaScript tasks.",
        },
        {
            icons: [{ component: FaPython, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "Python",
            description: "General-purpose programming.",
        },
        {
            icons: [{ component: FaJava, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "Java",
            description: "Object-oriented programming language.",
        },
        {
            icons: [{ component: FaFigma, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "Figma",
            description: "Designing UI/UX prototypes.",
        },
        {
            icons: [{ component: FaGithub, props: { className: "text-4xl text-blue-300 mb-2" } }],
            title: "GitHub",
            description: "Version control and collaboration platform.",
        },
    ];

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

                {/* Grid for skill cards */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.title} 
                            className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start items-center text-center 
             transform transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl 
             p-8 h-48"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex items-center justify-center h-12">
                                {skill.icons.map((IconData, i) => {
                                    const IconComponent = IconData.component;
                                    return (
                                        <IconComponent
                                            key={i}
                                            {...IconData.props}
                                            className={`${IconData.props.className} ${skill.icons.length > 1 ? 'mx-1' : ''}`}
                                        />
                                    );
                                })}
                            </div>

                            <h3 className="text-lg font-semibold text-blue-200 mt-2">{skill.title}</h3>
                            <p className="text-sm text-blue-100 mt-1">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
        </section>
    )
}

