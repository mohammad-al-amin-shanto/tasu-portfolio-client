import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative z-10 mt-9 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5"
    >
      <a
        href="/resume.pdf"
        download
        className="flex h-[48px] min-w-[190px] items-center justify-center rounded-full border border-[#777777] px-7 text-[15px] font-medium text-[#171717] transition-all duration-300 hover:bg-[#111111] hover:text-white"
      >
        Download Resume
      </a>

      <Link
        to="/contact"
        className="flex h-[48px] min-w-[170px] items-center justify-center rounded-full border border-[#777777] px-7 text-[15px] font-medium text-[#171717] transition-all duration-300 hover:bg-[#111111] hover:text-white"
      >
        Contact me
      </Link>
    </motion.div>
  );
};

export default HeroButtons;
