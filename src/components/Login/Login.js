import React, { useContext, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link, Redirect } from 'react-router-dom';
import classes from './Login.module.css';
import { GlobalContext } from '../../context/GlobalState';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, auth } = useContext(GlobalContext);

  const LoginPress = async (e) => {
    console.log(username + ' ' + password);
    // await login(username, password);
    // Calling event.persist() on the synthetic event removes the event from the pool allowing references to the event to be retained asynchronously.
    // e.preventDefault gives error
    e.persist();
  };

  const RegisterRedirect = (e) => {
    e.persist();
    return <Redirect to={{ pathname: '/Register' }} />;
  };

  return (
    <div className={classes.container}>
      {auth && <Redirect to={{ pathname: '/' }} />}
      <Form className={classes.loginForm}>
        <h1 className='text-center'>Farfriends</h1>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type='text'
            name='email'
            placeholder='Email address'
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            name='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button size='lg' block onClick={LoginPress}>
          Login
        </Button>
        <Button size='lg' block onClick={LoginPress}>
          <Link className={classes.link} to='/Register'>
            Register
          </Link>
        </Button>
      </Form>
    </div>
  );
}
