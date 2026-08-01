import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link
      to="/"
      className="flex flex-col leading-none select-none"
      aria-label="Tasnim Tanny Home"
    >
      <h2 className="font-['Clash_Display'] text-[32px] italic font-medium text-[#2B2B2B]">
        Tasnim Tanny
      </h2>

      <span className="text-sm tracking-[0.18em] uppercase text-neutral-600">
        Graphic Designer
      </span>
    </Link>
  );
};

export default NavLogo;
