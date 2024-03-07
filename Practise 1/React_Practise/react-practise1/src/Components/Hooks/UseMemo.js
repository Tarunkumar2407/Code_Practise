import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState(5)

    const multiMemo = useMemo(() => {
        console.log("multi-count")
        return count * 2
    }, [count]) 
  return (
    <div>
      <h2>{count}</h2>
      <h2>{items}</h2>
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => setItems(items + 5)}>update items</button>
      <h2>{multiMemo}</h2>
    </div>
  )
}

export default UseMemo
