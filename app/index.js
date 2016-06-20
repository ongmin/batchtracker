'use strict'
// New react-router format, merges render, dom selection and routing together
// I'm not sure how browserHistory works yet
var React = require('react')
import { render } from 'react-dom'
import { IndexRoute, browserHistory, Router, Route, Link } from 'react-router'

function loggedIn() {
  return !!localStorage.userToken
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render((
  <Router history={browserHistory}>
    <Route path='/' component={require('./components/app')}>
      <IndexRoute component={require('./components/customer/homePage')} />
      <Route path="guide" component={require('./components/customer/batchNumberGuide')} />
      <Route path='staff' component={require('./components/staff/staffView')} onEnter={requireAuth}>
        <Route path="batchRecords" component={require('./components/staff/inputView')}>
          <Route path="delete/:id" components={ {form: require('./components/staff/delete/deleteForm')} } />
        </Route>
      </Route>
      <Route path='*' component={require('./components/common/notFoundPage')}/>
    </Route>
  </Router>
), document.getElementById('app'))
