import React, { useState } from 'react'

const BasicFormValidation = () => {
    const [user, setUser] = useState("")
    const [userError, setUserError] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)

    const handleName = (e) => {
        let item = e.target.value
           setUser(e.target.value)
           if(item.length < 4){
            setUserError(true)
           }
           else{
            setUserError(false)
           }
    }

    const handlePassword = (e) => {
        let item = e.target.value
        setPassword(e.target.value)
        if(item.length < 4){
            setPasswordError(true)
        }
        else{
            setPasswordError(false)
        }
    }

    const handleLoginHandler = (e) => {
        e.preventDefault()
        if(user.length < 4 || password.length < 4){
            alert("Invalid Data")
        }
        else{
            alert("All Good")
        }
    }
  return (
    <div>
      <label for="name">Name </label>
      <input type='text' onChange={handleName}></input>
      {userError ? <span>Invalid Name</span> : null}
        <br></br>

      <label for="password">Password </label>
      <input type='password' onChange={handlePassword}></input>
      {
        passwordError ? <span>Invalid Password</span> : null
      }<br></br>
      <button type='submit' onClick={handleLoginHandler}>Submit</button>
    </div>
  )
}

export default BasicFormValidation
