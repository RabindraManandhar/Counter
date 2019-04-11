import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
<h1>My name is Rabindra. I am {Math.floor(Math.random()*30)} years old.</h1>
      </div>
    );
  }
}

export default Header;
