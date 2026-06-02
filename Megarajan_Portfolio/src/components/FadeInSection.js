// components/FadeInSection.js
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FadeInSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)"
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.97,
        filter: "blur(4px)"
      }}
      animate={controls}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
        scale: { type: "spring", stiffness: 100, damping: 15, delay },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
