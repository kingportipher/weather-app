import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/login'

function App() {
  return(
    <div className='app'>
      
      <Link to='/'> Home </Link>
      <Link to='/login'> Login </Link>
      <Link to='/signup'> Sign Up </Link>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/signup'>
          <Signup />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>

    </div>
  )
}

export default App