import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './login.module.css'

function Login (props) {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin (event, ) {
    event.preventDefault()

    let data = {
      email,
      password
    }

    console.log("About to Login", data)

    // ...
    // Attempt login here probably via an API
    // ...
    const userData = {
      name: "Victor Abrokwah",
      location: "Accra",
      history: []
    }

    // After login, set the userData to the data of our new user
    props.updateUser(userData)

    history.push('/')
  }

  return (
    <div className={styles.login}>
      <form>
        {/* <label>Email</label> */}
        <input type="email" placeholder="Enter Email" id="email-box" value={email}
          onChange={e => setEmail(e.target.value)} />
        {/* <label>Password</label> */}
        <input type="password" placeholder="Password" value={password}
          onChange={e => setPassword(e.target.value)} />

        <button type="submit"
          onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
