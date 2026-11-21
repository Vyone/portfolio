import React from "react";
import Navbar from "./Navbar";
import profilePic from "../assets/profile.jpeg";
import { FiDownload, FiMail, FiArrowDown } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Vyone", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/vyonelouis", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:vyone.louis@binus.ac.id", label: "Email" },
];

const stats = [
  { value: "10+", label: "Projects" },
  { value: "2+", label: "Years Exp" },
  { value: "7+", label: "Org Roles" },
];

export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 px-6"
        data-aos="fade-up"
      >
        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="order-2 md:order-1 flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500 bg-clip-text text-transparent">
                Vyone Louis
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold text-neutral-900 dark:text-white">
                Computer Science student focused on Full-Stack Development
              </span>{" "}
            </p>

            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto md:mx-0">
              Experienced in enterprise software development,
              database design, and leading web teams. Driven to build practical,
              user-focused solutions that deliver real value.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/portfolio/CV-VyoneLouis.pdf"
                download="CV-VyoneLouis.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="/portfolio/Portfolio-VyoneLouis.pdf"
                download="Portfolio-VyoneLouis.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
              >
                <FiDownload className="w-4 h-4" />
                Download Portfolio
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-10 pt-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-neutral-400/20 dark:bg-white/10 blur-2xl pointer-events-none" />
              <img
                src={profilePic}
                alt="Vyone Louis"
                className="relative w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border border-neutral-200 dark:border-neutral-800 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <a
          href="#skills"
          className="mt-12 mx-auto flex flex-col items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"
        >
          <span>Scroll to explore</span>
          <FiArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </section>
    </>
  );
}
