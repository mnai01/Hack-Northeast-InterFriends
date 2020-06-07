import React, { useState } from 'react';
import cltypeses from './UserFilter.module.css';
import { countryOptions } from '../../CountryData';
import { languageOptions } from '../../LanguageData';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';

export default function UserFilter() {
  const countries = countryOptions;

  const ages = [];

  for (let i = 18; i <= 110; i++) {
    ages.push(<option value={i}>{i}</option>);
  }

  const [username, setUsername] = useState('');
  const [minAge, setMinAge] = useState('18');
  const [maxAge, setMaxAge] = useState('110');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [language, setLanguage] = useState('');
  const [htypePhoto, setHtypePhoto] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleUsername = (e) => {
    setUsername(e);
    console.log(e);
  };

  const handleMinAge = (e) => {
    setMinAge(e);
    console.log(e);
  };

  const handleMaxAge = (e) => {
    setMaxAge(e);
    console.log(e);
  };

  const handleGender = (e) => {
    setGender(e);
    console.log(e);
  };

  const handleLocation = (e) => {
    setLocation(e);
    console.log(e);
  };

  const handleLanguage = (e) => {
    setLanguage(e);
    console.log(e);
  };

  const handleHtypePhoto = (e) => {
    setHtypePhoto(e);
    console.log(e);
  };

  const handleGETFiltered = () => {
    //DISPATCH CALL HERE
  };

  return (
    <Container className='p-0'>
      <Form className={cltypeses.filterForm} onSubmit={(e) => submitHandler(e)}>
        <FormGroup>
          <Label>
            <strong>User Name</strong>
          </Label>
          <Input
            type='text'
            name='userName'
            placeholder='Username'
            onChange={(e) => handleUsername(e.target.value)}
          />
        </FormGroup>
        <hr />
        <FormGroup>
          <Label>
            <strong>Age</strong>
          </Label>

          <Input
            type='select'
            onChange={(e) => {
              handleMinAge(e.target.value);
            }}
          >
            <option disabled selected>
              Min age
            </option>
            {ages}
          </Input>

          <Input type='select' onChange={(e) => handleMaxAge(e.target.value)}>
            <option disabled selected>
              Max age
            </option>
            {ages}
          </Input>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label>
            <strong>Gender</strong>
          </Label>
          <br />
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                onChange={(e) => handleGender(e.target.value)}
              />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' /> Female
            </Label>
          </FormGroup>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label>
            <strong>Location</strong>
          </Label>
          <Input type='select' onChange={(e) => handleLocation(e.target.value)}>
            <option disabled selected>
              Choose Country...
            </option>
            {countries}
          </Input>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label>
            <strong>Language</strong>
          </Label>
          <Input
            type='select'
            name='languages'
            onChange={(e) => handleLanguage(e.target.value)}
          >
            <option disabled selected>
              Choose Language...
            </option>
            {languageOptions}
          </Input>
        </FormGroup>
        <hr />
        <Label>
          <strong>Must Have Photo</strong>
        </Label>
        <FormGroup check>
          <Label>
            <Input
              type='checkbox'
              onChange={(e) => handleHtypePhoto(e.target.value)}
            />
            Yes
          </Label>
        </FormGroup>

        <br />
        <Button type='submit' onClick={handleGETFiltered}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
