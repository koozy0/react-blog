import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import NewPost from './Components/NewPost';
import uuid from 'uuid';
import './App.css';

const posts = [
  {
    id: uuid.v4(),
    title: 'test title 1',
    content: 'Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: uuid.v4(),
    title: 'test title 2',
    content: 'Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: uuid.v4(),
    title: 'test title 3',
    content: 'Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    this.setState({posts: posts});
  }

  handleAddPost(newPost) {
    let posts = this.state.posts;
    posts.push(newPost);
    this.setState({posts: posts});
  }

  render() {
    return (
      <div className="App">
        <Navbar name="Navbar"/>
        <NewPost addPost={(newPost) => this.handleAddPost(newPost)}/>
        <Posts posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
