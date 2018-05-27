import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

import "./css/ForumPost.css";

class ForumPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id
    };
    this.getComments = this.getComments.bind(this);
  }

  getComments() {
    axios
      .get(`http://localhost:3101/forum/${this.state.id}`)
      .then(res => {
        let data = res.data;
        this.setState({
          author: data.author.display_name,
          summary: data.summary,
          title: data.title,
          subject: data.subject,
          category: data.category,
          image: require("../img/user_placeholder.png"),
          comments: data.comments,
          views: data.views,
          id: data._id
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getComments();
  }

  render() {
    let content = this.state.author ? (
      <div className="forumCard">
        <img src={this.state.image} alt="User profile image" />
        <div className="titleInfo">
          <h2>{this.state.title}</h2>
          <p>{this.state.author}</p>
          <br />
          <div className="subject">{this.state.summary}</div>
        </div>
        <br />
        <div className="stats">
          <p>{this.state.views} Views</p>
          <p>{this.state.comments.length} Comments</p>
          <p>{this.state.time} Hours Ago</p>
          <Link to={`new/${this.state.id}`}>
            <button>
              <FontAwesome name="fas fa-reply" /> Reply
            </button>
          </Link>
        </div>
      </div>
    ) : (
      <div>Nothing to see here</div>
    );

    let comments = this.state.comments ? (
      this.state.comments.map(comment => {
        return (
          <div>
            <img src={this.state.image} alt="User profile image" />
            <p>{comment.author.display_name}</p>
            <FontAwesome name="fas fa-thumbs-up" />
            <p>{comment.content}</p>
            <p>
              {(new Date() - new Date(comment.date)) % 24} Hours Since Posted
            </p>
          </div>
        );
      })
    ) : (
      <div>Nothing to see here</div>
    );

    return (
      <div>
        <NavBar />
        <div className="content">{content}</div>
      </div>
    );
  }
}

export default ForumPost;
