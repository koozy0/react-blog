import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <li className="Post">
        { this.props.post.title }
        <br />
        { this.props.post.content }
      </li>
    );
  }
}

export default Post;
