'use strict'
const React = require('react')
import { render } from 'react-dom'
import { IndexRoute, browserHistory, Router, Route } from 'react-router'

function loggedIn () {
  return !!window.localStorage.userToken
}

function requireAuth (nextState, replace) {
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
      <IndexRoute component={require('./components/Customer/homePage')} />
      <Route path='guide' component={require('./components/Customer/batchNumberGuide')} />
      <Route path='staff' component={require('./components/staff/staffView')} onEnter={requireAuth}>
        <Route path='batchRecords' component={require('./components/staff/inputView')}>
          <Route path='delete/:id' components={ {form: require('./components/staff/delete/deleteForm')} } />
        </Route>
      </Route>
      <Route path='*' component={require('./components/common/notFoundPage')}/>
    </Route>
  </Router>
), document.getElementById('app'))
