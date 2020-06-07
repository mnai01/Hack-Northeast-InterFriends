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
import { DateInput, DateInputWithLabel } from 'ez-react-date-input';
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
  const [nativelanguage, setNativeLanguage] = useState('');
  const [country, setCountry] = useState('');

  const { register, auth } = useContext(GlobalContext);

  const Register = (e) => {
    console.log(username + ' ' + password);
    console.log(
      'user' + username,
      'passs' + password,
      'firstname' + firstname,
      'lastname' + lastname,
      DOB
    );
    register(
      username,
      password,
      firstname,
      lastname,
      DOB
      // email,
      // sex,
      // nativelanguage,
      // country
    );
    // Calling event.persist() on the synthetic event removes the event from the pool allowing references to the event to be retained asynchronously.
    // e.preventDefault gives error
    e.persist();
  };

  let today = new Date();
  let year = today.getFullYear();
  return (
    <div className={classes.container}>
      {auth && <Redirect to={{ pathname: '/' }} />}
      <AvForm className={classes.loginForm} onValidSubmit={Register}>
        <h1 className='text-center'>Farfriends</h1>
        <Row>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <AvField
                type='email'
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
                onChange={(e) => setFirstname(e.target.value)}
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
                onChange={(e) => setLastname(e.target.value)}
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
                onChange={(e) => setCountry(e.target.value)}
                name='Choose Country...'
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
              <Label>Date of Birth</Label>
              <DateInputWithLabel
                invalidColor='#d65151'
                className={classes.datePicker}
                onChange={(e) => {
                  setDOB(e.value);
                }}
                name='myFormName'
                outputFormat='YYYY-MM-DD'
                formFormat='DDD-MMM-YYYY'
                minYear={1900}
                maxYear={year}
                valueOnMount={false}
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
                onChange={(e) => setSex(e.target.value)}
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
                onChange={(e) => setNativeLanguage(e.target.value)}
                required
              >
                {languageOptions}
              </AvField>
            </FormGroup>
          </Col>
        </Row>
        <Button size='lg' block>
          Register
        </Button>
      </AvForm>
    </div>
  );
}
