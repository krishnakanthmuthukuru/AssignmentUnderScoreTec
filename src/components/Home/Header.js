import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth, { authContext } from "../../hooks/useAuth";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./Header.styles";

const Header = () => {
  const { authed, logout } = useAuth(authContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  }
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavMenu>
        {!authed && (
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
            <NavBtnLink to="/register">SignUp</NavBtnLink>
          </NavBtn>
        )}
        {authed && (
          <NavBtn>
            <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    </>
  );
};

export default Header;
