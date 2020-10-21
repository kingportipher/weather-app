import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/login'

function App() {
  const [userData, setUserData] = useState(false)

  function updateLoggedInUserInfo (user) {
    setUserData(user)
  }

  return(
    <div className='app'>
      
      <Link to='/'> Home </Link>
      {
        userData ?
          <button onClick={e => updateLoggedInUserInfo(false)}>
            Logout
          </button>
          :
          <div>
            <Link to='/login'> Login </Link>
            <Link to='/signup'> Sign Up </Link>
          </div>
      }

      <Switch>
        <Route exact path='/'>
          <Home userData={userData} />
        </Route>

        <Route exact path='/signup'>
          <Signup />
        </Route>

        <Route exact path='/login'>
          <Login userData={userData}
            updateUser={updateLoggedInUserInfo} />
        </Route>
      </Switch>

    </div>
  )
}

export default App