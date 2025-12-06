import { NavLink } from "react-router";

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaHome, FaUserAlt, FaCode, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import { NavigateContext } from "../context/NavigateProvider";

const Footer = () => {
  const { scrollToSection, homeRef, aboutRef, skillRef, contactRef } =
    useContext(NavigateContext);

  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        

        {/* Quick Access with Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <NavLink
                to="/"
                onClick={() => scrollToSection(homeRef)}
                className="hover:text-lime-400 transition flex items-center gap-2"
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="hover:text-lime-400 transition text-left flex items-center gap-2"
              >
                <FaUserAlt /> About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(skillRef)}
                className="hover:text-lime-400 transition text-left flex items-center gap-2"
              >
                <FaCode /> Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-lime-400 transition text-left flex items-center gap-2"
              >
                <FaEnvelope /> Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-lime-500" />
              Jashore, Khulna, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-lime-500" />
              <a href="mailto:tumithasan1@gmail.com" className="hover:underline">
               mdzahirraihanbakul@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-lime-500" />
              <a href="tel:+8801615734276" className="hover:underline">
                +88016 1573 4276
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-6 mx-4" />

      <div className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Zahir Raihan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
