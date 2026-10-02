import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <button
      type="button"
      aria-label="Open navigation menu"
      className="flex h-9 w-9 items-center justify-center rounded-full text-[#111111] transition-colors hover:bg-white/30 lg:hidden"
    >
      <Menu size={20} strokeWidth={1.7} />
    </button>
  );
};

export default MobileMenu;
