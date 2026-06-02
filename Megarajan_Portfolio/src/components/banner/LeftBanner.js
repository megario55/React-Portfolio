import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const LeftBanner = () => {
    const { darkMode } = useTheme();
    const [text] = useTypewriter({
      words: ["MERN Stack Developer.", "Front End Developer", "React Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <motion.h4
          className={`text-lg font-normal ${darkMode ? '' : 'text-lightMuted'}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          WELCOME TO MY WORLD
        </motion.h4>
        <motion.h1
          className={`text-6xl font-bold ${darkMode ? 'text-white' : 'text-lightHeading'}`}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 80 }}
        >
          Hi, I'm{" "}
          <span className="gradient-text capitalize">Megarajan Ravikumar</span>
        </motion.h1>
        <motion.h2
          className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-lightHeading'}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 80 }}
        >
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </motion.h2>
        <motion.p
          className={`text-base font-bodyFont leading-6 tracking-wide ${darkMode ? '' : 'text-lightBody'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          As a dedicated Full Stack Developer I fully concentrated on the user experience having a deep understanding of the users to build more real time projects.
        </motion.p>
      </div>

    </div>
  );
}

export default LeftBanner