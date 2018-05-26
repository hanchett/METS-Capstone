import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";

import "./css/NewForumPost.css";

class NewForumPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      subject: "",
      category: "",
      summary: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  submitForum(e) {
    e.preventDefault();
    const { title, subject, category, summary } = this.state;
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const date = "" + month + "-" + day + "-" + year;
    const uid = '5af606f13aa90513d1c97164'; 

    axios.post(`http://localhost:3101/forum/new/${uid}`, {
        title: title, 
        subject: subject, 
        category: category, 
        summary: summary, 
        date: new Date()
    }).then(res => {
        console.log('Forum Post Successfully Added');
        this.props.history.push(`/Forum`);
        
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="newForum">
        <NavBar />
        <div className="block" />
        <div className="container">
          <div className="forumPostCard">
            <h2>New Forum Post</h2>
            <form onSubmit={this.submitForum.bind(this)} className="forumForm">
              <h3>Title</h3>
              <input
                type="text"
                id="title"
                className="formInput"
                placeholder="Title"
                onChange={this.handleChange.bind(this)}
              />
              <h3>Subject</h3>
              <input
                type="text"
                id="subject"
                className="formInput"
                placeholder="Subject"
                onChange={this.handleChange.bind(this)}
              />
              <h3>Category</h3>
              <input
                type="text"
                id="category"
                className="formInput"
                placeholder="Category"
                onChange={this.handleChange.bind(this)}
              />
              <h3>Summary</h3>
              <textarea
                rows="4"
                cols="50"
                type="text"
                id="summary"
                className="sum"
                placeholder="What would you like to talk about?"
                onChange={this.handleChange.bind(this)}
              />
              <label className="formLabel">
                <input type="submit" value="Submit" className="submitBtn" />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewForumPost;
