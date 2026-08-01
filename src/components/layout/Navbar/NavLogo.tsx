import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="leading-none" aria-label="Tasnim Tanny">
      <h1 className="font-clash text-3xl italic font-semibold tracking-tight text-[#2B2B2B]">
        Tasnim Tanny
      </h1>

      <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#6A6A6A]">
        Graphic Designer
      </p>
    </Link>
  );
};

export default NavLogo;
