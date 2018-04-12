// Imported libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'

// Imported Components 
import MultiSelect from './components/MultiSelect';
import NavBar from './components/NavBar';

// Style Imports 
import 'react-select/dist/react-select.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './App.css';

// These functions determine the style and actions of the Slick Carousel arrow buttons.
function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', margin: "0 12.5% 0 0" }}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', margin: "0 0 0 12.5%" }}
      onClick={onClick}
    ></div>
  );
}

// Main Home-Page Class 
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: [] // Holds all filters chosen by the users
    }
  }

  // Adds filters to the state as user selects them 
  addFilter(filters) {
    this.setState({
      selected: filters
    });
  }

  render() {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      className: 'search'
    }

    return (
      <div >
        <NavBar />
        <div className='body home'>
          <Slider {...settings} className='slider'>
            <div className='search'>
              <h2>Find the best technologies for your students with us</h2>
              <form>
                <div className="form-group">
                  <MultiSelect name={"subject"} placeholder={"Subjects"} addFilter={this.addFilter.bind(this)} />
                </div>
                <div className="form-group">
                  <MultiSelect name={"barrier"} placeholder={"Learning Disabilities"} addFilter={this.addFilter.bind(this)} />
                </div>
                <div className="form-group">
                  <MultiSelect name={"circumstance"} placeholder={"Student Circumstance"} addFilter={this.addFilter.bind(this)} />
                </div>
                <div className='advSearch'>Advanced Search</div>
                <Link to={'/search/' + this.state.selected}>
                  <button type="submit" className="btn btn-primary">Search</button>
                </Link>
              </form>
            </div>

            <div className='search'>
              <h2>Review technologies that you have used</h2>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="product" aria-describedby="product" placeholder="Product Name" />
                </div>
                <button type="submit" className="btn btn-primary">Review</button>
              </form>
            </div>

            <div className='search'>
              <h2>Need advice? Collaborate with other educators</h2>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="topic" aria-describedby="topic" placeholder="Topic" />
                </div>
                <div className='advSearch'>Don't have a topic in mind? Go straight to the forum.</div>
                <button type="submit" className="btn btn-primary">Search</button>
              </form>
            </div>
          </Slider>
        </div>
      </div>



    );
  }
}

export default App;
