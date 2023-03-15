import { Component } from 'react';
import './form.css';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    number: '',
    vehicles: {},
    gender: '',
    color: '',
    url: '',
  };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  onCheckBoxChange = (e) => {
    const { checked, value } = e.target;

    if (!checked) {
      this.setState((prevState) => {
        const newState = { ...prevState };
        delete newState.vehicles[value];
        return newState;
      });
    } else {
      this.setState((prevState) => {
        const newState = { ...prevState };
        newState.vehicles[value] = 1;
        return newState;
      });
    }
  };

  onRadioButtonChanged = (e) => {
    this.setState({ gender: e.target.value });
  };

  onColorChange = (e) => {
    this.setState({ color: e.target.value });
  };

  onURLChange = (e) => {
    this.setState({ url: e.target.value });
  };

  onDateChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  render() {
    const {
      name,
      email,
      password,
      number,
      vehicles,
      gender,
      color,
      url,
      date,
    } = this.state;

    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input onChange={this.onNameChange} type="text" />
        <span>{name}</span>

        <br />

        <label htmlFor="email">Email:</label>
        <input onChange={this.onEmailChange} type="email" />
        <span>{email}</span>

        <br />

        <label htmlFor="password">Password:</label>
        <input onChange={this.onPasswordChange} type="password" />
        <span>{password}</span>

        <br />

        <label htmlFor="number">Number:</label>
        <input onChange={this.onNumberChange} type="number" />
        <span>{number}</span>

        <br />

        <input
          onChange={this.onCheckBoxChange}
          type="checkbox"
          name="vehicle"
          id="car"
          value="car"
        />
        <label htmlFor="car">Car</label>

        <input
          onChange={this.onCheckBoxChange}
          type="checkbox"
          name="vehicle"
          id="bike"
          value="bike"
        />
        <label htmlFor="bike">Bike</label>

        <input
          onChange={this.onCheckBoxChange}
          type="checkbox"
          name="vehicle"
          id="truck"
          value="truck"
        />
        <label htmlFor="truck">Truck</label>

        <div>
          Checkbox Selected:
          {Object.keys(vehicles).map((vehicle) => (
            <span className="vehicle" key={vehicle}>
              {vehicle}
            </span>
          ))}
        </div>

        <br />

        <input
          onChange={this.onRadioButtonChanged}
          type="radio"
          name="gender"
          id="male"
          value="male"
        />
        <label htmlFor="male">Male:</label>

        <input
          onChange={this.onRadioButtonChanged}
          type="radio"
          name="gender"
          id="female"
          value="female"
        />
        <label htmlFor="female">Female:</label>

        <input
          onChange={this.onRadioButtonChanged}
          type="radio"
          name="gender"
          id="other"
          value="other"
        />
        <label htmlFor="other">Other:</label>

        <div>Radio Button Selected: {gender}</div>

        <br />

        <label htmlFor="color">Choose color:</label>
        <input
          onChange={this.onColorChange}
          type="color"
          name="color"
          id="color"
        />
        <span>{color}</span>

        <br />

        <label htmlFor="URL">URL:</label>
        <input onChange={this.onURLChange} type="url" />
        <span>{url}</span>

        <br />

        <label htmlFor="date">Date:</label>
        <input onChange={this.onDateChange} type="date" />
        <span>{date}</span>
      </form>
    );
  }
}
