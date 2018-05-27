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
      id: props.match.params.id,
      new_summary: "",
      replyDisp: false,
      comments: []
    };
    this.getComments = this.getComments.bind(this);
  }

  showReplyBox() {
    this.setState({ replyDisp: true });
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
          views: data.views,
        });
        let state_comments = [];
        for(let i = 0; i < data.comments.length; i++) {
            axios.get(`http://localhost:3101/forum/comment/${data.comments[i]}`).then(res => {
                console.log(res);
                state_comments.push(res.data);
            }).catch(err => {
                console.log(err);
            })
        }
        this.setState({comments: state_comments});
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getComments();
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  submitComment() {
    if (!this.state.comment_id) {
      axios
        .post(`http://localhost:3101/forum/${this.state.id}`, {
          uID: "5af606f13aa90513d1c97164",
          summary: this.state.new_summary,
          date: this.state.date
        })
        .then(res => {
          console.log("Comment Successfully Added");
          this.props.history.push(`/Forum/${this.state.id}`);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  render() {
    console.log(this.state);
    let showReply = this.state.replyDisp ? "block" : "none";
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
          <button onClick={this.showReplyBox.bind(this)}>
            <FontAwesome name="fas fa-reply" /> Reply
          </button>
        </div>
      </div>
    ) : (
      <div>Nothing to see here</div>
    );

    console.log(this.state.comments.length)
    let comments = this.state.comments.length > 0 ? (
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
        <form
          onSubmit={this.submitComment.bind(this)}
          className="forumForm"
          style={{ display: showReply }}
        >
          <textarea
            rows="4"
            cols="50"
            type="text"
            id="new_summary"
            className="sum"
            placeholder="Type your message here"
            onChange={this.handleChange.bind(this)}
          />
          <label className="formLabel">
            <input type="submit" value="Submit" className="submitBtn" />
          </label>
        </form>
      </div>
    );
  }
}

export default ForumPost;
