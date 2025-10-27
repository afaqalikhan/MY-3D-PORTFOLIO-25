import React, { useState } from "react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row md:gap-6 relative z-20 ">
      <li className="text-neutral-400 hover:text-white py-2 max-sm:px-5 max-sm:rounded-md max-sm:w-full">
        <a
          href="#home"
          className="text-lg md:text-base hover:text-white transition-colors"
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="#work" className="nav-link">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-950">
      <div className="c-space">
        <div className="flex justify-between items-center py-2">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 hover:text-white transition-colors"
          >
            Afaq Ali Khan
          </a>
          {/* toggle button for mobile*/}
          <button
            className="cursor-pointer sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? closeIcon : menuIcon}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          {/* nav-menu for desktop */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* mobile nav  */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
          className="text-center block overflow-hidden sm:hidden"
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
