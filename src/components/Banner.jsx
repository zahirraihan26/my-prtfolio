import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import banner from "../assets/1000001405-01 (1).jpeg";
import { useContext } from "react";
import { motion } from "framer-motion";
import { NavigateContext } from "../context/NavigateProvider";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    const { homeRef, contactRef, scrollToSection } = useContext(NavigateContext);

    return (
        <motion.section
            ref={homeRef}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto px-10 py-20 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-10 "
        >
            {/* Left */}
            <div className="lg:w-3/5 text-center lg:text-left ">
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-2">
                    Hello, I'm <span className="text-pink-500">Zahir Raihan</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-purple-300 font-semibold mb-4">
                    <Typewriter
                        words={["MERN Stack Developer", "React Specialist", "Frontend Engineer", "Web App Builder"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={2000}
                    />
                </h2>
                <p className="text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0">
                    Crafting seamless and efficient user experiences using MongoDB, Express, React, and Node.js.
                    Passionate about solving real-world problems through clean and scalable code.
                </p>

                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start mb-6">
                    <a
                        href="https://github.com/zahirraihan26"
                        target="_blank"
                        className="text-2xl p-3 border border-gray-600 rounded-full text-cyan-300 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition-all duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.facebook.com/md.zahir.raihan.40048/about/?id=100071170629636&sk=about"
                        target="_blank"
                        className="text-2xl p-3 border border-gray-600 rounded-full text-cyan-300 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition-all duration-300"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-zahir-raihan-bakul/"
                        target="_blank"
                        className="text-2xl p-3 border border-gray-600 rounded-full text-cyan-300 hover:text-white hover:shadow-lg hover:shadow-cyan-400 transition-all duration-300"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                    <button
                        onClick={() => scrollToSection(contactRef)}
                        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition duration-300"
                    >
                        Hire Me
                    </button>
                    <a
                        href="https://drive.google.com/file/d/14LJhhMehXXv69ppVHqxN5rQGOFS1wcgu/view?usp=sharing"
                        target="_blank"
                        className="flex items-center justify-center px-6 py-2 rounded-lg font-semibold bg-cyan-400 hover:bg-cyan-500 text-black shadow-md transition duration-300"
                    >
                        Download CV <FaDownload className="ml-2" />
                    </a>
                </div>
            </div>

            {/* Image */}
            <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:w-2/5"
            >
                <motion.img
                    src={banner}
                    alt="Zahir Raihan"
                    className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-cyan-400 object-top"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 25px #22d3ee",
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.section>
    );
};

export default Banner;