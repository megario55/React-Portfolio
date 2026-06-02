import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const ProjectsCard = ({ title, des, des2, src, alt, alt2 }) => {
  const { darkMode } = useTheme();
  return (
    <motion.div
      className={`w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-col group hover-glow transition-all duration-300 ${
        darkMode
          ? 'glass-card shadow-shadowOne'
          : 'glass-card shadow-lightShadow hover:shadow-lightShadowHover'
      }`}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg relative">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-500 cursor-pointer"
          src={src}
          alt="src"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <motion.a
                href={alt}
                target='_blank'
                rel="noreferrer"
                className={`text-lg w-10 h-10 rounded-full inline-flex justify-center items-center duration-300 cursor-pointer ${
                  darkMode
                    ? 'bg-black text-gray-400 hover:text-designColor'
                    : 'bg-gray-100 text-lightMuted hover:text-designColor'
                }`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsGithub />
              </motion.a>
              <motion.a
                href={alt2}
                target='_blank'
                rel="noreferrer"
                className={`text-lg w-10 h-10 rounded-full inline-flex justify-center items-center duration-300 cursor-pointer ${
                  darkMode
                    ? 'bg-black text-gray-400 hover:text-designColor'
                    : 'bg-gray-100 text-lightMuted hover:text-designColor'
                }`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGlobe />
              </motion.a>
            </div>
          </div>
          <p className={`text-sm tracking-wide mt-3 duration-300 ${
            darkMode ? 'hover:text-gray-100' : 'text-lightBody hover:text-lightHeading'
          }`}>
            {des}
            <br />
            {des2}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsCard