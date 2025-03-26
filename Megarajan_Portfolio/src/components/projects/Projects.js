import React from 'react'
import Title from '../layouts/Title'
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import img05 from '../../assets/images/Emailcon.png';
import img02 from '../../assets/images/Resume-builder.png';
import img03 from '../../assets/images/Internship.png';
import img04 from '../../assets/images/ATTS-Aurumm.png';
// import img05 from '../../assets/images/project05.png';
import img01 from '../../assets/images/React-clone.png'
import img06 from '../../assets/images/Shopify.png';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Emailcon Campaign App"
          des="Emailcon Campaign is to Create customizable email templates using components like Headings, Buttons, Clickable Images, Paragraphs, and Social Icons.Send emails to single or bulk recipients using Nodemailer , store recipient emails via Excel file , and track campaign status in MongoDB."
        
          src={img05}
          alt='https://github.com/megario55/Emailcon-Template'
          alt2='https://emailcon-template.onrender.com/'
        />
        <ProjectsCard
          title="Resume Builder App"
          des="Built a static webpage using HTML, CSS, and Bootstrap, featuring a
structured layout with Navbar, Header, Sections, and Footer. Integrated JavaScript-based styling with 15+
resume templates and multi-color customization for a personalized user experience."
          src={img02}
          alt='https://github.com/megario55/Resume-Builder'
          alt2='https://megario55.github.io/Resume-Builder/Resume-frontpage.html'
        />
        <ProjectsCard
          title="ATTS Aurumm Project"
          des="ATTS Aurumm is a web application that provides a cutting-edge solution designed to streamline and enhance jewellery store operations. By integrating advanced technology with industry expertise, AURUMM ensures seamless inventory management, secure transactions, and an intuitive user experience."
          src={img04}
          alt='https://github.com/megario55/ATTS-Aurumm'
          alt2='https://atts-aurumm.onrender.com/'
        />
        <ProjectsCard
          title="Internship App"
          des="An internship app provides a platform for students to discover, apply, and manage internships, featuring a user-friendly interface, personalized recommendations, and efficient application tracking for internship opportunities."
          src={img03}
          alt='https://github.com/megario55/Internship'
          alt2='https://megario55.github.io/Internship/mainpage.html'
        />
        <ProjectsCard 
        className='projectimg-one'
          title="React Clone App"
          des="A React clone app replicates the core features of the popular pizza bar page, showcasing a responsive design, dynamic content rendering, and interactive user interface components using React."
          src={img01}
          alt='https://github.com/megario55/reactproject'
          alt2='https://reactproject-cyan.vercel.app/'
        />
        <ProjectsCard
          title="Shopify Clone App"
          des="A Shopify clone app replicates the core features of the popular e-commerce platform,showcases responsive and visually appealing web design using the Bootstrap framework, demonstrating its grid system, components, and styling features."
          src={img06}
          alt='https://github.com/megario55/front-end-project'
          alt2='https://megario55.github.io/front-end-project/shopify.html'
        />
      </div>
    </section>
  );
}

export default Projects