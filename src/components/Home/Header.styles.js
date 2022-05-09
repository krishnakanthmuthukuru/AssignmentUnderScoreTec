import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: black;
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
`;

export const NavLink = styled(Link)`
  color: #808080;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  column-gap: 10px;
`;

export const NavBtnLink = styled(Link)`
  color: #808080;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &.active {
    color: white;
  }
`;

export const Content = styled.h1`
  font-weight: 36px;
  font-family: cursive;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 70vh;
`;
