import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/images/banimg1.jpg';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  const linkClass = `w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer ${
    darkMode ? '' : 'text-lightBody'
  }`;

  return (
    <div className={`w-full py-20 h-auto border-b-[1px] grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 ${
      darkMode ? 'border-b-black' : 'border-b-lightBorder'
    }`}>
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" style={{ width: 100, height: 100, borderRadius: '50%' }} />
        <div className="flex gap-4">
          <a className="bannerIcon" href='mailto:megarajan55@gmail.com'>
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className={`flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden ${darkMode ? '' : 'text-lightBody'}`}>
          <li>
            <span className={linkClass}>
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Blog
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className={`flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden ${darkMode ? '' : 'text-lightBody'}`}>
          <li>
            <span className={linkClass}>
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className={`flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6 ${darkMode ? '' : 'text-lightBody'}`}>
          <li>
            <span className={linkClass}>
              Documentation
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              API References
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className={linkClass}>
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
