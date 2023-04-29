import React from "react";
import { Link } from "react-router-dom";

function SidebarAdmin() {
  return (
    <nav className="sidebar col-sm-3">
      <ul className="nav flex-column">
        <li className="nav-item-sidebar">
          <Link to="/admin" className="nav-link">
            <i className="bi bi-speedometer2 icon-sidebar mx-2"></i>
            <span className="nav-link-text">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item-sidebar">
          <Link to="/admin/services" className="nav-link">
            <i className="bi bi-card-list icon-sidebar mx-2"></i>
            <span className="nav-link-text">Services</span>
          </Link>
        </li>
        <li className="nav-item-sidebar">
          <Link to="/admin/customers" className="nav-link">
            <i className="bi bi-people icon-sidebar mx-2"></i>
            <span className="nav-link-text">Customers</span>
          </Link>
        </li>
        <li className="nav-item-sidebar">
          <Link to="/admin/list" className="nav-link">
            <i className="bi bi-person-lock icon-sidebar mx-2"></i>
            <span className="nav-link-text">Admin</span>
          </Link>
        </li>
        <li className="nav-item-sidebar">
          <Link to="/admin/vehicles" className="nav-link">
            <i className="bi bi-car-front icon-sidebar mx-2"></i>
            <span className="nav-link-text">Vehicles</span>
          </Link>
        </li>
        <li className="nav-item-sidebar">
          <Link to="/admin/brands" className="nav-link">
            <i className="bi bi-bookmarks icon-sidebar mx-2"></i>
            <span className="nav-link-text">Brands</span>
          </Link>
        </li>
        <li className="nav-item-sidebar">
          <Link to="/admin/types" className="nav-link">
            <i className="bi bi-funnel icon-sidebar mx-2"></i>
            <span className="nav-link-text">Types</span>
          </Link>
        </li>
        <div className="divided mt-3"></div>
        <li className="nav-item-sidebar mt-3">
          <Link to="/" className="nav-link">
            <i className="bi bi-globe2 icon-sidebar mx-2"></i>
            <span className="nav-link-text">Website</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SidebarAdmin;
