import React from 'react'
import { useTheme } from '../../context/ThemeContext';

const Title = ({ title, des }) => {
  const { darkMode } = useTheme();
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className={`text-4xl md:text-5xl font-bold capitalize ${
        darkMode ? 'text-gray-300' : 'text-lightHeading'
      }`}>{des}</h1>
    </div>
  );
}

export default Title