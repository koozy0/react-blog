import React, { Component } from 'react';
import NavbarItem from './NavbarItem';

class Navbar extends Component {
  render() {
    let navbarItems;
    navbarItems = this.props.navbarItems.map(item => {
      return <NavbarItem key={item.id} description={item.description}/>
    })

    return (
      <div className="Navbar">
        <h3>{ this.props.name }</h3>
        { navbarItems }
      </div>
    );
  }
}

export default Navbar;
