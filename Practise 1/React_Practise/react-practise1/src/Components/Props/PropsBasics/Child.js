import React from 'react'

const Child = ({name, email}) => {
    // console.log(props)
  return (
    <div>
      <>
        <h2>{name}</h2>
        <h2>{email}</h2>
      </>
    </div>
  )
}

export default Child
