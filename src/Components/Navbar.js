import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <h3>{ this.props.name }</h3>
      </div>
    );
  }
}

export default Navbar;
