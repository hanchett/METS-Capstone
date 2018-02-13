import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className='navigation'>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">METS</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li>About</li>
                <li>Services</li>
                <li>Login</li>
                <li><i className="fa fa-user"></i></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='body'>

          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='search'>
                  <h2>Find the best technologies for your students with us</h2>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" id="subject" aria-describedby="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="learningBarrier" placeholder="Learning Barrier" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="Learning Style" placeholder="Learning Style" />
                    </div>
                    <div className='advSearch'>Advanced Search</div>
                    <button type="submit" className="btn btn-primary">Search</button>
                  </form>
                </div>
              </div>

              <div className="carousel-item">
                Blah
              </div>
              <div className="carousel-item">
                blah 2
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>



        </div>
      </div>
    );
  }
}

export default App;
