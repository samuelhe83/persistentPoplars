import React from 'react';
import $ from 'jquery';

import Navbar from './NavBar.jsx';
import ProposalList from './ProposalList.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proposals: []
    };
  }

  componentDidMount() {
    var callback = (data) => this.setState({proposals: data});
    this.getProposals(callback);
  }

  getProposals(cb) {
    $.ajax({
      url: '/proposals',
      method: 'GET',
      contentType: 'application/json',
      success: (data) => {
        cb(data);
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children && React.cloneElement.call(this, this.props.children, {proposals: this.state.proposals})}
      </div>
    );
  }

}

module.exports = Dashboard;