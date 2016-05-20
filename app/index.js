import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App.js'
import DataWrapper from './components/DataWrapper'

var data = []
ReactDom.render(<DataWrapper data={data}><App/></DataWrapper>,document.getElementById('mount'))
