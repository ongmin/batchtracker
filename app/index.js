'use strict'
// New react-router format, merges render, dom selection and routing together
// I'm not sure how browserHistory works yet
var React = require('react')
import { render } from 'react-dom'
import { IndexRoute, browserHistory, Router, Route } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path='/' component={require('./components/app')}>
      <IndexRoute component={require('./components/homePage')} />
      <Route path='about' component={require('./components/about/aboutPage')}/>
      <Route path='*' component={require('./components/notFoundPage')}/>
    </Route>
  </Router>
), document.getElementById('app'))
