import React, { useState } from 'react'
import UseCounter from './UseCounter'

const CounterMain = () => {
   const [count, increment, decrement] = UseCounter()

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() =>increment()}>Increment</button>
      <button onClick={() =>decrement()}>Decrement</button>
    </div>
  )
}

export default CounterMain
