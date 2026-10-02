import { motion } from "framer-motion";

const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HeroContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      {/* Small heading */}
      <motion.p
        variants={letterAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-1 font-serif text-[18px] font-semibold leading-none text-[#171717] sm:text-[20px] md:text-[22px]"
      >
        Graphic Design
      </motion.p>

      {/* Main portfolio typography */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.08,
          delayChildren: 0.15,
        }}
        className="font-serif font-normal uppercase leading-[0.76] tracking-[-0.055em] text-[#080808]"
        aria-label="Portfolio"
      >
        {/* PORT */}
        <div className="flex items-center justify-center">
          <motion.span
            variants={letterAnimation}
            className="text-[76px] sm:text-[105px] md:text-[130px] lg:text-[145px]"
          >
            P
          </motion.span>

          <motion.span
            variants={letterAnimation}
            className="relative mx-[-2px] inline-flex h-[91px] w-[43px] items-center justify-center sm:mx-[-3px] sm:h-[125px] sm:w-[59px] md:h-[154px] md:w-[72px] lg:h-[171px] lg:w-[80px]"
          >
            <span
              className="absolute inset-[2px] rounded-[50%] border-[3px] border-[#ff0000] sm:border-[4px]"
              aria-hidden="true"
            />

            <span className="sr-only">O</span>
          </motion.span>

          <motion.span
            variants={letterAnimation}
            className="text-[76px] sm:text-[105px] md:text-[130px] lg:text-[145px]"
          >
            R
          </motion.span>

          <motion.span
            variants={letterAnimation}
            className="text-[76px] sm:text-[105px] md:text-[130px] lg:text-[145px]"
          >
            T
          </motion.span>
        </div>

        {/* FOLIO */}
        <div className="flex items-center justify-center">
          <motion.span
            variants={letterAnimation}
            className="text-[76px] sm:text-[105px] md:text-[130px] lg:text-[145px]"
          >
            F
          </motion.span>

          <motion.span
            variants={letterAnimation}
            className="relative mx-[-2px] inline-flex h-[91px] w-[43px] items-center justify-center sm:mx-[-3px] sm:h-[125px] sm:w-[59px] md:h-[154px] md:w-[72px] lg:h-[171px] lg:w-[80px]"
          >
            <span
              className="absolute inset-[2px] rounded-[50%] border-[3px] border-[#ff0000] sm:border-[4px]"
              aria-hidden="true"
            />

            <span className="sr-only">O</span>
          </motion.span>

          <motion.span
            variants={letterAnimation}
            className="text-[76px] sm:text-[105px] md:text-[130px] lg:text-[145px]"
          >
            L
          </motion.span>

          <motion.span
            variants={letterAnimation}
            className="relative mx-[-2px] inline-flex h-[91px] w-[43px] items-center justify-center sm:mx-[-3px] sm:h-[125px] sm:w-[59px] md:h-[154px] md:w-[72px] lg:h-[171px] lg:w-[80px]"
          >
            <span
              className="absolute inset-[2px] rounded-[50%] border-[3px] border-[#ff0000] sm:border-[4px]"
              aria-hidden="true"
            />

            <span className="sr-only">O</span>
          </motion.span>
        </div>
      </motion.div>

      {/* Designer name */}
      <motion.h2
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.7,
          ease: "easeOut",
        }}
        className="mt-5 font-serif text-[17px] font-semibold text-[#171717] sm:text-[19px] md:text-[21px]"
      >
        Tasnim Azad Tanny
      </motion.h2>
    </div>
  );
};

export default HeroContent;
