import React, { Component } from 'react'
import Child from "../PropsInClass/Child"

export default class Parents extends Component {
  render() {
    return (
      <div>
        <Child name="Tarun" age= {24}/>
      </div>
    )
  }
}
