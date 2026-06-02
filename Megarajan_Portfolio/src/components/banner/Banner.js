import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import { useTheme } from '../../context/ThemeContext';

const Banner = () => {
  const { darkMode } = useTheme();
  return (
    <section
      id="home"
      className={`w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont ${
        darkMode ? 'border-b-black' : 'border-b-lightBorder'
      }`}
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner