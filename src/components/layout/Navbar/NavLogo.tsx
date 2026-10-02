import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link
      to="/"
      aria-label="Tasnim Tanny - Home"
      className="group flex flex-col leading-none"
    >
      <span className="font-serif text-[20px] italic leading-[0.9] tracking-[-0.03em] text-[#111111] sm:text-[22px]">
        Tasnim Tanny
      </span>

      <span className="mt-[3px] text-[6px] font-medium uppercase tracking-[0.16em] text-[#111111] sm:text-[7px]">
        Graphic Designer
      </span>
    </Link>
  );
};

export default NavLogo;
