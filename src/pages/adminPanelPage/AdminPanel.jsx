import React from "react";
import NavbarAdmin from "../../components/adminPanel/NavbarAdmin";
import "../../styles/admin.css";
import SidebarAdmin from "../../components/adminPanel/SidebarAdmin";

function AdminPanel() {
  return (
    <>
      <NavbarAdmin />
      <SidebarAdmin />
    </>
  );
}

export default AdminPanel;
