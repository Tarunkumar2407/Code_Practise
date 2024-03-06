import React, {useState} from 'react'

const TodoListApp = () => {
    const [items, setItems] = useState([])
    const [name, setName] = useState("")
    const handleAddItems = (e) => {
        setItems([...items, {
            id: items.length,
            value: name
        }])
    }
  return (
    <div>
      <input type='text' onChange={(e) => {
        setName(e.target.value)
      }} ></input>
      <button onClick={handleAddItems}>Add Item</button>
      <ul>
        {
            items.map((item) => {
                return (
                    <li>{item.value}</li>
                )
            })
        }
      </ul>
      
    </div>
  )
}

export default TodoListApp
