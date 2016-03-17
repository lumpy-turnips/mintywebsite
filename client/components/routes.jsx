import React from 'react';
import Home from './home.jsx'
import NoURL from './404.jsx'
import About from './about.jsx'
import App from './app.jsx'
import Docs from './api.jsx'
import Example from './example.jsx'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path ="/example" component={Example}/>
    <Route path="/about" component={About}/>
    <Route path="/docs" component={Docs}/>
    <Route path="*" component={NoURL}/>
  </Route>
);
