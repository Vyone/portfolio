import { FiCode, FiLayers, FiDatabase, FiCloud, FiCheckCircle, FiTool } from "react-icons/fi";

const skillCategories = [
  {
    icon: FiCode,
    title: "Programming Languages",
    skills: ["C#", "JavaScript", "PHP", "Python", "Java", "C", "SQL"],
  },
  {
    icon: FiLayers,
    title: "Frameworks & Libraries",
    skills: [".NET", "Blazor", "Laravel", "React.js", "Vue.js", "Tailwind CSS"],
  },
  {
    icon: FiCloud,
    title: "DevOps & Deployment",
    skills: ["GitLab CI/CD", "OpenShift (OCP)", "Git", "GitHub"],
  },
  {
    icon: FiDatabase,
    title: "Databases",
    skills: ["MySQL", "Postgre", "Database Design"],
  },
  {
    icon: FiCheckCircle,
    title: "Testing",
    skills: ["bUnit", "NUnit", "Unit Testing"],
  },
  {
    icon: FiTool,
    title: "Design & Workflow",
    skills: ["Figma", "Agile / Hybrid", "Requirement Analysis"],
  },
];

export default function Skills() {
  const carouselItems = [...skillCategories, ...skillCategories];

  return (
    <section id="skills" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mt-3 max-w-2xl mx-auto">
            Combines full-stack development expertise with database management, automated testing, and team leadership.
          </p>
        </div>

        <div className="relative overflow-hidden" data-aos="fade-up">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10" />

          <div className="flex w-max animate-scroll pause-on-hover">
            {carouselItems.map((category, index) => (
              <div key={`${category.title}-${index}`} className="pr-6 shrink-0">
                <div className="w-72 sm:w-80 h-full bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 rounded-xl p-8">
                  <div className="flex items-center gap-2.5 mb-4">
                    <category.icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400 shrink-0" />
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-md bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

