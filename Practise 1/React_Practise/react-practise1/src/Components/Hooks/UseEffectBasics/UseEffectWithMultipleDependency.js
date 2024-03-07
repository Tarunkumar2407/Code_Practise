import React, { useState, useEffect } from 'react'

const UseEffectWithMultipleDependency = ()=> {

 const [count, setCount] = useState(0)
 const [items, setItems] = useState(5)

 useEffect(() => {
    console.log("component did update")
 }, [count])
  return (
    <div>
      <h3>useEffect With Mulitple Dependency</h3>
      <h2>{count}</h2>
      <h2>{items}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setItems(items + 5)}>Increase Items</button>
    </div>
  )
}

export default UseEffectWithMultipleDependency
