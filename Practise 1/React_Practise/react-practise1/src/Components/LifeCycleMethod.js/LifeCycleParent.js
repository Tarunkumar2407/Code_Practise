import React, { useEffect, useState } from 'react'
import ChildLife from './ChildLife'

const LifeCycleParent = () => {
    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(true)
    useEffect(() => {
        console.log("component did update")
    },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setStatus(!status)}>Toggle Child</button>
      {
        status && <ChildLife />
      }
    </div>
  )
}

export default LifeCycleParent
