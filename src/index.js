import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Search from './components/Search';
import Review from './components/Review';
import Survey from './components/Survey';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path="/search/:filters?" component={Search} />
      <Route exact path='/review/:id?' component={Review}/>
      <Route exact path='/survey' component={Survey}/>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();