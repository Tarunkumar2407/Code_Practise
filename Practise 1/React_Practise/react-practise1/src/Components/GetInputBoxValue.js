import React, { useState } from 'react'

const GetInputBoxValue = () => {
    const [data, setData] = useState("");
    const [print, setPrint] = useState(false)
  return (
    <div>
      <input onChange={(e) => setData(e.target.value)}></input>
      <button onClick={() => setPrint(true)}>Show Data</button>
      {
        print ? <h2>{data}</h2> : null
      }
      
    </div>
  )
}

export default GetInputBoxValue
