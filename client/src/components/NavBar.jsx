import React from 'react';
import Search from './Search.jsx';

var Navbar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a href="#" className="navbar-brand">Home</a>
        <a href="#" className="navbar-brand">Proposals</a>
        <a href="#" className="navbar-brand">About</a>
        <Search />
      </div>
    </nav>
  );
};



module.exports = Navbar;