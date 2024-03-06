import React from 'react'
import Child from './Child'

const Parent = () => {
    const getData = () => {
        alert("I am from parent")
    }
  return (
    <div>
      <Child func = {getData}/>
    </div>
  )
}

export default Parent
