import { Component } from "react";
import "./form.css";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    number: "",
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

  render() {
    const { name, email, password, number } = this.state;

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
      </form>
    );
  }
}
