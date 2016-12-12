import React from 'react';
import { Link } from 'react-router';
import Search from './Search.jsx';

var Navbar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a href="/home" className="navbar-brand">Home</a>
        <a href="myproposals" className="navbar-brand">My Proposals</a>
        <a href="#" className="navbar-brand">About</a>
        <Link to="/newproposal" className="navbar-brand">Add New Proposal</Link>
        <Search />
      </div>
    </nav>
  );
};



module.exports = Navbar;