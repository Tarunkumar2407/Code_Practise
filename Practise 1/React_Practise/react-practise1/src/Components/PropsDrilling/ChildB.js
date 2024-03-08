import React from 'react'
import ChildC from './ChildC'

const ChildB = ({name, email}) => {
  return (
    <div>
      <ChildC name={name} email = {email}/>
    </div>
  )
}

export default ChildB
