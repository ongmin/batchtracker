import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import HomePage from './homePage'
import About from './about/aboutPage'
import Header from './common/header'
import { browserHistory, createMemoryHistory } from 'react-router'
// import createMemoryHistory from 'history/lib/createMemoryHistory';

var history;
if (typeof(window) !== 'undefined'){
  history = browserHistory;
}
else {
  history = createMemoryHistory(); //This kind of history is needed for server-side rendering.
}

export default (props) => {
  return (

    <Router history={history}>
      <Route path='/' component={Header}>
        <IndexRoute component={HomePage}/>
        <Route path='about' component={About} />
      </Route>
    </Router>
  )
}
