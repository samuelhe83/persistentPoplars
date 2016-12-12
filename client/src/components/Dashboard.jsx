import React from 'react';
import ProposalList from './ProposalList.jsx';
import Navbar from './NavBar.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proposals: []
    };
  }

  componentDidMount() {
    var callback = (data) => this.setState({proposals: data});
    this.props.route.getProposalsAjax(callback);

  }

  render() {
    return (
      <div>
        <Navbar />
        <ProposalList proposals={this.state.proposals} />
      </div>
    );
  }

}

module.exports = Dashboard;