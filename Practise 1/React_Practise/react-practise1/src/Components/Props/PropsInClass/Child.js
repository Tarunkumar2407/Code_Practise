import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
      </div>
    )
  }
}
