import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import axios from "axios";

import "./css/NewReview.css";

class NewReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "placeholder",
      headline: "",
      review: "",
      rating: 3.5,
      id: props.match.params.id
    };
    this.handleChange = this.handleChange.bind(this);
  }

  submitReview(e) {
    e.preventDefault();
    const { headline, review, rating, id } = this.state;
    const uid = "5af606f13aa90513d1c97164"; //TODO: Lookup user based on Mason's work
    const username = "shig";
    axios
      .post(`http://localhost:3101/review/${id}`, {
        headline: headline,
        review: review,
        rating: rating,
        uid: uid,
        username: username
      })
      .then(res => {
        console.log("Review Successfully Added");
        this.props.history.push(`/review/${this.state.id}`);
        alert("Review Successfully Added");
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  handleChange(e) {
    if (typeof e === "number") {
      this.setState({
        rating: e
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value
      });
    }
  }

  render() {
    var Rating = require("react-rating");
    return (
      <div>
        <NavBar />
        <div className="content">
          <h1>New Review</h1>
          <h2>Submit a new review for {this.state.title}</h2>
        </div>

        <form onSubmit={this.submitReview.bind(this)} className="productForm">
          <label className="formLabel">
            <h3>Review Headline</h3>
            <input
              type="text"
              id="headline"
              className="formInput"
              placeholder="Ex. Read.ly"
              onChange={this.handleChange}
            />
          </label>
          <label className="formLabel">
            <h3>Review</h3>
            <textarea
              rows="5"
              cols="50"
              type="text"
              id="review"
              className="summaryInput"
              placeholder="Enter your review here."
              onChange={this.handleChange}
            />
          </label>
          <label className="formLabel">
            <h3>Rating</h3>
            <Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              fractions={2}
              onChange={this.handleChange}
              initialRating={this.state.rating}
            />
          </label>
          <label className="radios">
            <h3>What education level do you teach?</h3>
            <div className="radioBtn">
              <input type="radio" name="age1" value="k-5" />K-5<br />
            </div>
            <div className="radioBtn">
              <input type="radio" name="age2" value="middle" />Middle School<br />
            </div>
            <div className="radioBtn">
              <input type="radio" name="age3" value="high" />High School<br />
            </div>
          </label>
          <label htmlFor="">
            <h3>
              Do you work with students with disabilities? Please select all
              that apply
            </h3>
            <div className="radioBtn">
              <input type="radio" name="disability1" value="1" />Auditory
              perception & processing<br />
            </div>
            <div className="radioBtn">
              <input type="radio" name="disability2" value="2" />Visual
              perception & processing <br />
            </div>
            <div className="radioBtn">
              <input type="radio" name="disability2" value="3" />Information processing speed <br />
            </div>
            <div className="radioBtn">
              <input type="radio" name="disability2" value="4" />Abstract reasoning <br />
            </div>
            <div className="radioBtn">
              <input type="radio" name="disability2" value="5" />Retention<br />
            </div>
            <div className="radioBtn">
              <input type="radio" name="disability2" value="6" />Spoken & written language <br />
            </div>
            <div className="radioBtn">
              <input type="radio" name="disability2" value="7" />Mathematical Calculation <br />
            </div>
          </label>

          <label className="formLabel">
            <input type="submit" value="Submit" className="submitBtn" />
          </label>
        </form>
      </div>
    );
  }
}

export default NewReview;
