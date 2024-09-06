// @flow strict
import { HashLink } from "react-router-hash-link";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <nav id="navbar" className="mx-8 bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center ml-6">

          <HashLink to="/" className="text-green-500 text-3xl" >
            <CgProfile />
          </HashLink>

        </div>

        <ul className="font-bold mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <HashLink className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#about">
              <div className="text-sm text-green-500 transition-colors duration-300 hover:text-blue-500">ABOUT</div>
            </HashLink>
          </li>
          <li>
            <HashLink className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#experience">
              <div className="text-sm text-green-500 transition-colors duration-300 hover:text-blue-500">EXPERIENCE</div>
            </HashLink>
          </li>
          <li>
            <HashLink className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#skills">
              <div className="text-sm text-green-500 transition-colors duration-300 hover:text-blue-500">SKILLS</div>
            </HashLink>
          </li>
          <li>
            <HashLink className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#project">
              <div className="text-sm text-green-500 transition-colors duration-300 hover:text-blue-500">PROJECTS</div>
            </HashLink>
          </li>
          <li>
            <HashLink className="block px-4 py-2 no-underline outline-none hover:no-underline" to="/#contact">
              <div className="text-sm text-green-500 transition-colors duration-300 hover:text-blue-500">CONTACT</div>
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
