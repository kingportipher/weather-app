import React, { useState } from 'react'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin (event, ) {
    event.preventDefault()

    let data = {
      email,
      password
    }

    console.log("About to Login", data)
  }

  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input type="email" id="email-box" value={email}
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit"
            onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
