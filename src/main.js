import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

// var React = require('react');
// var ReactDOM = require('react-dom');
let h1 = React.createElement('h1', null, 'REACT');

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
