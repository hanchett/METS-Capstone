import React, { Component } from "react";
import ForumCard from "./ForumCard";
import axios from "axios";

class ForumCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.loadForumCards = this.loadForumCards.bind(this);
  }

  loadForumCards() {
    axios.get("http://localhost:3101/forum").then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  componentDidMount() {
    this.loadForumCards();
  }

  render() {
    const posts =
      this.state.posts.length > 0 ? (
        this.state.posts.map(post => {
          return (
            <ForumCard
              key={post._id}
              id={post._id}
              author={post.author}
              summary={post.summary}
              subject={post.subject}
              category={post.category}
              date={post.date}
              title={post.title}
              comments={post.comments}
              views={post.views}
            />
          );
        })
      ) : (
        <div className="noReviews">No Posts Yet</div>
      );

    return <div>{posts}</div>;
  }
}

export default ForumCardList;
