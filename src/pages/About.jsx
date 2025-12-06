import { useContext } from "react";
import { FaCoffee, FaMusic, FaPlaneDeparture } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { motion } from "framer-motion";
import { NavigateContext } from "../context/NavigateProvider";

const About = () => {
  const { aboutRef } = useContext(NavigateContext);

  // const interests = [
  //   { icon: <GiCricketBat />, label: "Cricket" },
  //   { icon: <FaCoffee />, label: "Coffee" },
  //   { icon: <FaPlaneDeparture />, label: "Travel" },
  //   { icon: <FaMusic />, label: "Music" },
  // ];

  return (
    <section
      ref={aboutRef}
      className="relative bg-zinc-900 px-10 py-16 rounded-xl mx-10 border border-zinc-800 duration-300 hover:shadow-[0_0_40px_#0ff] overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 uppercase tracking-widest mb-4">
          About Me
        </h2>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14"
      >
        {/* Text Section */}
        <div className="text-white w-full max-w-3xl space-y-6">
          <h3 className="text-3xl font-semibold text-pink-400">
            MERN Stack Developer
          </h3>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
            Hello! I'm <span className="font-semibold text-cyan-400">Zahir Raihan</span>, a
            passionate MERN Stack Developer skilled in
            <span className="text-purple-400 font-semibold"> React.js, Node.js, MongoDB, Express.js</span>
            and <span className="text-purple-400 font-semibold">Tailwind CSS</span>. I enjoy turning
            ideas into modern, functional web applications with clean, maintainable code.
          </p>

          {/* Personal Info */}
          <div className="text-gray-300 text-sm sm:text-base space-y-1 pt-2">
            <p><span className="text-cyan-400 font-medium">Name:</span> Zahir Raihan</p>
            <p><span className="text-cyan-400 font-medium">Nationality:</span> Bangladeshi</p>
            <p><span className="text-cyan-400 font-medium">Address:</span> Jashore, Bangladesh</p>
            <p><span className="text-cyan-400 font-medium">Phone:</span> +8801615734276</p>
            <p><span className="text-cyan-400 font-medium">E-mail:</span> mdzahirraihanbakul@gmail.com</p>
            <p><span className="text-cyan-400 font-medium">Education:</span> Diploma in CST</p>
          </div>
        </div>
      </motion.div>

      {/* Interests */}
      {/* <div className="mt-16 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 uppercase mb-8">
          My Interests
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px #0ff",
                backgroundColor: "#0ff",
                color: "#1f1f1f",
              }}
              transition={{ duration: 0.3 }}
              className="w-28 h-28 md:w-32 md:h-32 bg-zinc-800 border border-cyan-400 flex flex-col items-center justify-center rounded-xl text-white cursor-pointer shadow-md"
            >
              <div className="text-4xl mb-2">{interest.icon}</div>
              <p className="text-sm md:text-base font-medium">{interest.label}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default About;