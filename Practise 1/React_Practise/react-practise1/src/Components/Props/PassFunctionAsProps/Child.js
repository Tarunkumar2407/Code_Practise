import React from 'react'

const Child = (props) => {
  return (
    <div>
      <button onClick={props.func}>Call Function</button>
    </div>
  )
}

export default Child
