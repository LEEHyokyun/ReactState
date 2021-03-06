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

  constructor(props){
    super(props)
    console.log("constructor first?")
  }

  componentDidMount(){
    console.log("Component did mount first?")
  }

  componentDidUpdate(){
    console.log("Component did update first?")
  }

  componentWillUnmount(){
    console.log("Component will unmount first?")
  }

  render(){
    console.log("render first?")
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
