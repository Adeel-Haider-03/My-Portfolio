// @flow strict
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "ABOUT", to: "/#about" },
  { label: "EXPERIENCE", to: "/#experience" },
  { label: "SKILLS", to: "/#skills" },
  { label: "PROJECTS", to: "/#project" },
  { label: "CONTACT", to: "/#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav id="navbar" className="mx-8 bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center ml-6">
          <HashLink to="/" className="text-green-500 text-3xl" onClick={closeMenu}>
            <CgProfile />
          </HashLink>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex md:flex-row md:space-x-1 font-bold text-sm">
          {navLinks.map((link) => (
            <li key={link.label}>
              <HashLink
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                to={link.to}
              >
                <div className="text-sm text-green-500 transition-colors duration-300 hover:text-blue-500">
                  {link.label}
                </div>
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-green-500 text-3xl mr-2"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-start font-bold text-sm pb-4">
          {navLinks.map((link) => (
            <li key={link.label} className="w-full">
              <HashLink
                className="block px-6 py-2 no-underline outline-none hover:no-underline"
                to={link.to}
                onClick={closeMenu}
              >
                <div className="text-sm text-green-500 transition-colors duration-300 hover:text-blue-500">
                  {link.label}
                </div>
              </HashLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
