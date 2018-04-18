import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Search from './components/Search';
import Review from './components/Review';
import Survey from './components/Survey';
import NewProduct from './components/NewProduct';
import registerServiceWorker from './registerServiceWorker';
import Account from './components/Account';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path="/search/:subjects?/:disabilities?/:circumstances?" component={Search} />
      <Route exact path='/review/:id?' component={Review}/>
      <Route exact path='/survey' component={Survey}/>
      <Route exact path='/account' component={Account}/>
      <Route exact path='/surveyresults/:filters?' component={Search} />
      <Route exact path='/product/new' component={NewProduct}/>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();