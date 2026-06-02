import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '../../context/ThemeContext';

const ContactLeft = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center transition-all duration-300 ${
      darkMode
        ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne'
        : 'bg-white shadow-lightShadow border border-lightBorder'
    }`}>
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-lightHeading'}`}>Megarajan Ravikumar</h3>
        <p className={`text-lg font-normal ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>
          MERN Stack Developer
        </p>
        <p className={`text-base tracking-wide ${darkMode ? 'text-gray-400' : 'text-lightBody'}`}>
          Just contact me for build more user friendly web applications and comapny websites.
        </p>
        <p className={`text-base flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>
          Phone: <span className={darkMode ? 'text-lightText' : 'text-lightHeading'}>+91 9047346386</span>
        </p>
        <p className={`text-base flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-lightMuted'}`}>
          Email: <span className={darkMode ? 'text-lightText' : 'text-lightHeading'}>megarajan55@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className={`text-base uppercase font-titleFont mb-4 ${darkMode ? '' : 'text-lightHeading'}`}>Find me in</h2>
        <div className="flex gap-4">
          <a className="bannerIcon" target="_blank" rel="noreferrer" href='mailto:megarajan55@gmail.com'>
            <EmailIcon />
          </a>
          <a className="bannerIcon" href='tel:+919047346386'>
            <WhatsAppIcon />
          </a>
          <a className="bannerIcon" target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/megarajan-r-0379a1135/'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft