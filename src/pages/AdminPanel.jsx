import React from "react";
import NavbarAdmin from "../components/adminPanel/NavbarAdmin";
import "../components/adminPanel/admin.css";
import SidebarAdmin from "../components/adminPanel/SidebarAdmin";

function AdminPanel() {
  return (
    <>
      <NavbarAdmin />
      <div>Esta es la home de admin</div>
      <SidebarAdmin />
    </>
  );
}

export default AdminPanel;
