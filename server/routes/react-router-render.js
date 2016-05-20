// React views
import React from 'react'
import {renderToString} from 'react-dom/server'
//render a React element to its original HTML
import {match, RouterContext} from 'react-router'
import createLocation from 'history/lib/createLocation'
import HomePage from './../../app/components/homePage'
import DataWrapper from './../../app/components/DataWrapper'
import BatchRecord from './../models/batchRecord.js'

module.exports = function(app) {

  const routes = {
    path: '/',
    component: require('./../../app/components/common/Header'),
    indexRoute: {
      component: HomePage
    },
    childRoutes: [
      {
        path: 'about',
        component: require('./../../app/components/about/aboutPage')
      }
    ]
  }

  app.use((req, res, next) => {
    const location = createLocation(req.path);

    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match({
      routes,
      location
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        renderWithData(req, res, renderProps);
      } else {
        next()
      }
    })
  })
}

function renderWithData(req, res, renderProps) {
  if (req.url == "/") {
    BatchRecord.find(function(error, doc) {
      var data = doc;
      renderIsoOutput(data, renderProps, res);
    });
  } else {
    renderIsoOutput([], renderProps, res);
  }
}

function renderIsoOutput(data, renderProps, res){
    var generated = renderToString(<DataWrapper data={ data }><RouterContext {...renderProps} /></DataWrapper>);
    res.render('./../app/index.ejs',{reactOutput:generated})
}
