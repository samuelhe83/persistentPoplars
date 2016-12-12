import React from 'react';
var Search = (props) => {
  return (
    <div className="input-group" id="search">
      <input type="text" className="form-control" placeholder="Search" name="q"/>
      <div className="input-group-btn">
          <button className="btn btn-default" type="submit">
          <i className="glyphicon glyphicon-search"></i>
          </button>
      </div>
    </div>
  );
}

module.exports = Search;