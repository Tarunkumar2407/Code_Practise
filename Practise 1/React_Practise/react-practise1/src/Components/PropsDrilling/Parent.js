import React from 'react'
import ChildA from './ChildA'

const Parent = () => {
    const name = "Tarun";
    const email = "tarun@gmail.com"
  return (
    <div>
      <h1>Parent</h1>
      <ChildA name={name} email = {email}/>
    </div>
  )
}

export default Parent
