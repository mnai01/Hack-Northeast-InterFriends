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
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import classes from './Navbar.module.css';

const NavbarUnprotected = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transition, setTransition] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const transitionEnded = () => setTransition(!transition);

  return (
    <div onTransitionEnd={(e) => transitionEnded}>
      {console.log(transition)}
      <Navbar sticky='top' color='dark' dark expand='md'>
        <NavbarBrand tag={Link} to='/'>
          Farfriends
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <Col>
              <NavItem>
                <NavLink tag={Link} to='/'>
                  World
                </NavLink>
              </NavItem>
            </Col>
          </Nav>
          {isOpen ? (
            <Nav navbar>
              <Col>
                <NavItem>
                  <NavLink tag={Link} to='/Login'>
                    Login
                  </NavLink>
                </NavItem>
              </Col>
            </Nav>
          ) : (
            <>
              <Col xs='12' sm='4' md='3' lg='2' className={classes.navbarInput}>
                <Input size='sm' type='text' placeholder='Username' />
              </Col>
              <Col className={classes.navbarInput} xs='12' sm='4' md='3' lg='2'>
                <Input size='sm' type='text' placeholder='password' />
              </Col>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarUnprotected;
