import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const FooterBottom = () => {
  const { darkMode } = useTheme();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="w-full py-10">
      <p className={`text-center text-base ${darkMode ? 'text-gray-500' : 'text-lightMuted'}`}>
        © {currentYear}. All rights reserved by Megarajan Ravikumar
      </p>
    </div>
  );
}

export default FooterBottom;
