import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import logo from '../../assets/images/banimg1.jpg';
import { navLinksdata } from '../../constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`w-full h-24 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont border-b-[1px] transition-all duration-500 ${
      darkMode
        ? 'bg-bodyColor border-b-gray-600'
        : 'bg-white/90 backdrop-blur-lg border-b-lightBorder shadow-sm'
    }`}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <motion.img
          src={logo}
          alt="logo"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <p style={{ fontSize: '30px', color: 'red', fontFamily: 'inherit' }}></p>
      </div>
      <div className="flex items-center gap-4">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className={`text-base font-normal tracking-wide cursor-pointer hover:text-designColor duration-300 relative group ${
                darkMode ? 'text-gray-400' : 'text-lightBody'
              }`}
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-designColor group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Dark / Light Toggle */}
        <motion.button
          onClick={toggleTheme}
          className={`relative w-14 h-7 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-500 ${
            darkMode
              ? 'bg-gradient-to-r from-indigo-900 to-purple-900'
              : 'bg-gradient-to-r from-amber-300 to-orange-400'
          }`}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle dark mode"
        >
          <motion.div
            className={`w-5 h-5 rounded-full flex items-center justify-center shadow-lg ${
              darkMode ? 'bg-indigo-400' : 'bg-white'
            }`}
            animate={{ x: darkMode ? 0 : 24 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.span
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BsMoonStarsFill className="text-[10px] text-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BsSunFill className="text-[10px] text-amber-500" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.button>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className={`text-xl mdl:hidden w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer ${
            darkMode ? 'bg-black' : 'bg-gray-100'
          }`}
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className={`w-[80%] h-screen overflow-scroll absolute top-0 left-0 p-4 scrollbar-hide z-50 ${
            darkMode ? 'bg-gray-900' : 'bg-white shadow-2xl'
          }`}>
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" style={{ width: 150, height: 150, borderRadius: '50%' }} />
                <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>
                  As a dedicated Full Stack Developer I fully concentrated on the user experience having a deep understanding of the users to build more real time projects
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className={`text-base font-normal tracking-wide cursor-pointer hover:text-designColor duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-lightBody'
                    }`}
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile theme toggle */}
              <div className="flex items-center gap-3">
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>
                  {darkMode ? 'Dark' : 'Light'} Mode
                </span>
                <motion.button
                  onClick={toggleTheme}
                  className={`relative w-14 h-7 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-500 ${
                    darkMode
                      ? 'bg-gradient-to-r from-indigo-900 to-purple-900'
                      : 'bg-gradient-to-r from-amber-300 to-orange-400'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shadow-lg ${
                      darkMode ? 'bg-indigo-400' : 'bg-white'
                    }`}
                    animate={{ x: darkMode ? 0 : 24 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {darkMode ? (
                      <BsMoonStarsFill className="text-[10px] text-white" />
                    ) : (
                      <BsSunFill className="text-[10px] text-amber-500" />
                    )}
                  </motion.div>
                </motion.button>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className={`text-base uppercase font-titleFont mb-4 ${darkMode ? '' : 'text-lightHeading'}`}>
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a className="bannerIcon" target="_blank" rel="noreferrer" href='https://www.instagram.com/megario55/'>
                    <InstagramIcon />
                  </a>
                  <a className="bannerIcon" href='tel:+919047346386'>
                    <WhatsAppIcon />
                  </a>
                  <a className="bannerIcon" target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/megarajan-r-0379a1135/'>
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className={`absolute top-4 right-4 duration-300 text-2xl cursor-pointer ${
                  darkMode ? 'text-gray-400 hover:text-designColor' : 'text-lightMuted hover:text-designColor'
                }`}
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar