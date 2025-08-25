import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import pdfFile from '../../assets/Megarajan R Resume.pdf';
import profilePic from "../../assets/images/ban2.jpg";

const accentColor = "#fd0054";

const BlobImage = () => {
  return (
    <svg
      className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[440px] transition-all duration-300"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: "auto" }}
    >
      <mask id="mask0" mask-type="alpha">
        <path
          fill="#ffffff"
          d="M54.5,-55.2C68.7,-40.2,77,-20.1,77.7,0.7C78.3,21.4,71.3,42.8,57.1,57.5C42.8,72.1,21.4,79.9,1.4,78.5C-18.6,77.1,-37.3,66.5,-53.4,51.9C-69.5,37.3,-83.1,18.6,-84.2,-1.1C-85.3,-20.8,-73.8,-41.5,-57.7,-56.5C-41.5,-71.5,-20.8,-80.8,-0.3,-80.4C20.1,-80.1,40.2,-70.2,54.5,-55.2Z"
          transform="translate(100 100)"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          fill={accentColor}
          d="M54.5,-55.2C68.7,-40.2,77,-20.1,77.7,0.7C78.3,21.4,71.3,42.8,57.1,57.5C42.8,72.1,21.4,79.9,1.4,78.5C-18.6,77.1,-37.3,66.5,-53.4,51.9C-69.5,37.3,-83.1,18.6,-84.2,-1.1C-85.3,-20.8,-73.8,-41.5,-57.7,-56.5C-41.5,-71.5,-20.8,-80.8,-0.3,-80.4C20.1,-80.1,40.2,-70.2,54.5,-55.2Z"
          transform="translate(100 100)"
        />
        <image
          x="-85"
          y="-85"
          width="370"
          height="410"
          href={profilePic}
          preserveAspectRatio="xMidYMid slice"
        />
      </g>
    </svg>
  );
};

const RightSide = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'Megarajan_Resume.pdf';
    link.click();
  };

  return (
    <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
      <BlobImage />
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 mt-3 sm:mt-4 md:mt-6">
        <a className="bannerIcon" href="mailto:megarajan55@gmail.com" aria-label="Email">
          <EmailIcon fontSize="medium" />
        </a>
        <a className="bannerIcon" href="tel:+919047346386" aria-label="WhatsApp">
          <WhatsAppIcon fontSize="medium" />
        </a>
        <a className="bannerIcon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/megarajan-r-0379a1135/" aria-label="LinkedIn">
          <FaLinkedinIn size={24} />
        </a>
        <a className="bannerIcon" target="_blank" rel="noreferrer" href="https://github.com/megario55" aria-label="GitHub">
          <GitHubIcon fontSize="medium" />
        </a>
        <button onClick={handleDownload} className="bannerIcon" aria-label="Download Resume">
          <GetAppIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default RightSide;
