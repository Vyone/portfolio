import React, { useState } from "react";
import fHome from "../assets/project/Faketection-Home.png";
import fReal from "../assets/project/Faketection-Real.png";
import fFake from "../assets/project/Faketection-Fake.png";
import neoHome from "../assets/project/NEO-Home.png";
import neoComp from "../assets/project/NEO-Comp.png";
import neoCompDetail from "../assets/project/NEO-CompDetail.png";
import restoHome from "../assets/project/Restawrant-Home.png";
import restoOrder from "../assets/project/Restawrant-Order.png";
import restoCart from "../assets/project/Restawrant-Cart.png";
import seLanding from "../assets/project/SE-Landing.png";
import seAbout from "../assets/project/SE-AboutUs.png";
import seEvent from "../assets/project/SE-Event.png";
import skinHome from "../assets/project/SkinVigil-Home.png";
import skinAbout from "../assets/project/SkinVigil-About.png";
import willifyHome from "../assets/project/Willify-Home.png";
import willifySong from "../assets/project/Willify-SongDetail.png";
import willifyLR from "../assets/project/Willify-LR.png"; 
import willifyLogin from "../assets/project/Willify-Login.png";
import pawpal from "../assets/project/PawPal.png";
import portHero from "../assets/project/porto-hero.png";
import portProject from "../assets/project/porto-project.png";
import portExp from "../assets/project/porto-exp.png";


// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const project = [
  {
    name: "Willify",
    description:
      "Developed a website where users can browse and select songs, view lyrics and detailed song information, and create personalized accounts through login and registration features using HTML, CSS, and JavaScript. Built with a focus on user experience, and dynamic content display.",
    pictures: [willifyLR, willifyHome, willifyLogin, willifySong],
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vyone/Willify",
  },
  {
    name: "Restawrant",
    description:
      "Developed a food ordering website using Vue.js, where users can browse foods, view recommendations, and add items to their cart with the total price automatically calculated. The project uses a local JSON file (via json-server) as a mock database and API for efficient data management and retrieval.",
    pictures: [restoHome, restoOrder, restoCart],
    skills: ["Vue.js", "Bootstrap", "JSON", "Local API", "JavaScript"],
    github: "https://github.com/Vyone/Restawrant",
  },
  {
    name: "National English Olympics 2024",
    description:
      "Contributed to The National English Olympics (https://neo.mybnec.org/), an annual national-level English competition organized by BINUS English Club (BNEC) Alam Sutera, by designing and developing the competition section.",
    pictures: [neoHome, neoComp, neoCompDetail],
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Git", "Github", "Figma", "Teamwork"],
    github: "https://neo.mybnec.org/",
  },
  {
   name: "Faketection",
   description:
     "Built the frontend for a Deepfake Detection website, integrating an AI model (Python) with a responsive HTML/CSS interface.",
   pictures: [fHome, fReal, fFake],
   skills: ["HTML", "CSS", "Python", "AI Integration"],
   github: "https://drive.google.com/file/d/10VoFhAXgXTv1oxySUuIXmsjNTj8bqKUg/view?usp=sharing",
 },
  {
    name: "Social Event 2024",
    description:
      "Coordinated, designed, and developed a Social Event Website with a team using Laravel (PHP) and Blade templating.",
    pictures: [seLanding, seAbout, seEvent],
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Git", "Github", "Figma", "Teamwork"],
    github: "",
  },
   {
    name: "SkinVigil",
    description:
      "Collaborated in a group project to develop a Skin Cancer Detection website, contributing to the design and implementation of the “About Us” section.",
    pictures: [skinHome, skinAbout],
    skills: ["React", "Git", "Github", "Figma", "Teamwork"],
    github: "https://skin-vigil-frontend.vercel.app/",
  },
{
    name: "PawPal",
    description:
      "Designed a pet tracker mobile app prototype using Figma, featuring care reminders, multi-pet management, a community forum, and clinic recommendations.",
    pictures: [pawpal],
    skills: ["Figma", "UI/UX Design", "Prototyping"],
    github: "",
  },
   {
    name: "Portfolio Website",
    description:
    "Developed a personal portfolio website using React and Tailwind CSS to create a modern, responsive, and visually appealing interface. The website includes dedicated sections for About Me, Skills, Projects, Experience, and Contact, providing a structured and professional presentation of my background.",
    pictures: [portHero, portProject, portExp],
    skills: ["React.js", "Tailwind CSS", "JavaScript", "Git", "Github", "Deployment"],
    github: "https://github.com/Vyone/portfolio",
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (proj) => {
    setSelectedProject(proj);
    setCurrentIndex(0);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentIndex(
        (prev) =>
          (prev - 1 + selectedProject.pictures.length) %
          selectedProject.pictures.length
      );
    }
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentIndex(
        (prev) => (prev + 1) % selectedProject.pictures.length
      );
    }
  };

  return (
    <section
      id="project"
      className="bg-gray-900 min-h-screen p-8 scroll-mt-8"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-200 mb-4 border-b-2 border-blue-300 pb-2 inline-block">
          My Projects
        </h2>
        <p className="text-center md:text-lg mt-5 text-blue-100 max-w-3xl mx-auto">
          A showcase of my projects, demonstrating my skills in web development,
          software engineering, and database management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {project.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-150 hover:scale-[1.03] hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="relative group">
              <img
                src={exp.pictures[0]}
                alt={exp.name}
                className="w-full h-60 object-cover transition duration-150 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => handleOpen(exp)}
                  className="text-blue-900 text-sm md:text-base font-semibold px-4 py-2 border-2 border-blue-900 rounded-lg bg-white/80 hover:bg-white transition"
                >
                  View Project
                </button>
                {exp.github ? (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-gray-700/80 text-white hover:bg-gray-600 transition"
                  >
                    <FaGithub className="text-lg" />
                    {/* GitHub */}
                  </a>
                ) : (
                  <span className="relative inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-gray-700/50 text-gray-400 cursor-not-allowed">
                    <FaGithub className="text-lg opacity-50" />
                    <span className="absolute left-3 w-5 h-[2px] bg-red-400 rotate-45"></span>
                    {/* Not Available */}
                  </span>


                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-200">
                {exp.name}
              </h3>
              <p className="text-sm text-blue-100 mt-2 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-900/40 px-3 py-1 rounded-full text-blue-100 border border-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center w-full">
              <img
                src={selectedProject.pictures[currentIndex]}
                alt={`${selectedProject.name} screenshot`}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-red-400"
              >
                &times;
              </button>
              <button
                onClick={prevImage}
                className="absolute left-2 md:left-6 text-white text-xl p-1 md:text-3xl md:p-2 rounded-full bg-black/40 hover:bg-black/70"
              >
                &#8249;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:right-6 text-white text-xl p-1 md:text-3xl md:p-2 rounded-full bg-black/40 hover:bg-black/70"
              >
                &#8250;
              </button>
            </div>
            <p className="text-center text-blue-200 mt-4 text-sm md:text-base">
              {currentIndex + 1} / {selectedProject.pictures.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}