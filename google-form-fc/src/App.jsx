import { useState } from 'react';
import './App.css';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

const Row = styled('div')`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const Col = styled('div')`
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled('div')`
  color: red;
  font-size: 14px;
  padding-top: 2px;
  padding-left: 5px;
`;

function App() {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFields((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    const { firstName, lastName, email, password, confirmPassword } = fields;

    if (firstName === '') {
      newErrors.firstName = 'Enter first Name';
    }

    if (lastName === '') {
      newErrors.lastName = 'Enter last Name';
    }

    if (email.length < 6 || email.length > 30) {
      newErrors.email =
        'Sorry, your username must be between 6 and 30 characters long';
    }

    if (email === '') {
      newErrors.email = 'Choose your username';
    }

    if (password.length < 8) {
      newErrors.password = 'Use 8 or more characters for your password';
    }

    if (password === '') {
      newErrors.password = 'Enter a password';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Those passwords didn't match. Try again.";
    }

    if (confirmPassword === '') {
      newErrors.confirmPassword = 'Confirm your password';
    }

    setErrors({ ...newErrors });
  };

  return (
    <>
      <Row>
        <Col>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={onInputChange}
            name="firstName"
          />
          {errors.firstName.length !== 0 && (
            <ErrorText>{errors.firstName}</ErrorText>
          )}
        </Col>

        <Col>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={onInputChange}
            name="lastName"
          />
          {errors.lastName.length !== 0 && (
            <ErrorText>{errors.lastName}</ErrorText>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            type="email"
            onChange={onInputChange}
            name="email"
          />
          {errors.email.length !== 0 && <ErrorText>{errors.email}</ErrorText>}
        </Col>
      </Row>

      <Row>
        <Col>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={onInputChange}
            name="password"
          />
          {errors.password.length !== 0 && (
            <ErrorText>{errors.password}</ErrorText>
          )}
        </Col>

        <Col>
          <TextField
            id="outlined-basic"
            label="Confirm"
            variant="outlined"
            type="password"
            onChange={onInputChange}
            name="confirmPassword"
          />
          {errors.confirmPassword.length !== 0 && (
            <ErrorText>{errors.confirmPassword}</ErrorText>
          )}
        </Col>
      </Row>

      <Row>
        <Button type="submit" onClick={onSubmit} variant="contained">
          Next
        </Button>
      </Row>
    </>
  );
}

export default App;
