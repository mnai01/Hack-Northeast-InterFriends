import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const NavbarProtected = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar sticky='top' color='dark' dark expand='md'>
        <NavbarBrand tag={Link} to='/'>
          Farfriends
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink tag={Link} to='/World'>
                World
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/Profile'>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/Search'>
                Search
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/Chat'>
                Chat
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className='mr-right' navbar>
            <NavItem>
              <NavLink tag={Link} to='/Chat'>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarProtected;
