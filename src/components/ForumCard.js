import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import "./css/ForumCard.css";

class ForumCard extends Component {
  constructor(props) {
    super(props);
    const postedDate = new Date(props.date);
    const currentDate = new Date();
    const dateDiff = Math.round((currentDate - postedDate) % 24);
    this.state = {
      author: props.author.display_name,
      summary: props.summary,
      title: props.title,
      subject: props.subject,
      category: props.category,
      image: require("../img/user_placeholder.png"),
      time: dateDiff,
      views: Math.round(20 * Math.random()),
      comments: props.comments,
      id: props.id
    };
  }

  render() {
    return (
      <div>
        <Link to={`/Forum/${this.state.id}`}>
          <div className="forumCard">
            <img src={this.state.image} alt="User profile image" />
            <div className="titleInfo">
              <h2>{this.state.title}</h2>
              <p>{this.state.author}</p>
              <p className="category">{this.state.category}</p>
              <br />
              <div className="subject">{this.state.subject}</div>
            </div>
            <br />
            <div className="stats">
              <p>{this.state.views} Views</p>
              <p>{this.state.comments.length} Comments</p>
              <p>{this.state.time} Hours Ago</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ForumCard;
