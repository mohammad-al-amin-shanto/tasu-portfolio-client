import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
];

const NavMenu = () => {
  return (
    <nav className="hidden items-center gap-2 rounded-full bg-white/60 p-2 shadow-lg backdrop-blur-xl lg:flex">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.href}
          className={({ isActive }) =>
            `
              rounded-full
              px-6
              py-3
              text-sm
              font-medium
              transition-all
              duration-300

              ${
                isActive
                  ? "bg-[#A74C4C] text-white shadow-md"
                  : "text-[#494949] hover:bg-white hover:text-[#A74C4C]"
              }
            `
          }
        >
          {link.name}
        </NavLink>
      ))}

      <NavLink
        to="/contact"
        className="ml-3 flex items-center gap-2 rounded-full border border-[#A74C4C] px-5 py-3 text-sm font-medium text-[#A74C4C] transition hover:bg-[#A74C4C] hover:text-white"
      >
        Hire Me
        <ArrowUpRight size={18} />
      </NavLink>
    </nav>
  );
};

export default NavMenu;
