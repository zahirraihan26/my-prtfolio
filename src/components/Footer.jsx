import { NavLink } from "react-router";
import { FaMapMarkerAlt, FaPhoneAlt, FaHome, FaUserAlt, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { NavigateContext } from "../context/NavigateProvider";

const Footer = () => {
  const { scrollToSection, homeRef, aboutRef, skillRef, contactRef } = useContext(NavigateContext);

  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Quick Access */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <NavLink
                to="/"
                onClick={() => scrollToSection(homeRef)}
                className="hover:text-cyan-300 transition flex items-center gap-2"
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="hover:text-cyan-300 transition text-left flex items-center gap-2"
              >
                <FaUserAlt /> About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(skillRef)}
                className="hover:text-cyan-300 transition text-left flex items-center gap-2"
              >
                <FaCode /> Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-cyan-300 transition text-left flex items-center gap-2"
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
              <FaMapMarkerAlt className="text-cyan-300" />
              Jashore, Khulna, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-cyan-300" />
              <a href="mailto:mdzahirraihanbakul@gmail.com" className="hover:underline">
                mdzahirraihanbakul@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-300" />
              <a href="tel:+8801615734276" className="hover:underline">
                +88016 1573 4276
              </a>
            </li>
          </ul>
          <div className="text-center mt-4">
            <button
              onClick={() => scrollToSection(homeRef)}
              className="text-cyan-300 hover:text-white transition"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect & Subscribe</h3>
          
          {/* Social Icons */}
          <div className="flex gap-4 text-cyan-300 text-xl mb-4">
            <a  href="https://github.com/zahirraihan26" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/md-zahir-raihan-bakul/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/md.zahir.raihan.40048/about/?id=100071170629636&sk=about" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>

          
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
