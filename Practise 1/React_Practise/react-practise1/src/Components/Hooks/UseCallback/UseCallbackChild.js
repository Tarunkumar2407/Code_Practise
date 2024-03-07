import React, {memo} from 'react'

const UseCallbackChild = () => {
    console.log("child component")
  return (
    <div>
      
    </div>
  )
}

export default memo(UseCallbackChild)
