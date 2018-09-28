import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
    );
  }
}

export default Header;
