import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class FirstClass extends Component {
  render() {
    return (
      <div>
        <h1>My name is {this.props.name}</h1>
        <h1>My age is {this.props.age}</h1>
      </div>
    )
  }
}

FirstClass.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
}

