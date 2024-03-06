import React, { useState } from 'react'

const UseStateWithArray = () => {
    const [items, setItems] = useState([])

    const handleAddNumber = () => {
        setItems([...items, {
            id : items.length + 1,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
  return (
    <div>
      <button onClick={handleAddNumber}>Add a number</button>
      <ul>
        {items.map((item) => {
            return (
                <li key={item.id}>{item.value}</li>
            )
        })}
      </ul>
    </div>
  )
}

export default UseStateWithArray
