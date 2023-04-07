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
const Navbar = () =>{
    return(
      <Nav className='navbar fixed-top'>
      <Bars />
      <NavMenu>
        <NavLink to='/GetBalance' activeStyle>
          Open Banking
        </NavLink>
        <NavLink to='/fastlink' activeStyle>
          Link Account
        </NavLink>
        <NavLink to='/profile' activeStyle>
          Profile
        </NavLink>
        <NavLink to='/' activeStyle>
          Logout
        </NavLink>
      </NavMenu>
    </Nav>
    )
}

export default Navbar;