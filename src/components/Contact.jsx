import React from "react";
import { FiMail, FiArrowUp } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contacts = [
    {
        icon: FiMail,
        title: "Email",
        description: "Get in touch via email.",
        href: "mailto:vyone.louis@binus.ac.id",
    },
    {
        icon: FaLinkedin,
        title: "LinkedIn",
        description: "Connect with me on LinkedIn.",
        href: "https://www.linkedin.com/in/vyonelouis",
    },
    {
        icon: FaGithub,
        title: "GitHub",
        description: "Check out my projects on GitHub.",
        href: "https://github.com/Vyone",
    },
];

export default function Contact() {
                return (
                <section id="contact" className="py-24 px-6 scroll-mt-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                                Contact Me
                            </h2>
                            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mt-3 max-w-xl mx-auto">
                                Let’s connect! I’m always open to new opportunities, collaborations, or just a friendly chat.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {contacts.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 rounded-xl p-6 text-center transition"
                                    data-aos="zoom-in"
                                >
                                    <item.icon className="w-7 h-7 mx-auto text-neutral-700 dark:text-neutral-300 mb-3" />
                                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {item.description}
                                    </p>
                                </a>
                            ))}
                        </div>

                <div className="flex justify-center mt-16">
                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="animate-bounce p-3 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                    >
                        <FiArrowUp className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
