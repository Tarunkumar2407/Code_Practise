import React from 'react'

const LiftingStateChild = ({func}) => {
    // console.log(props)
    const name = "Tarun"
  return (
    <div>
      <button onClick={() => func(name)}>call me</button>
    </div>
  )
}

export default LiftingStateChild
