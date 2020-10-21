import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'

function App() {
  return(
    <div className='app'>
      
      <Link to='/'> Home </Link>
      <Link to='/signup'> Sign Up </Link>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>

    </div>
  )
}

export default App