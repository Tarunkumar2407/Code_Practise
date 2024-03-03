import React from 'react'

const ClickEvent = () => {

    const callMe = () => {
        alert("I am called")
    }

  return (
    <div>
      <button onClick={() => alert("callMe")}>click me</button>
    </div>
  )
}

export default ClickEvent
