import React, {useState} from 'react'

const Toggle = () => {
    const [status, setStatus] = useState(true)
  return (
    <div>
     
      <button onClick={() => setStatus(!status)}>Hide/Show</button>
      {
       status ? <h1>hello world</h1> : null
      }
    </div>
  )
}

export default Toggle
