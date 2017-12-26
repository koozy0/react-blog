import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import BlogPosts from './Components/BlogPosts';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blogPosts: [
        {
          name: 'test'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar name="Navbar"/>
        react-blog
        <BlogPosts />
      </div>
    );
  }
}

export default App;
