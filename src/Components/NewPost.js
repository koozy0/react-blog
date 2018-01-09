import React, { Component } from 'react';
import uuid from 'uuid';

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      newPost: {}
    }
  }

  handleSubmit(e) {
    if (!this.refs.title.value) alert('Title is required');
    else if (!this.refs.content.value) alert('Content is required');
    else {
      this.setState({
        newPost: {
          id: uuid.v4(),
          title: this.refs.title.value,
          content: this.refs.content.value
        }
      }, function() {
        this.props.addPost(this.state.newPost);
      })
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="NewPost">
        <h3>New Post</h3>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" ref="title" />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <textarea id="content" rows="4" cols="50" ref="content"  />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
