import React from 'react'
import './App.css';
import PropTypes from 'prop-types'

class App extends React.Component{
  state = {
    count : 0
  }

  plus = () => {
    this.setState({count: this.state.count + 1})
    //this.setState(current => ({count : current.count + 1}))
  }

  minus = () => {
    this.setState({count: this.state.count -1})
    //this.setState(current => ({count : current.count - 1}))
  }

  render(){
    return (
      <>
      <h1>class occurs</h1>
      <h3>{this.state.count}</h3>
      <button onClick={this.plus}>PLUS</button>
      <button onClick={this.minus}>MINUS</button>
      </>
  )
}
}

export default App
