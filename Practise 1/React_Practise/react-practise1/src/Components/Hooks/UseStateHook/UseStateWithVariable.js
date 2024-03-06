import React, { useState } from 'react'

const UseStateWithVariable = () => {
    const [name, setName] = useState("Tarun")
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Ravi")}>Update Name</button>
    </div>
  )
}

export default UseStateWithVariable
