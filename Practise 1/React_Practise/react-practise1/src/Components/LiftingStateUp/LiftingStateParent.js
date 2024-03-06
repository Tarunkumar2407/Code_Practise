import React from 'react'
import LiftingStateChild from './LiftingStateChild'

const LiftingStateParent = () => {
    const alertFunc = (name) => {
        alert(name)
        console.log(name)

    }
  return (
    <div>
      <h2>Lifting State Up</h2>
      <LiftingStateChild func = {alertFunc}/>
    </div>
  )
}

export default LiftingStateParent
