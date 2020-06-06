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
import Backdrop from '../Backdrop/Backdrop';

const NavbarProtected = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar sticky='top' color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/'>
          Farfriends
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={isOpen} navbar>
          {isOpen ? (
            <>
              <Nav className='mr-auto' navbar>
                <NavItem onClick={toggleNavbar}>
                  <NavLink tag={Link} to='/World'>
                    World
                  </NavLink>
                </NavItem>
                <NavItem onClick={toggleNavbar}>
                  <NavLink tag={Link} to='/Profile'>
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem onClick={toggleNavbar}>
                  <NavLink tag={Link} to='/Search'>
                    Search
                  </NavLink>
                </NavItem>
                <NavItem onClick={toggleNavbar}>
                  <NavLink tag={Link} to='/Chat'>
                    Chat
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className='mr-right' navbar>
                <NavItem onClick={toggleNavbar}>
                  <NavLink tag={Link} to='/Chat'>
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
            </>
          ) : (
            <>
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
            </>
          )}
        </Collapse>
      </Navbar>
      <Backdrop show={isOpen} clicked={toggleNavbar} />
    </div>
  );
};

export default NavbarProtected;
