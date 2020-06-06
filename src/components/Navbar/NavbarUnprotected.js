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
  Input,
  Col,
  Button,
  Form,
} from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import { toast } from 'react-toastify';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Navbar.module.css';

const NavbarUnprotected = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const { login, loginError } = useContext(GlobalContext);

  const Validate = (e) => {
    console.log(username + ' ' + password);

    if (
      /^[a-zA-Z0-9_.-]+$/.test(username) &&
      /^[a-zA-Z0-9_.-]+$/.test(password)
    ) {
      console.log(username + ' ' + password);
      login(username, password);

      // Calling event.persist() on the synthetic event removes the event from the pool allowing references to the event to be retained asynchronously.
      // e.preventDefault gives error
      e.persist();
      console.log(loginError);
    } else {
      toast.error('Please enter a Username and Password', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Calling event.persist() on the synthetic event removes the event from the pool allowing references to the event to be retained asynchronously.
      // e.preventDefault gives error
      e.persist();
    }
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar sticky='top' color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/'>
          Farfriends
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <Col>
              {isOpen ? (
                <NavItem onClick={toggleNavbar}>
                  <NavLink tag={Link} to='/'>
                    World
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink tag={Link} to='/'>
                    World
                  </NavLink>
                </NavItem>
              )}
            </Col>
          </Nav>
          {isOpen ? (
            <Nav navbar>
              <Col>
                <NavItem onClick={toggleNavbar}>
                  <NavLink tag={Link} to='/Login'>
                    Login
                  </NavLink>
                </NavItem>
              </Col>
            </Nav>
          ) : (
            <>
              <Col xs='12' sm='4' md='3' lg='2' className={classes.navbarInput}>
                <Input
                  size='sm'
                  type='email'
                  placeholder='Username'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
              <Col className={classes.navbarInput} xs='12' sm='4' md='3' lg='2'>
                <Input
                  size='sm'
                  type='password'
                  placeholder='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
              <Col xs='0' className={classes.navbarInput}>
                <Button size='sm' onClick={Validate}>
                  Login
                </Button>
              </Col>
            </>
          )}
        </Collapse>
      </Navbar>
      <Backdrop show={isOpen} clicked={toggleNavbar} />
    </div>
  );
};

export default NavbarUnprotected;
