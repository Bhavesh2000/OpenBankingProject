import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
const LoginNavbar = () =>{
    return(
      <Nav>
      <Bars />

      <NavMenu>
        <NavLink to='/' activeStyle>
          Open Banking
        </NavLink>
        <NavLink to='/' activeStyle>
          Sign Up
        </NavLink>
      </NavMenu>
    </Nav>
    )
}

export default LoginNavbar;