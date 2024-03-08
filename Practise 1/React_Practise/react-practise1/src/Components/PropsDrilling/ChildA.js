import React from 'react'
import ChildB from './ChildB'

const ChildA = ({name, email}) => {
  return (
    <div>
      <ChildB name={name} email = {email}/>
    </div>
  )
}

export default ChildA
