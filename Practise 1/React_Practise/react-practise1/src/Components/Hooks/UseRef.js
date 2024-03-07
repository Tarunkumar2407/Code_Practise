import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null)
    const handleInput = () => {
        inputRef.current.value = "abc"
        inputRef.current.style.color = "yellow"
        inputRef.current.focus()
        console.log(inputRef)
    }
  return (
    <div>
      <input type='text' ref={inputRef}></input>
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default UseRef
