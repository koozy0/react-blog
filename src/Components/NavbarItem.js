import React, { Component } from 'react';

class NavbarItem extends Component {
  render() {
    return (
      <div className="NavbarItem">
        <button>{this.props.description}</button>
      </div>
    );
  }
}

export default NavbarItem;
