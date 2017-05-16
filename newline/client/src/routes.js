import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import Route from './components/AuthRoute'

import Landing from 'views/Public/Landing/Landing'
import Login from 'views/Public/Auth/Login'

// import Home from './views/Home/Home'

export default props => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  </Router>
)