import React, { Component } from 'react'

export default class user extends Component {

  constructor() {
    super()
  
    this.state = {
       name:"hayatul"
    }
  }

  // state ={
  //   name:"Md Hayatul",
  //   age:24

  // }
  change = () =>{
    this.setState({
      name:"Mr Sazwan Ali",
    });
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button type="text" value="click" onClick={() => this.change()}> click here</button>
      </div>
    )
  }
}
