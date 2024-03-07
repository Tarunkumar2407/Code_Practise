import React, {forwardRef} from 'react'

const ForwardRefChild = (props, ref) => {
    console.log(props)
  return (
    <div>
      <input type='text' ref = {ref} ></input>
    </div>
  )
}

export default forwardRef(ForwardRefChild)
