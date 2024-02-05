// React
import React from "react";
// Components
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";

function Navbar() {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
    </div>
  );
}

export default React.memo(Navbar);
