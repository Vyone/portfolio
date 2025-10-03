import React from "react";

// Your experiences array
const experiences = [
  {
    role: "Information Technology Manager",
    company: "BINUS English Club (BNEC)",
    date: "Apr 2025 - Present",
    description:
      "As an IT Manager, I'm responsible for the development and maintenance of organizational and event websites, ensuring they operated smoothly and met the needs of the club. I regularly resolved technical issues, supported different divisions with IT solutions, and maintained reliable digital infrastructure. I also took an active role in mentoring and training new staff in web development technologies such as HTML, CSS, Bootstrap, jQuery, Laravel, and PHP, helping them grow their technical skills and contribute effectively. Alongside these responsibilities, I handled data updates and database management tasks to keep content accurate and consistent across platforms.",
    skills: ["PHP", "PhpMyAdmin", "MySQL", "Laravel", "Git", "GitHub", "HTML", "Vue.js", "CSS", "Bootstrap", "jQuery", "Team Leadership", "Google Workspace"],
  },
  {
    role: "Design and Registration Staff | New Member Recruitment Even 2025",
    company: "BINUS English Club (BNEC)",
    date: "Mar 2025 - May 2025",
    description:
      "In the Even Semester NMR, I was responsible for handling the event website and managing the registration process, including updating the database with new member information and approving participant payments. My role ensured a smooth registration flow and accurate record-keeping to support the success of the event.",
    skills: ["Vue.js", "MySQL", "PhpMyAdmin", "Google Workspace", "Teamwork"],
  },
  {
    role: "Logistic & Registration Staff | 32nd BNEC Cadre Forming",
    company: "BINUS English Club (BNEC)",
    date: "Feb 2025",
    description:
      "As a Logistic & Registration Staff for the 32nd BNEC Cadre Forming, I was responsible for creating entry and exit tickets for both Day-1 and Day-2, which also included a satisfaction form in the Day-2 exit ticket. I supported the event logistics by ensuring resources, such as food and BNEC merchandise, were distributed evenly and tracked properly. Additionally, I contributed to event documentation by capturing photos, videos, and other footage to record key moments of the program.",
    skills: ["Teamwork", "Google Workspace", "Canva"],
  },
  {
    role: "Information Technology Staff",
    company: "BINUS English Club (BNEC)",
    date: "Mar 2024 - Feb 2025",
    description:
      "As an IT Staff at BNEC, I contributed to the design and development of the organization’s official website, handling both visual design and coding tasks. I also participated in training sessions to strengthen technical skills and knowledge, while coordinating and leading the development of event websites to ensure timely delivery and smooth execution for organizational activities.",
    skills: ["PHP", "Laravel", "Bootstrap", "jQuery", "Vue.js", "MySQL", "PhpMyAdmin", "HTML", "CSS", "Git", "GitHub", "Figma"],
  },
  {
    role: "Information Technology & Registration Staff | National English Olympics 2024",
    company: "BINUS English Club (BNEC)",
    date: "Aug 2024 - Jan 2025",
    description:
      "As part of my role, I was responsible for creating and managing the registration process for webinars and workshops, including developing the registration form and ensuring all registrants completed the process correctly with accurate data and verified payments. I also produced a tutorial video to guide competition participants through registration, managed participant data, and handled communications such as email blasts when needed. Additionally, I managed NEO’s official email and LINE OA accounts.",
    skills: ["PhpMyAdmin", "HTML", "CSS", "MySQL", "PHP", "Laravel", "Teamwork", "Google Workspace", "LINE OA", "Mail Blasting"],
  },
  {
    role: "Website Coordinator | Social Event 2024",
    company: "BINUS English Club (BNEC)",
    date: "Jun 2024 - Sept 2024",
    description:
      "Led a team in designing and developing organizational websites, coordinating tasks, mentoring members, and ensuring high-quality, functional, and user-friendly results delivered on time.",
    skills: ["Laravel", "PHP", "HTML", "CSS", "Git", "GitHub", "Team Leadership"],
  },
  {
    role: "Information Technology & Registration Staff | 2024 BNEC TOEFL Event",
    company: "BINUS English Club (BNEC)",
    date: "Jun 2024 - Jul 2024",
    description:
      "As an Information Technology and Registration Staff for the 2024 BNEC TOEFL Event, organized by the Learning Management (LM) and Information Technology (IT) Division, I was responsible for creating the participant registration form, assisting in setting up the event space and equipment, and helping to arrange necessary materials and supplies. I also ensured that all technical aspects of the event ran smoothly, supporting both participants and the organizing team to deliver a successful ITP TOEFL event.",
    skills: ["Teamwork", "Google Workspace", "Registration Management"],
  },
];

export default function Experience() {
  return (
    // <section
    //   id="experience"
    //   className="bg-gray-900 text-white min-h-screen p-8 scroll-mt-30"
    //   data-aos="fade-up"
    // >
    <section
      id="experience"
      className="bg-gray-900 text-white min-h-screen p-8 scroll-mt-8"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-200 mt-5 mb-4 border-b-2 border-blue-300 pb-2 inline-block">
          Experience
        </h2>
        <p className="text-center md:text-lg text-blue-100 mt-5 mb-5">
          Over the years, I’ve gained valuable experiences through hands-on projects, collaborations, and challenges that pushed me to grow. Each project has been an opportunity to sharpen my skills, explore new ideas, and bring creative solutions to life.
        </p>
        

        {/* Grid for experience cards */}
        <div className="grid grid-cols-1 gap-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-xl shadow-md flex flex-col justify-start text-left 
             transition-all duration-150 ease-in-out 
             hover:bg-gradient-to-r hover:from-gray-700 hover:via-blue-700 hover:to-gray-600 
             hover:shadow-xl p-6 h-auto" data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg font-semibold text-blue-200">{exp.role}</h3>
              <p className="text-sm text-blue-100 mt-1 mb-2">{exp.company}</p>
              <p className="text-sm text-blue-100 mt-1 mb-2">{exp.description}</p>
              <p className="text-xs text-blue-300 mb-2">{exp.date}</p>

              {/* Skills */}
              <div className="flex flex-wrap justify-start gap-2 mt-1">
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
          ))}
        </div>
      </div>
    </section>
  );
}
