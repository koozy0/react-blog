import React, { Component } from 'react';
import NavbarItems from './NavbarItems';

class NavbarItems extends Component {
  render() {
    return (
      <div className="Navbar">
        <h3>{ this.props.name }</h3>
        <NavbarItems />
      </div>
    );
  }
}

export default NavbarItems;
