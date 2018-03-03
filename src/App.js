import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick'
import Select from 'react-select';
import MultiSelect from './components/MultiSelect';
import NavBar from './components/NavBar';

import 'react-select/dist/react-select.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './App.css';


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
  console.log(style);
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', margin: "0 0 0 12.5%", color: "white" }}
      onClick={onClick}
    ></div>
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: []
    };
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
                  <MultiSelect name={"subject"} placeholder={"Subjects"} />
                </div>
                <div className="form-group">
                  <MultiSelect name={"barrier"} placeholder={"Learning Disabilities"} />
                </div>
                <div className="form-group">
                  <MultiSelect name={"style"} placeholder={"Student Circumstances"} />
                </div>
                <div className='advSearch'>Advanced Search</div>
                <Link to={"/search"}><button type="submit" className="btn btn-primary">Search</button></Link>
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
              <h2>Collaborate with other educators</h2>
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
