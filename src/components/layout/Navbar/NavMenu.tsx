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
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-5 lg:flex xl:gap-7"
    >
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.href}
          className={({ isActive }) =>
            [
              "flex items-center justify-center",
              "rounded-md",
              "px-5 py-[5px]",
              "text-[9px] font-medium",
              "transition-all duration-200",
              "xl:text-[10px]",
              isActive
                ? "bg-[#B94B4B] text-white"
                : "text-[#111111] hover:text-[#B94B4B]",
            ].join(" ")
          }
        >
          {link.name}
        </NavLink>
      ))}

      <NavLink
        to="/contact"
        className="ml-1 flex items-center gap-[2px] px-1 py-[5px] text-[9px] font-medium text-[#111111] transition-colors duration-200 hover:text-[#B94B4B] xl:text-[10px]"
      >
        <span>Hire me</span>

        <ArrowUpRight size={12} strokeWidth={2} aria-hidden="true" />
      </NavLink>
    </nav>
  );
};

export default NavMenu;
