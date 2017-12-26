import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() {
    // loop through posts using map and create post component
    let posts;
    if (this.props.posts) posts = this.props.posts.map(post => {
      return <Post post={post} key={post.id} />
    });

    return (
    <div>
      <h3>Posts</h3>
      <ul className="Posts">
        { posts }
      </ul>
    </div>
    );
  }
}

export default Posts;
