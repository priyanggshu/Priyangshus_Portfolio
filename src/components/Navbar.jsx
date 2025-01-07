import { useState } from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ dark, setDark }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const themeHandler = () => setDark(!dark);
  const menuHandler = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar flex items-center justify-between px-12 py-4 md:py-10">
      {/* Brand Logo */}
      <div className="brand">
        <p className="text-3xl md:text-5xl font-sans font-bold text-sky-400">Ps.</p>
      </div>

      {/* HM for sm */}
      <div className="md:hidden">
        <button onClick={menuHandler} className="pointer">
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`navLinks flex-col md:flex-row flex md:flex gap-6 md:gap-16 text-lg md:text-xl font-serif font-semibold absolute md:static top-16 left-0 w-full md:w-auto md:items-center transition-all duration-300 ease-in-out z-10 ${menuOpen
          ? dark
            ? "bg-gray-800 text-white border-2"
            : "bg-slate-100 text-black"
          : "hidden md:flex"
          }`}
      >
        <a className="hover:text-orange-400 hover:underline px-6 py-2 md:p-0" href="/">
          Home
        </a>
        <a className="hover:text-orange-400 hover:underline px-6 py-2 md:p-0" href="#about">
          About
        </a>
        <a className="hover:text-orange-400 hover:underline px-6 py-2 md:p-0" href="#projects">
          Projects
        </a>
        <a className="hover:text-orange-400 hover:underline px-6 py-2 md:p-0" href="#contact">
          Contact
        </a>
      </div>

      {/* Theme Toggle */}
      <button onClick={themeHandler} className="pointer hidden md:block">
        {dark ? (
          <FaRegLightbulb className="scale-150 w-4 h-4 fill-amber-400" />
        ) : (
          <FaLightbulb className="scale-150 w-4 h-4" />
        )}
      </button>

      {/* Theme Toggle in Dropdown */}
      {menuOpen && (
        <button onClick={themeHandler} className="pointer block md:hidden mt-4 ml-6 z-20">
          {dark ? (
            <FaRegLightbulb className="scale-150 w-4 h-4 fill-amber-400" />
          ) : (
            <FaLightbulb className="scale-150 w-4 h-4" />
          )}
        </button>
      )}

      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}
    </div>
  );
};

export default Navbar;