import React, { useState, useEffect } from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [darkMode, setDarkMode] = useState(true);

  const NavbarLink = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const ThemeIcon = darkMode ? FiSun : FiMoon;

  return (
    <header
          className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors"
          data-aos="fade-down"
        >
          <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
            <a
              href="#home"
              className="text-base font-semibold text-neutral-900 dark:text-white"
            >
            Vyone Louis
          </a>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <ThemeIcon className="w-5 h-5" />
            </button>
            <button
              className="focus:outline-none text-neutral-900 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NavbarLink.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className={`text-sm transition-colors ${activeLink === link.link
                    ? "text-neutral-900 dark:text-white font-medium"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <ThemeIcon className="w-4 h-4" />
            </button>
          </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
            <nav className="md:hidden bg-white dark:bg-[#0a0a0a] border-b border-neutral-200 dark:border-neutral-800">
              <ul className="flex flex-col px-6 py-4 space-y-2">
                {NavbarLink.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.link}
                  onClick={() => setIsOpen(false)}
                        className={`block py-1.5 text-sm transition-colors ${activeLink === link.link
                            ? "text-neutral-900 dark:text-white font-medium"
                            : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                          }`}
                      >
                        {link.name}
                      </a>
                    </li>
            ))}
                  </ul>
        </nav>
      )}
          </header>
          );
}
