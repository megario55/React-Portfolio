import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';

const SkillBar = ({ name, percentage, delay = 0 }) => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="overflow-x-hidden" ref={ref}>
      <p className={`text-sm uppercase font-medium ${darkMode ? '' : 'text-lightHeading'}`}>{name}</p>
      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: percentage, opacity: 1 } : {}}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        >
          <motion.span
            className={`absolute -top-7 right-0 ${darkMode ? '' : 'text-lightHeading'}`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + 0.8 }}
          >
            {percentage}
          </motion.span>
        </motion.span>
      </span>
    </div>
  );
};

const Skills = () => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2" id='skills'>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? '' : 'text-lightHeading'}`}>Frontend Skill</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <SkillBar name="HTML5" percentage="100%" delay={0.1} />
          <SkillBar name="CSS" percentage="95%" delay={0.2} />
          <SkillBar name="JavaScript" percentage="85%" delay={0.3} />
          <SkillBar name="React Js" percentage="80%" delay={0.4} />
          <SkillBar name="Bootstrap" percentage="95%" delay={0.5} />
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? '' : 'text-lightHeading'}`}>Backend Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar name="Express Js" percentage="90%" delay={0.1} />
          <SkillBar name="Mongo DB" percentage="85%" delay={0.2} />
          <SkillBar name="Node Js" percentage="85%" delay={0.3} />
          <SkillBar name="Version Control" percentage="85%" delay={0.4} />
          <SkillBar name="Python Programming" percentage="80%" delay={0.5} />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills