import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
      <div class="container" class="text-right">
        <nav class="navbar navbar-default navbar-fixed-top">
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Login</li>
              <li><span class="glyphicon glyphicon-user" aria-hidden="true"></span></li>
            </ul>
        </nav>

      </div>
    );
  }
}

export default App;
