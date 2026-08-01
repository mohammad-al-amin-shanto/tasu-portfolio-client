import Container from "@/components/shared/Container";

import MobileMenu from "./MobileMenu";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 py-6">
      <Container>
        <div className="flex items-center justify-between">
          <NavLogo />

          <NavMenu />

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
