import React, {useState} from 'react'

const ConditionalRendering = () => {
    const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div>
      {
        loggedIn ? <h2>Welcome Tarun</h2> : <h2>Welcome User</h2>
      }
      <button onClick={() => setLoggedIn(true)}>Login</button>
    </div>
  )
}

export default ConditionalRendering
