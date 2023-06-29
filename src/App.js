import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, SignIn } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App