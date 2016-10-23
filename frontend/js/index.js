import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import Home from './components/Home'
import Post from './components/Post'

render((
  <Router history={browserHistory}>
    <Route path ="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/post/:postLink" component={Post}/>
    </Route>
  </Router>
), document.getElementById('app'));
