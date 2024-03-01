import { motion } from "framer-motion";
const transition = (ComponentUI) => {
  return () => (
    <>
      <ComponentUI />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.5, 0.7, 0.2, -0.94] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.28, 0.49, 1, -0.94] }}
      />
    </>
  );
};

export default transition;

