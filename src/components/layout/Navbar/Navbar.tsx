import Container from "@/components/shared/Container";

import MobileMenu from "./MobileMenu";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <div className="flex h-[76px] items-start justify-between pt-6 sm:h-[88px] sm:pt-7">
          <NavLogo />

          <NavMenu />

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
