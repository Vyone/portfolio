import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const NavbarLink = [
    // { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Project", link: "#project" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

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

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow bg-gray-900" data-aos="fade-down">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#home" className="text-xl italic font-serif text-blue-100">
  VL
</a>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-blue-100" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NavbarLink.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className={`
                relative text-blue-100 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-200 after:transition-all after:duration-300
                ${activeLink === link.link ? "after:w-full" : "after:w-0 hover:after:w-full"}
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-900 shadow">
          <ul className="flex flex-col p-4">
            {NavbarLink.map((link) => (
              <li key={link.name} className="py-2">
                <a
                  href={link.link}
                  className={`text-blue-100 hover:text-gray-600 ${
                    activeLink === link.link ? "underline" : ""
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
