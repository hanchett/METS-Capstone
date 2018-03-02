import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Search from './components/Search'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path="/search" component={Search} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();