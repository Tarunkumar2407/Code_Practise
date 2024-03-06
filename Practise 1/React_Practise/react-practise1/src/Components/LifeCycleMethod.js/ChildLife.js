import React, { useEffect } from 'react'

const ChildLife = () => {

    useEffect(() => {
        console.log("component did mount")
        return ()=> {
            console.log("component will unmount")
        }
    },[])

  return (
    <div>
      <h1>I am child</h1>
    </div>
  )
}

export default ChildLife
