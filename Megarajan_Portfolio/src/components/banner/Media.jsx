import React from 'react'
import {FaLinkedinIn} from "react-icons/fa";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp'; // Material-UI Download Icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// import CloudIcon from '@mui/icons-material/Cloud';
// import { faRedux } from '@fortawesome/free-brands-svg-icons';
import pdfFile from '../../assets/Megarajan R Resume.pdf'

const Media = () => {
   const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'Megarajan_Resume.pdf'; // Name of the downloaded file
    link.click();
  };
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-1">
          <a className="bannerIcon"  href='Gmail:megarajan55@gmail.com'>
            <EmailIcon />
            </a>
          <a className="bannerIcon" href='tel:+919047346386'>
              <WhatsAppIcon />
            </a>
          <a className="bannerIcon" target='_blank' href='https://www.linkedin.com/in/megarajan-r-0379a1135/'>
              <FaLinkedinIn />
            </a>
          <a className="bannerIcon" target="_blank" href='https://github.com/megario55'>
            <GitHubIcon />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 mt-4 xl:mt-0">
            Download Resume
          </h2>
           <button
      onClick={handleDownload} className='bannerIcon'>
      <GetAppIcon/>
    </button>
        </div>
      </div>
  )
}

export default Media