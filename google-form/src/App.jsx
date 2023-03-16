import React, { Component } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

const Row = styled('div')`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: { data: '', error: '' },
      lastName: { data: '', error: '' },
      email: { data: '', error: '' },
      password: { data: '', error: '' },
      confirmPassword: { data: '', error: '' },
      error: { firstName: '' },
    };
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: { ...this.state[name], data: value } });
  };

  setError(name, error) {
    this.setState({ [name]: { ...this.state[name], error } });
  }

  removeError(name) {
    this.setState({ [name]: { ...this.state[name], error: '' } });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } =
      this.state;

    if (firstName.data === '') {
      this.setError('firstName', 'Enter first Name');
    } else {
      this.removeError('firstName');
    }

    if (lastName.data === '') {
      this.setError('lastName', 'Enter last Name');
    } else {
      this.removeError('lastName');
    }

    if (email.data === '') {
      this.setError('email', 'Choose your username');
    } else {
      if (email.data.length < 6 || email.data.length > 30) {
        this.setError(
          'email',
          'Sorry, your username must be between 6 and 30 characters long'
        );
      } else {
        this.removeError('email');
      }
    }

    if (password.data === '') {
      this.setError('password', 'Enter a password');
    } else {
      if (password.data.length < 8) {
        this.setError('password', 'Use 8 or more characters for your password');
      } else {
        this.removeError('password');
      }
    }

    if (confirmPassword.data === '') {
      this.setError('confirmPassword', 'Confirm your password');
    } else {
      if (confirmPassword.data !== password.data) {
        this.setError(
          'confirmPassword',
          "Those passwords didn't match. Try again."
        );
      } else {
        this.removeError('confirmPassword');
      }
    }
  };

  render() {
    const { firstName, lastName, email, password, confirmPassword } =
      this.state;

    return (
      <>
        <Row>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={this.onInputChange}
            name="firstName"
            error={firstName.error.length !== 0}
            helperText={firstName.error}
          />

          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={this.onInputChange}
            name="lastName"
            error={lastName.error.length !== 0}
            helperText={lastName.error}
          />
        </Row>

        <Row>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            type="email"
            onChange={this.onInputChange}
            name="email"
            error={email.error.length !== 0}
            helperText={email.error}
          />
        </Row>

        <Row>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={this.onInputChange}
            name="password"
            error={password.error.length !== 0}
            helperText={password.error}
          />
          <TextField
            id="outlined-basic"
            label="Confirm"
            variant="outlined"
            type="password"
            onChange={this.onInputChange}
            name="confirmPassword"
            error={confirmPassword.error.length !== 0}
            helperText={confirmPassword.error}
          />
        </Row>

        <Row>
          <Button type="submit" onClick={this.onSubmit} variant="contained">
            Next
          </Button>
        </Row>
      </>
    );
  }
}
