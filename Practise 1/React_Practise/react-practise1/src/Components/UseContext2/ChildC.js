import React, { useContext } from 'react'
import { data1, data2 } from './UseContext2Parent'

const ChildC = () => {
    const name = useContext(data1)
    const email = useContext(data2)
  return (
    <div>
      <h2>My name is {name} and email is {email}</h2>
    </div>
  )
}

export default ChildC
