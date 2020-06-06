import React, { useContext, useState } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Route, Link, Redirect } from 'react-router-dom';
import classes from './Login.module.css';
import { GlobalContext } from '../../context/GlobalState';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, auth, loginError } = useContext(GlobalContext);

  const LoginPress = async (e) => {
    console.log(username + ' ' + password);
    await login(username, password);
    console.log(loginError);

    // if (loginError) {
    //   toast.error('Could not find account', {
    //     position: 'top-right',
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }
    // Calling event.persist() on the synthetic event removes the event from the pool allowing references to the event to be retained asynchronously.
    // e.preventDefault gives error
    e.persist();
  };

  return (
    <div className={classes.container}>
      {auth && <Redirect to={{ pathname: '/' }} />}
      <AvForm className={classes.loginForm} onValidSubmit={LoginPress}>
        <h1 className='text-center'>Farfriends</h1>
        <FormGroup>
          <Label>Email</Label>
          <AvField
            type='text'
            name='email'
            placeholder='Email address'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <AvField
            type='password'
            name='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button size='lg' block>
          Login
        </Button>

        <Link className={classes.link} to='/Register'>
          <Button className='mt-3' size='lg' block>
            Register
          </Button>
        </Link>
      </AvForm>
    </div>
  );
}
