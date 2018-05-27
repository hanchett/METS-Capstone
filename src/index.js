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
import NewReview from './components/NewReview';
import SurveyResults from './components/SurveyResults';
import Forum from './components/Forum';
import NewForumPost from './components/NewForumPost';
import ForumPost from './components/ForumPost';
import NewComment from './components/NewComment';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path="/search/:subjects?/:disabilities?/:circumstances?/:searchFilters?/:filter?" component={Search} />
      <Route exact path='/review/:id?' component={Review}/>
      <Route exact path='/survey/:id?' component={Survey}/>
      <Route exact path='/account' component={Account}/>
      <Route exact path='/surveyresults/:responses' component={SurveyResults} />
      <Route exact path='/product/new' component={NewProduct}/>
      <Route exact path='/review/:title/:id/new' component={NewReview}/>
      <Route exact path='/forum' component={Forum}/>
      <Route exact path='/forum/new' component={NewForumPost}/>
      <Route exact path='/forum/:id' component={ForumPost}/>
      <Route exact path='/forum/new/:id' component={NewComment}/>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();