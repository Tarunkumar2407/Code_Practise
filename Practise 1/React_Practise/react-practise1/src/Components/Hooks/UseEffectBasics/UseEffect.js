import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setTimeout(() => {
            setCount(count + 1)
        },1000)
        return () => clearTimeout(id)
    })
  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default UseEffect
