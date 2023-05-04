import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Avatar } from "@chakra-ui/react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { setLoggedUser } from "../../redux/sessionReducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavbarAdmin() {
  const loggedUser = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLoggedUser({ token: null, user: null }));
    navigate("/");
  };

  return (
    <>
      <Navbar className="navbar-admin">
        <Navbar.Brand className="navbar-text nav-welcome-admin">
          {loggedUser.firstname} {loggedUser.lastname}
        </Navbar.Brand>
        <div className="d-flex ms-auto me-4">
          <div className="d-flex align-items-center me-4">
            <Avatar
              src={
                loggedUser.token
                  ? `${import.meta.env.VITE_APP_API_URL}/img/users/${
                      loggedUser.avatar
                    }`
                  : `${
                      import.meta.env.VITE_APP_API_URL
                    }/img/users/no_user_log.webp`
              }
              alt={
                loggedUser.token ? `${loggedUser.firstname}` : "user picture"
              }
              className="navbar-avatar ms-3 ms-lg-4 me-1"
            />
            <NavDropdown id="basic-nav-dropdown" className="dropdown-nav-admin">
              {loggedUser.token ? (
                <>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item href="/login/admin">Login</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </div>
          <Navbar.Brand href="/admin" className="navbar-text ms-auto me-4">
            Admin panel
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarAdmin;
