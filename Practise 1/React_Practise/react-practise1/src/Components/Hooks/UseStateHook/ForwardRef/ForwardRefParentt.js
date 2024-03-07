import Reac, {useRef} from 'react'
import ForwardRefChild from './ForwardRefChild'

const ForwardRefParentt = () => {
    const inputRef = useRef(null)

    const updateRef = () => {
        inputRef.current.value = "Tarun"
    }
  return (
    <div>
    <h2>Forward Ref</h2>
    <ForwardRefChild ref = {inputRef} />
    <button onClick={updateRef}>controlled Input from Parent</button>
    </div>
  )
}

export default ForwardRefParentt
