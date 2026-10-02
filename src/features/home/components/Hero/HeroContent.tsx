import { motion } from "framer-motion";

const HeroContent = () => {
  return (
    <div className="relative z-10">
      {/* Graphic Design */}
      <motion.h2
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="
          mb-1
          pl-[2px]
          text-left
          font-serif
          text-[24px]
          font-bold
          leading-none
          tracking-[-0.03em]
          text-[#111111]
          sm:text-[28px]
          md:text-[31px]
        "
      >
        Graphic Design
      </motion.h2>

      {/* PORTFOLIO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative"
        aria-label="Portfolio"
      >
        {/*
          Main O
          It stretches exactly from the top of the first row
          to the bottom of the second row.
        */}
        <span
          aria-hidden="true"
          className="
            absolute
            left-[35%]
            top-0
            bottom-0
            z-20
            w-[78px]
            -translate-x-1/2
            rounded-[50%]
            border-[5px]
            border-[#C72F3A]

            sm:left-[31%]
            sm:w-[90px]
            sm:border-[6px]

            md:left-[35%]
            md:w-[102px]
            md:border-[6px]

            lg:left-[35%]
            lg:w-[112px]
            lg:border-[6px]
          "
        />

        {/* ================= FIRST ROW ================= */}
        <div
          className="
            flex
            items-end
            font-serif
            font-bold
            leading-[0.78]
            tracking-[-0.075em]
            text-[#050505]
          "
        >
          {/* P */}
          <span
            className="
              text-[120px]
              sm:text-[155px]
              md:text-[190px]
              lg:text-[215px]
            "
          >
            P
          </span>

          {/* Space for main O */}
          <span
            aria-hidden="true"
            className="
              block
              w-[78px]
              shrink-0

              sm:w-[90px]
              md:w-[102px]
              lg:w-[112px]
            "
          />

          {/* RT */}
          <span
            className="
              text-[120px]
              sm:text-[155px]
              md:text-[190px]
              lg:text-[215px]
            "
          >
            RT
          </span>
        </div>

        {/* ================= SECOND ROW ================= */}
        <div
          className="
            mt-[-2px]
            flex
            items-end
            font-serif
            font-bold
            leading-[0.78]
            tracking-[-0.075em]
            text-[#050505]
          "
        >
          {/* F */}
          <span
            className="
              text-[120px]
              sm:text-[155px]
              md:text-[190px]
              lg:text-[215px]
            "
          >
            F
          </span>

          {/* Space for the SAME main O */}
          <span
            aria-hidden="true"
            className="
              block
              w-[78px]
              shrink-0

              sm:w-[90px]
              md:w-[102px]
              lg:w-[112px]
            "
          />

          {/* L */}
          <span
            className="
              text-[120px]
              sm:text-[155px]
              md:text-[190px]
              lg:text-[215px]
            "
          >
            L<sup>I</sup>
          </span>

          {/* Small O */}
          <span
            aria-hidden="true"
            className="
              ml-[3px]
              mb-[1px]
              inline-block
              h-[165px]
              w-[58px]
              shrink-0
              rounded-[50%]
              border-[5px]
              border-[#C72F3A]

              sm:ml-[5px]
              sm:h-[210px]
              sm:w-[70px]
              sm:border-[6px]

              md:h-[255px]
              md:w-[82px]

              lg:h-[290px]
              lg:w-[93px]
            "
          />
        </div>
      </motion.div>

      {/* Name — aligned toward the right */}
      <motion.p
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="
          mt-7
          text-right
          font-serif
          text-[23px]
          font-bold
          leading-none
          tracking-[-0.02em]
          text-[#111111]

          sm:mt-8
          sm:text-[27px]

          md:mt-9
          md:text-[30px]
        "
      >
        Tasnim Azad Tanny
      </motion.p>
    </div>
  );
};

export default HeroContent;
