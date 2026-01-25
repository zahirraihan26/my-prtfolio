import { useContext, useState } from "react";
import {
  FaDownload,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaLaptopCode,
  FaProjectDiagram,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router";
import { NavigateContext } from "../context/NavigateProvider";
import Logo from "../assets/unnamed.jpg";

const Navbar = () => {
  const {
    scrollToSection,
    homeRef,
    aboutRef,
    skillRef,
    contactRef,
    portfolioRef,
  } = useContext(NavigateContext);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  const navItems = (
    <>
      <NavLink
        to="/"
        onClick={() => handleScroll(homeRef)}
        className="hover:text-cyan-400 transition flex items-center gap-2"
      >
        <FaHome /> Home
      </NavLink>
      {isHome && (
        <>
          <button
            onClick={() => handleScroll(aboutRef)}
            className="hover:text-cyan-400 transition flex items-center gap-2"
          >
            <FaUserAlt /> About
          </button>
          <button
            onClick={() => handleScroll(skillRef)}
            className="hover:text-cyan-400 transition flex items-center gap-2"
          >
            <FaLaptopCode /> Skills
          </button>
          <button
            onClick={() => handleScroll(portfolioRef)}
            className="hover:text-cyan-400 transition flex items-center gap-2"
          >
            <FaProjectDiagram /> Portfolio
          </button>
        </>
      )}
      {isHome ? (
        <button
          onClick={() => handleScroll(contactRef)}
          className="hover:text-cyan-400 transition flex items-center gap-2"
        >
          <FaEnvelopeOpen /> Contact
        </button>
      ) : (
        <NavLink
          to="/contact"
          className="hover:text-cyan-400 transition flex items-center gap-2"
        >
          <FaEnvelopeOpen /> Contact
        </NavLink>
      )}
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900 bg-opacity-30 text-white shadow-lg backdrop-blur-md pl-5 pr-5">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
       <Link
  to="/"
  onClick={() => isHome && handleScroll(homeRef)}
  className="group relative flex items-center font-sans tracking-tight"
>
  {/* Name with Letter Spacing effect */}
  <div className="flex items-baseline overflow-hidden">
    <span className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors duration-500">
      ZAHIR
    </span>
    
    {/* The "Dev" part as a SuperScript */}
    <span className="text-xs font-bold bg-cyan-500 text-zinc-900 px-1 ml-1 rounded transform translate-y-[-10px] group-hover:translate-y-[-15px] transition-transform duration-300">
      DEV
    </span>
  </div>

  {/* The Unique Underline (Thin and Long) */}
  <div className="absolute -bottom-1 left-0 w-4 h-[3px] bg-cyan-400 group-hover:w-full transition-all duration-500 ease-in-out"></div>

  {/* Background Glow (Very Subtle) */}
  <span className="absolute -z-10 blur-2xl text-cyan-500/0 group-hover:text-cyan-500/40 transition-all">
    ZAHIR
  </span>
</Link>
        

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-lg font-medium items-center">
          {navItems}
        </nav>

        {/* Download CV Button */}
        <a
          href="https://drive.google.com/file/d/1Dn6TPlZ5WAf--9EofmtA2oBO9wHMRN1y/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="bg-cyan-400 hover:bg-cyan-500 text-zinc-900 px-4 py-2 rounded-full font-semibold flex items-center gap-2 transition shadow-md hover:shadow-cyan-300 hidden lg:flex"
        >
          Download CV <FaDownload />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-zinc-900 transition-all duration-300 ease-in-out z-40 ${
          menuOpen ? "h-auto opacity-100 py-4" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-4 items-start px-6 text-base font-medium">
          {navItems}
        </nav>
        <a
          href="https://drive.google.com/file/d/1P61zXG4Ryuh2Z445UwzTpP0Uljt0SvjY/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="bg-cyan-400 hover:bg-cyan-500 text-zinc-900 px-4 py-2 rounded-full font-semibold flex justify-center items-center gap-2 w-[90%] mx-auto mt-4 transition shadow-md hover:shadow-cyan-300"
        >
          Download CV <FaDownload />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
