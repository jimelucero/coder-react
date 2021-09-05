import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          {/* <img src="" alt="" /> */}
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to ="/about" activeStyle>
            About
          </NavLink>
          <NavLink to ="/servicies" activeStyle>
            Servicies
          </NavLink>
          <NavLink to ="/contact-us" activeStyle>
            Contact US
          </NavLink>
          <NavLink to ="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>   
  )
};

export default Navbar;