import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Card = ({ item: { title, des, icon } }) => {
  const { darkMode } = useTheme();
  return (
    <motion.div
      className={`w-full px-12 h-82 py-10 rounded-lg flex items-center group hover-glow transition-all duration-300 ${
        darkMode
          ? 'glass-card shadow-shadowOne'
          : 'glass-card shadow-lightShadow hover:shadow-lightShadowHover'
      }`}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="h-73 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className={`text-xl md:text-2xl font-titleFont font-bold ${
              darkMode ? 'text-gray-300' : 'text-lightHeading'
            }`}>
              {title}
            </h2>
            <p className={`base ${darkMode ? '' : 'text-lightBody'}`}>{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card