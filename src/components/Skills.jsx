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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 rounded-xl p-10"
              data-aos="zoom-in"
              data-aos-delay={index * 80}
            >
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
          ))}
        </div>
      </div>
    </section >
  );
}

