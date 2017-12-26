import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        { this.props.name }
      </div>
    );
  }
}

export default Navbar;
