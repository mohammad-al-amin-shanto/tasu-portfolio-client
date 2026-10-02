import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";

const Flower = ({ className = "" }: { className?: string }) => {
  return (
    <div aria-hidden="true" className={`absolute z-0 ${className}`}>
      <div className="relative h-[105px] w-[105px]">
        <span className="absolute left-1/2 top-0 h-[54px] w-[37px] -translate-x-1/2 rounded-full bg-white" />
        <span className="absolute bottom-0 left-1/2 h-[54px] w-[37px] -translate-x-1/2 rounded-full bg-white" />
        <span className="absolute left-0 top-1/2 h-[37px] w-[54px] -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute right-0 top-1/2 h-[37px] w-[54px] -translate-y-1/2 rounded-full bg-white" />

        <span className="absolute left-1/2 top-1/2 h-[28px] w-[28px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-screen w-full overflow-hidden bg-[#FAD9D9]"
    >
      {/* Top-left flower */}
      <Flower className="left-[27%] top-[11%] -translate-x-1/2 scale-[0.95] sm:left-[30%] sm:top-[10%] md:left-[31%] lg:left-[30%]" />

      {/* Bottom-right flower */}
      <Flower className="right-[22%] top-[64%] scale-[0.95] sm:right-[27%] sm:top-[64%] md:right-[29%] lg:right-[28%]" />

      {/* Main hero content */}
      <div className="mx-auto flex min-h-screen w-full max-w-[1500px] flex-col items-center px-5 pb-8 pt-[155px] sm:px-8 sm:pt-[170px] md:pt-[185px] lg:pt-[195px]">
        <HeroContent />

        <HeroButtons />

        {/* Behance + scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="relative z-10 mt-7 flex flex-col items-center"
        >
          <span className="font-serif text-[22px] font-bold leading-none text-[#111111]">
            Bé
          </span>

          <ChevronDown
            size={34}
            strokeWidth={1.2}
            className="mt-5 text-[#111111]"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
