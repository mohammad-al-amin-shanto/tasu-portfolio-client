import Container from "@/components/shared/Container";

import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-8">
      <Container className="flex items-center justify-between">
        <NavLogo />

        <NavMenu />

        <MobileMenu />
      </Container>
    </header>
  );
};

export default Navbar;
