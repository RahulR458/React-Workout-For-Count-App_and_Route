import React, { Component } from 'react'
import "./Style.css"

export default class Counter extends Component {

  state = {
    counter : 0
  }

  onIncrement = ()=>{
    this.setState({
      counter: this.state.counter +1
    })
  }

  onDecrement = ()=>{
    this.setState({
      counter: this.state.counter -1
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Counter Component</h1>
        <h3>{this.state.counter}</h3>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    )
  }
}
