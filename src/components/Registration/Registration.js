import React, { useContext, useState } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from 'reactstrap';
import { Route, Link, Redirect } from 'react-router-dom';
import classes from './Registration.module.css';
import { GlobalContext } from '../../context/GlobalState';
import { countryOptions } from '../../CountryData';
import { languageOptions } from '../../LanguageData';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [DOB, setDOB] = useState('');
  const [sex, setSex] = useState('');
  const [nativeLanguage, setNativeLanguage] = useState('Afghanistan');
  const [country, setCountry] = useState('');

  const { login, auth } = useContext(GlobalContext);

  const Register = async (e) => {
    console.log(username + ' ' + password);
    await login(username, password);
    // Calling event.persist() on the synthetic event removes the event from the pool allowing references to the event to be retained asynchronously.
    // e.preventDefault gives error
    e.persist();
    return <Redirect to={{ pathname: '/' }} />;
  };

  return (
    <div className={classes.container}>
      {auth && <Redirect to={{ pathname: '/' }} />}
      <AvForm className={classes.loginForm}>
        <h1 className='text-center'>Farfriends</h1>
        <Row>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <AvField
                type='text'
                name='email'
                placeholder='First Name'
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>Password</Label>
              <AvField
                type='password'
                name='Password'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>Firstname</Label>
              <AvField
                type='text'
                name='firstname'
                placeholder='Firstname'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Lastname</Label>
              <AvField
                type='text'
                name='lastname'
                placeholder='Lastname'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>Country</Label>
              <AvField
                type='select'
                name='country'
                placeholder='Email'
                onChange={(e) => setPassword(e.target.value)}
                required
              >
                {countryOptions}
              </AvField>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>DOB</Label>
              <AvField
                type='text'
                name='lastname'
                placeholder='Lastname'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>Gender</Label>
              <AvField
                type='select'
                name='lastname'
                placeholder='Lastname'
                onChange={(e) => setPassword(e.target.value)}
                required
              >
                <option>Male</option>
                <option>Female</option>
              </AvField>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>Native Language</Label>
              <AvField
                type='select'
                name='lastname'
                placeholder='Lastname'
                onChange={(e) => setPassword(e.target.value)}
                required
              >
                {languageOptions}
              </AvField>
            </FormGroup>
          </Col>
        </Row>

        <Button size='lg' block onClick={Register}>
          Register
        </Button>
      </AvForm>
    </div>
  );
}
