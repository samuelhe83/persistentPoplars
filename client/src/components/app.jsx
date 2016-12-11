import React from 'react';
import ProposalList from './ProposalList.jsx'
import Navbar from './NavBar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <Navbar />
        <ProposalList proposals={[{title:'Test', date: '2016-12-01', stage: 2, supporters: 10, watchers: 100}]} />
      </div>
    );
  }
};






module.exports = App;