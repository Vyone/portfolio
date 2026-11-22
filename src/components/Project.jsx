import React, { useEffect, useRef, useState } from "react";
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
import w2About from "../assets/project/willify2_about.png";
import w2Explore from "../assets/project/willify2_explore.png";
import w2Home from "../assets/project/willify2_home.png";
import w2Login from "../assets/project/willify2_login.png";
import w2Song from "../assets/project/willify2_songDet.png";
import qshieldFake from "../assets/project/QShieldFakeQR.png";
import qshieldReal from "../assets/project/QShieldRealQR.png";
import qshieldQR from "../assets/project/QShieldScanQR.png";
import qshield from "../assets/project/QShield.png";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const project = [
  {
    name: "Willify",
    description:
      "Developed a website where users can browse and select songs, view lyrics and detailed song information, and create personalized accounts through login and registration features using HTML, CSS, and JavaScript.",
    pictures: [willifyLR, willifyHome, willifyLogin, willifySong],
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vyone/Willify",
  },
  {
    name: "Willify2.0",
    description:
      "Developed an updated version of Willify using Laravel and PHP, utilizing Laravel’s MVC architecture and Blade templating to build a dynamic system for browsing songs and displaying detailed lyrics and song information.",
    pictures: [w2Home, w2Song, w2Explore, w2About, w2Login],
    skills: ["Laravel", "PHP", "Bootstrap", "MySQL"],
    github: "https://github.com/Vyone/Willify2",
  },
  {
    name: "Restawrant",
    description:
      "Developed a food ordering website using Vue.js, where users can browse foods, view recommendations, and add items to their cart with the total price automatically calculated.",
    pictures: [restoHome, restoOrder, restoCart],
    skills: ["Vue.js", "Bootstrap", "JSON", "Local API", "JavaScript"],
    github: "https://github.com/Vyone/Restawrant",
  },
  {
    name: "National English Olympics 2024",
    description:
      "Contributed to The National English Olympics (https://neo.mybnec.org/) by designing and developing the competition section.",
    pictures: [neoHome, neoComp, neoCompDetail],
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://neo.mybnec.org/",
  },
  {
    name: "Faketection",
    description:
      "Built the frontend for a Deepfake Detection website, integrating an AI model (Python) with a responsive HTML/CSS interface.",
    pictures: [fHome, fReal, fFake],
    skills: ["HTML", "CSS", "Python", "AI Integration"],
    github: "",
  },
  {
    name: "Social Event 2024",
    description:
      "Coordinated, designed, and developed a Social Event Website with a team using Laravel (PHP) and Blade templating.",
    pictures: [seLanding, seAbout, seEvent],
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "",
  },
  {
    name: "SkinVigil",
    description:
      "Collaborated in a group project to develop a Skin Cancer Detection website, contributing  to the design and implementation of the “About Us” section. Focused on building a responsive and user-friendly interface using React to enhance the overall frontend experience.",
    pictures: [skinHome, skinAbout],
    skills: ["React", "Git", "Github", "Figma", "Teamwork"],
    github: "https://skin-vigil-frontend.vercel.app/",
  },
  {
    name: "PawPal",
    description:
      "Designed a pet tracker mobile app prototype using Figma.",
    pictures: [pawpal],
    skills: ["Figma", "UI/UX Design", "Prototyping"],
    github: "",
  },
  {
    name: "Portfolio Website",
    description:
      "Developed a personal portfolio website using React and Tailwind CSS.",
    pictures: [portHero, portProject, portExp],
    skills: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Vyone/portfolio",
  },
  {
    name: "QShield",
    description: "Built for HackNusa 2026 (Top 10 National Finalist), Q-Shield is an inline, low-latency verification middleware that prevents QRIS 'sticker-swap' fraud before PIN entry by adding spatial consensus and behavioral verification to static QR displays without requiring merchant hardware upgrades.",
    pictures: [qshield, qshieldQR, qshieldFake, qshieldReal],
    skills: ["Python", "Next.js", "Hackathon"],
    github: "https://github.com/wcksnrdn/QShield",
  }
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const updateMeasurements = () => {
      if (!trackRef.current || !viewportRef.current) return;
      const maxTranslate = Math.max(
        0,
        trackRef.current.scrollWidth - viewportRef.current.clientWidth
      );
      setScrollDistance(maxTranslate);
    };

    updateMeasurements();

    const resizeObserver = new ResizeObserver(updateMeasurements);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    window.addEventListener("resize", updateMeasurements);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMeasurements);
    };
  }, []);

  useEffect(() => {
    let frameId = null;

    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        if (!sectionRef.current || !trackRef.current || !viewportRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const maxScroll = Math.max(
          0,
          sectionRef.current.offsetHeight - window.innerHeight
        );
        if (maxScroll <= 0) {
          setTranslateX(0);
          return;
        }

        const scrolled = Math.min(Math.max(-rect.top, 0), maxScroll);
        const progress = scrolled / maxScroll;
        const maxTranslate = Math.max(
          0,
          trackRef.current.scrollWidth - viewportRef.current.clientWidth
        );
        setTranslateX(progress * maxTranslate);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [scrollDistance]);

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
      setCurrentIndex((prev) => (prev + 1) % selectedProject.pictures.length);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative scroll-mt-16"
      style={{
        height: scrollDistance > 0 ? `calc(100vh + ${scrollDistance}px)` : "auto",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-16 px-6">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mt-3 max-w-2xl mx-auto">
              A showcase of my projects, demonstrating my skills in web development, software engineering, and UI/UX design.
            </p>
          </div>

          <div ref={viewportRef} className="w-full" data-aos="fade-up">
            <div
              ref={trackRef}
              className="flex gap-6 w-max will-change-transform transition-transform duration-75 ease-out"
              style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
            >
              {project.map((exp) => (
                <div
                  key={exp.name}
                  className="w-[85vw] sm:w-[340px] md:w-[350px] shrink-0 bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden flex flex-col"
                >
                  <img
                    src={exp.pictures[0]}
                    alt={exp.name}
                    onClick={() => handleOpen(exp)}
                    className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
                  />

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                        {exp.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {exp.github && (
                          <a
                            href={exp.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                            Code / Visit Website
                          </a>
                        )}
                        <button
                          onClick={() => handleOpen(exp)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition"
                        >
                          <FiExternalLink className="w-3.5 h-3.5" />
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
                className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-neutral-300"
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
            <p className="text-center text-neutral-300 mt-4 text-sm md:text-base">
              {currentIndex + 1} / {selectedProject.pictures.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
