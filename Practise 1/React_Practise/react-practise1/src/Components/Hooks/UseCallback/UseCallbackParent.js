import React, {useCallback, useState} from 'react'
import UseCallbackChild from './UseCallbackChild'

const UseCallbackParent = () => {

    const [add, setAdd] = useState(0)
    const [count, setCount] = useState(5)

    const learning = useCallback(() => {
        //some data
    }, [count])
  return (
    <div>
      <h2>{add}</h2>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <UseCallbackChild learning = {learning}/>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

export default UseCallbackParent
