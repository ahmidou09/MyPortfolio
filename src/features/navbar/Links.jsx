import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialLinks from "../footer/SocialLinks";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ handleCloseSidebar }) => {
  const handleLinkClick = () => {
    handleCloseSidebar();
  };

  return (
    <motion.ul variants={variants}>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        <Link to="/projects" onClick={handleLinkClick}>
          Projects
        </Link>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        <Link to="/contact" onClick={handleLinkClick}>
          Contact
        </Link>
      </motion.li>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        <Link to="/about" onClick={handleLinkClick}>
          About
        </Link>
      </motion.li>

      <motion.li
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
      >
        <SocialLinks
          style={{
            position: "static",
            display: "flex",
            flexDirection: "row",
            marginTop: "20rem",
          }}
        />
      </motion.li>
    </motion.ul>
  );
};

export default Links;
