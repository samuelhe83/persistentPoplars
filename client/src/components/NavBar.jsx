import React from 'react';

var Navbar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a href="#" className="navbar-brand">Home</a>
        <a href="#" className="navbar-brand">Proposals</a>
        <a href="#" className="navbar-brand">About</a>
        <div className="input-group" id="search">
          <input type="text" className="form-control" placeholder="Search" name="q"/>
          <div className="input-group-btn">
              <button className="btn btn-default" type="submit">
              <i className="glyphicon glyphicon-search"></i>
              </button>
          </div>
        </div>
      </div>
    </nav>

  );
}

module.exports = Navbar;