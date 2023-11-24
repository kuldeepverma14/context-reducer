import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import "./navbar.css"
export default function Navbar() {
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4rem;
      li {
        list-style: none;
        .link {
          text-decoration: none;
          &:link,
          &:visited {
            font-size: 1.8rem;
            // text-transform:uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
          &:hover,&:active{
            color:${({theme})=>theme.colors.helper};
          }
        }
      }
    }
  `;
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li className="">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </li>{" "}
        </ul>
      </div>
    </Nav>
  );
}
