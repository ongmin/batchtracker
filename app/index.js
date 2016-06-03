'use strict'
// New react-router format, merges render, dom selection and routing together
// I'm not sure how browserHistory works yet
var React = require('react')
import { render } from 'react-dom'
import { IndexRoute, browserHistory, Router, Route, Link } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path='/' component={require('./components/app')}>
      <IndexRoute component={require('./components/homePage')} />
      <Route path='about' component={require('./components/about/aboutPage')}/>
      <Route path='staff' component={require('./components/staffView')}>
        <Route path="batchRecords" component={require('./components/staff/inputView')}>
          <Route path="edit/:id" components={ {form: require('./components/staff/edit/editForm')} } />
        </Route>
      </Route>
      <Route path='*' component={require('./components/notFoundPage')}/>
    </Route>
  </Router>
), document.getElementById('app'))
