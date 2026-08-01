import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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
    <nav className="hidden items-center gap-10 lg:flex">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.href}
          className={({ isActive }) =>
            `
            rounded-full
            px-5
            py-2
            text-sm
            font-medium
            transition-all
            duration-300

            ${
              isActive
                ? "bg-[#A74C4C] text-white"
                : "text-neutral-700 hover:text-black"
            }
          `
          }
        >
          {link.name}
        </NavLink>
      ))}

      <NavLink to="/contact" className="flex items-center gap-1 font-medium">
        Hire me
        <ArrowUpRight size={18} />
      </NavLink>
    </nav>
  );
};

export default NavMenu;
