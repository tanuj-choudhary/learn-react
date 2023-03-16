import { Component } from 'react';
import styled from 'styled-components';

const Input = styled('input')`
  width: 100%;
`;

const DivFormElement = styled('div')`
  padding: 12px;
  margin-bottom: 6px;
  background-color: beige;
`;

export default class FormElement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
    };
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName } = this.state;
    console.log('Rerender');
    return (
      <>
        <DivFormElement>
          <label htmlFor="firstName">firstName:{firstName}</label>
          <Input
            onChange={this.onInputChange}
            type="text"
            name="firstName"
            placeholder="enter first name"
          ></Input>
        </DivFormElement>
      </>
    );
  }
}
