import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <button
      type="button"
      aria-label="Open menu"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A74C4C]/20 bg-white/60 text-[#A74C4C] backdrop-blur-md transition hover:bg-white lg:hidden"
    >
      <Menu size={22} />
    </button>
  );
};

export default MobileMenu;
