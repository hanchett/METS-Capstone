import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      });
  }

  render() {
    return (
      <div>
        <div class='navigation'>
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">METS</a>
              </div>
              <ul class="nav navbar-nav navbar-right">
                <li>About</li>
                <li>Services</li>
                <li>Login</li>
                <li><i class="far fa-user"></i></li>
              </ul>
            </div>
          </nav>
        </div>
        <div class='body'>
          <div class='search'>
            <h2>Find the best technologies for your students with us</h2>
            <form>
              <div class="form-group">
                <input type="text" class="form-control" id="subject" aria-describedby="subject" placeholder="Subject" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="learningBarrier" placeholder="Learning Barrier" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="Learning Style" placeholder="Learning Style" />
              </div>
              <div class='advSearch'>Advanced Search</div> 
              <button type="submit" class="btn btn-primary">Search</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
