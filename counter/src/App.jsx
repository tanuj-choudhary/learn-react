import React, { Component } from 'react'

export default class App extends Component {

  state = { counter: 0 }

  incrementCount = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
  }

  incrementCountUsingPrevState = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  render() {
    const { counter } = this.state;
    console.log('Rerender');

    return (
      <div>
        <p>Counter: {counter}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.incrementCountUsingPrevState}>Increment prevState</button>
      </div>
    )
  }
}
