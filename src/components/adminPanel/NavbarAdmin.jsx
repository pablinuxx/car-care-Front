import React from "react";
import Navbar from "react-bootstrap/Navbar";

function NavbarAdmin() {
  return (
    <>
      <Navbar className="navbar-admin">
        <Navbar.Brand href="/admin" className="navbar-text ms-2">
          Admin panel
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default NavbarAdmin;
