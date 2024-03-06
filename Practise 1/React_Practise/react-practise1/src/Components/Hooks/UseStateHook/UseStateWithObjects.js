import React, { useState } from 'react'

const UseStateWithObjects = () => {
    const [name, setName] = useState({
        fname : "",
        lname : ""
    })
  return (
    <div>
      <input type='text' onChange={(e) => setName({...name, fname : e.target.value})}></input><br></br>
      <input type="text" onChange={(e) => setName({...name, lname : e.target.value})}/>
      <h1>{name.fname} {name.lname}</h1>
    </div>
  )
}

export default UseStateWithObjects
